package middleware

import (
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
	"strings"
)

func (*Middleware) UserAuthentication(r *ghttp.Request) {
	Authorization := r.Header.Get("Authorization")
	//g.Log().Line().Debug(context.TODO(), Authorization)
	token, Terr := utils.Jwt.ParseToken(Authorization)
	//g.Log().Line().Debug(context.TODO(), token)
	//g.Log().Line().Debug(context.TODO(), Terr)
	if Terr != nil {
		utils.Response.Authorization(r)
	}

	if !token.VerifyAudience("2", true) && strings.Contains(r.RequestURI, "/admin") {
		utils.Response.Forbidden(r)
	}
	r.Middleware.Next()
}
