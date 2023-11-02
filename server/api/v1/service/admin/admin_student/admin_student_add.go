package admin_student

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminStudent) Add(r *ghttp.Request) {
	username := r.Get("username")
	phone := r.Get("phone")
	student_id := r.Get("student_id")

	if username.IsEmpty() || phone.IsEmpty() || student_id.IsEmpty() {
		utils.Response.Error(r, "请填写参数")
	}
	_, db_err := g.Model("user").Insert(g.Map{
		"username":    username,
		"password":    "ovYRj+Q0HiMfsAu0pZkqMw==",
		"phone":       phone,
		"student_id":  student_id,
		"create_time": utils.NowDateTime24(),
		"update_time": utils.NowDateTime24(),
		"role":        1,
	})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "添加成功", "")
}
