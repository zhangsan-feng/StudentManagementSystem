package middleware

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

var HeaderMatch = map[string]string{
	"Sec-Fetch-Site":     "Sec-Fetch-Site",
	"Referer":            "Referer",
	"Sec-Ch-Ua":          "Sec-Ch-Ua",
	"Sec-Fetch-Dest":     "Sec-Fetch-Dest",
	"Sec-Fetch-Mode":     "Sec-Fetch-Mode",
	"Accept-Language":    "Accept-Language",
	"Sec-Ch-Ua-Mobile":   "Sec-Ch-Ua-Mobile",
	"Connection":         "Connection",
	"Accept":             "Accept",
	"Sec-Ch-Ua-Platform": "Sec-Ch-Ua-Platform",
	"Accept-Encoding":    "Accept-Encoding",
	"Content-Length":     "Content-Length",
}

func (*Middleware) RequestRecord(r *ghttp.Request) {
	g.Log().Line().Debug(context.TODO(), "RequestURL   :", r.RequestURI)
	g.Log().Line().Debug(context.TODO(), "RequestHeader:", r.Header)
	g.Log().Line().Debug(context.TODO(), "RequestBody  :", r.GetBodyString())
	//g.Log().Line().Debug(context.TODO(), "Authorization", "")
	//g.Log().Line().Debug(context.TODO(), "msToken", "")
	//g.Log().Line().Debug(context.TODO(), "XBogus", "")
	//g.Log().Line().Debug(context.TODO(), "signature", "")
	//g.Log().Line().Debug(context.TODO(), "ttwid", "")
	//g.Log().Line().Debug(context.TODO(), "odin_tt", "")
	//g.Log().Line().Debug(context.TODO(), "cookie", "")
	//g.Log().Line().Debug(context.TODO(), "visa", "")

	//for k, v := range r.Header {
	//	if len(HeaderMatch[k]) != 0 {
	//		continue
	//	}
	//	g.Log().Line().Debug(context.TODO(), k, v)
	//}

	r.Middleware.Next()
}
