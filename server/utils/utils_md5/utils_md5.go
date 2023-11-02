package utils_md5

import (
	"crypto/md5"
	"encoding/hex"

	"io"
)

type UtilsMd5 struct {
}

func (UtilsMd5) FileMd5(in io.Reader) (string, error) {

	md5_new := md5.New()
	_, err := io.Copy(md5_new, in)
	if err != nil {
		return "", err
	}

	return hex.EncodeToString(md5_new.Sum(nil)), nil
}

func (UtilsMd5) StrMd5(in io.Reader) (string, error) {

	return "", nil
}
