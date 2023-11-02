package utils_response

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

type Response struct {
}

func (Response) Success(r *ghttp.Request, data interface{}, message interface{}) {
	r.Response.WriteHeader(200)
	r.Response.WriteJson(g.Map{
		"code":    200,
		"data":    data,
		"message": message,
	})
	r.Exit()
}

func (Response) Error(r *ghttp.Request, data interface{}) {
	r.Response.WriteHeader(200)
	r.Response.WriteJson(g.Map{
		"code": 10001,
		"data": data,
		//"message": message,
	})
	r.Exit()
}

func (Response) Field(r *ghttp.Request) {
	r.Response.WriteHeader(500)
	r.Response.WriteJson(g.Map{
		"code":  500,
		"error": "服务器异常,请稍后再试",
	})
	r.Exit()
}

func (Response) Authorization(r *ghttp.Request) {

	r.Response.WriteHeader(401)
	r.Response.WriteJson(g.Map{
		"code":  401,
		"error": "Authentication information error",
	})
	r.Exit()
}

func (Response) Forbidden(r *ghttp.Request) {
	r.Response.WriteHeader(403)
	r.Response.WriteJson(g.Map{
		"code":  403,
		"error": "Insufficient permissions",
	})
	r.Exit()
}

func (Response) WrongParameter(r *ghttp.Request) {

	r.Response.WriteHeader(400)
	r.Response.WriteJson(g.Map{
		"code": 1002,
		"data": "wrong parameter",
	})
	r.Exit()
}

func (Response) MissingParameter(r *ghttp.Request) {
	r.Response.WriteHeader(400)
	r.Response.WriteJson(g.Map{
		"code": 1003,
		"data": "missing parameter",
	})
	r.Exit()
}

func BadRequest() {

}

func WebError() {

}

func ApiError() {

}

func ServiceError() {

}

func UnknownError() {

}
