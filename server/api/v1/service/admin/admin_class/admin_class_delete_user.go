package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClass) DeleteUser(r *ghttp.Request) {
	id := r.Get("id")

	if id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	_, db_err := g.Model("class_user").Delete("user_id", id)
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "删除成功", "")
}
