package utils_file

import (
	"archive/zip"
	"errors"
	"io/ioutil"
	"os"
)

func UnZipReaderToManyFile(zipFile string) (io_l []string, err error) {
	zipReader, err := zip.OpenReader(zipFile)
	if err != nil {
		return nil, errors.New("zip file open error: " + err.Error())
	}

	for _, f := range zipReader.File {

		inFile, err := f.Open()
		if err != nil {
			return nil, errors.New("os file open error: " + err.Error())
		}

		data, err := ioutil.ReadAll(inFile)
		if err != nil {
			return nil, errors.New("ioutil read file error: " + err.Error())
		}

		io_l = append(io_l, string(data))

		err = inFile.Close()
		if err != nil {
			return nil, errors.New("os file close  error: " + err.Error())
		}
	}

	err = zipReader.Close()
	if err != nil {
		return nil, errors.New("zip file close error: " + err.Error())
	}
	err = os.Remove(zipFile)
	if err != nil {
		return nil, errors.New("os remove file error: " + err.Error())
	}
	return io_l, nil
}

func (UtilsFile) UnZipReaderToOneFile(zipFile string) (io_l string, err error) {
	zipReader, err := zip.OpenReader(zipFile)
	if err != nil {
		return "", errors.New("zip file open error: " + err.Error())
	}

	for _, f := range zipReader.File {

		inFile, err := f.Open()
		if err != nil {
			return "", err
		}

		data, err := ioutil.ReadAll(inFile)
		//fmt.Println(string(data))
		if err != nil {
			return "", errors.New("ioutil read file error: " + err.Error())
		}
		err = inFile.Close()
		if err != nil {
			return "", errors.New("os file close  error: " + err.Error())
		}

		io_l = string(data)
	}

	err = zipReader.Close()
	if err != nil {
		return "", errors.New("zip file close error: " + err.Error())
	}
	err = os.Remove(zipFile)
	if err != nil {
		return "", errors.New("os remove file error: " + err.Error())
	}

	return io_l, nil
}
