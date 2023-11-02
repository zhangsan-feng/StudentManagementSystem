package utils_time

import "time"

type UtilsTime struct {
}

func (UtilsTime) NowDate() string {
	return time.Now().Format("2006-01-02")
}

func (UtilsTime) NowDateTime24() string {
	return time.Now().Format("2006-01-02 15:04:05")
}

