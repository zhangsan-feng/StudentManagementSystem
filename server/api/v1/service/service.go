package service

import (
	"github.com/gogf/gf/v2/net/ghttp"
	"server/api/v1/service/admin"
	"server/api/v1/service/class"
	"server/api/v1/service/class_curriculum"
	"server/api/v1/service/homework"
	"server/api/v1/service/middleware"
	"server/api/v1/service/student"
	"server/api/v1/service/user"
	"server/utils"
)

var User = user.User{}
var Class = class.Class{}
var Student = student.Student{}
var Admin = admin.Admin{}
var Middleware = middleware.Middleware{}
var ClassCurriculum = class_curriculum.ClassCurriculum{}
var HomeWork = homework.HomeWork{}

func Ping(r *ghttp.Request) {
	utils.Response.Success(r, "ok", "")
}
