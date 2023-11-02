package utils_file

import (
	"archive/zip"
	"bytes"
	"golang.org/x/text/encoding/simplifiedchinese"
	"golang.org/x/text/transform"
	"io"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

func Zip(frm, dst string) error {
	buf := bytes.NewBuffer(make([]byte, 0, 100*1024*1024))
	myzip := zip.NewWriter(buf)
	err := filepath.Walk(frm, func(path string, info os.FileInfo, err error) error {
		var file []byte
		if err != nil {
			return filepath.SkipDir
		}

		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return filepath.SkipDir
		}
		header.Name, _ = filepath.Rel(filepath.Dir(frm), path)
		if !info.IsDir() {
			header.Method = 8
			file, err = ioutil.ReadFile(path)
			if err != nil {
				return filepath.SkipDir
			}
		} else {
			file = nil
		}
		w, err := myzip.CreateHeader(header)
		if err != nil {
			return err
		}
		_, err = w.Write(file)

		if err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		return err
	}
	myzip.Close()
	file, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer file.Close()
	_, err = buf.WriteTo(file)
	if err != nil {
		return err
	}
	return nil
}

func Unzip(zipFile string, destDir string) (string, error) {
	zipReader, err := zip.OpenReader(zipFile)
	if err != nil {
		return "", err
	}
	defer zipReader.Close()
	var decodeName string
	var file_name string
	for _, f := range zipReader.File {
		file_name = f.Name
		if f.Flags == 0 {
			//如果标致位是0  则是默认的本地编码   默认为gbk
			i := bytes.NewReader([]byte(f.Name))
			decoder := transform.NewReader(i, simplifiedchinese.GB18030.NewDecoder())
			content, _ := ioutil.ReadAll(decoder)
			decodeName = string(content)
		} else {
			//如果标志为是 1 << 11也就是 2048  则是utf-8编码
			decodeName = f.Name
		}
		fpath := filepath.Join(destDir, decodeName)
		if f.FileInfo().IsDir() {
			_ = os.MkdirAll(fpath, os.ModePerm)
		} else {
			if err = os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
				return "", err
			}
			inFile, err := f.Open()
			if err != nil {
				return "", err
			}
			defer inFile.Close()
			outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
			if err != nil {
				return "", err
			}
			defer outFile.Close()
			_, err = io.Copy(outFile, inFile)
			if err != nil {
				return "", err
			}
		}
	}
	file_name = strings.ReplaceAll(file_name, `\`, "/")
	file_name = strings.Split(file_name, "/")[0]
	//if len(file_name) == 0 {
	//	file_name = strings.Split(file_name,`\`)[0]
	//}
	return file_name, nil
}
