package utils

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gconv"
	"time"
)

var http_client = g.Client()

func HttpPost(url string, headers map[string]string, data interface{}) (map[string]interface{}, error) {
	res, err := http_client.Header(headers).ContentJson().Timeout(time.Second*3).Post(gctx.New(), url, data)
	if err != nil {
		return nil, err
	}
	response_data := gconv.Map(res.ReadAllString())
	return response_data, nil
}

func HttpGet(url string, headers map[string]string, data interface{}) (map[string]interface{}, error) {
	res, err := http_client.Header(headers).ContentJson().Timeout(time.Second*3).Get(gctx.New(), url, data)
	if err != nil {
		return nil, err
	}
	response_data := gconv.Map(res.ReadAllString())
	return response_data, nil
}

func HttpUploadFile(url string, headers map[string]string, file string) (map[string]interface{}, error) {
	res, err := http_client.Header(headers).Timeout(time.Second*3).Post(gctx.New(), url, "file=@file:"+file)
	if err != nil {
		return nil, err
	}
	response_data := gconv.Map(res.ReadAllString())
	return response_data, nil
}
