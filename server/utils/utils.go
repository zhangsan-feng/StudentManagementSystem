package utils

import (
	"server/utils/utils_aes"
	"server/utils/utils_file"
	"server/utils/utils_jwt"
	"server/utils/utils_log"
	"server/utils/utils_md5"
	"server/utils/utils_redis"
	"server/utils/utils_response"
	"server/utils/utils_rsa"
	"server/utils/utils_sftp"
	"server/utils/utils_time"
	"time"
)

const MysqlLimitPage = 50

var Response = utils_response.Response{}
var File = utils_file.UtilsFile{}
var Rsa = utils_rsa.RSA
var Md5 = utils_md5.UtilsMd5{}
var Jwt = utils_jwt.Jwt{}
var Aes = utils_aes.Aes{}
var Log = utils_log.UtilsLog{}
var Time = utils_time.UtilsTime{}
var Sftp = utils_sftp.UtilsSFTP{}
var Redis = utils_redis.UtilsRedis{}

const StaticFilePath = "./static/"

func NowDate() string {
	return time.Now().Format("2006-01-02")
}

func NowDateTime24() string {
	return time.Now().Format("2006-01-02 15:04:05")
}
