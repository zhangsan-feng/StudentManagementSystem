package admin_student

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminStudent) Modify(r *ghttp.Request) {
	id := r.Get("id")
	username := r.Get("username")
	phone := r.Get("phone")

	if id.IsEmpty() || username.IsEmpty() || phone.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	_, db_err := g.Model("user").Where("id", id).Update(g.Map{
		"username": username, "phone": phone,
	})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "修改成功", "")

}
