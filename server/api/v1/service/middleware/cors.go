package middleware

import "github.com/gogf/gf/v2/net/ghttp"

func (*Middleware) Cors(r *ghttp.Request) {
	r.Response.CORSDefault()
	r.Response.Header().Set("Access-Control-Expose-Headers", "Content-disposition")
	r.Middleware.Next()
	r.Response.Header().Set("Access-Control-Expose-Headers", "Content-disposition")
}
