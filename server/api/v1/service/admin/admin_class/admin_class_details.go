package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClass) Details(r *ghttp.Request) {

	class_id := r.Get("class_id")
	if class_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	db_data, db_err := g.Model("class_user").
		Fields("user.id", "user.username", "user.phone", "create_time").
		LeftJoin("user", "class_user.user_id=user.id").
		Where("class_id", class_id).All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, db_data, "")
}
