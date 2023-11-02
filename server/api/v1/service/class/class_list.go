package class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*Class) Details(r *ghttp.Request) {
	class_id := r.Get("class_id")

	db_data2, db_err2 := g.Model("class_user").
		Fields("user.id", "user.username", "user.phone", "user.create_time", "user.student_id", "").
		LeftJoin("user", "class_user.user_id=user.id").
		Where("class_id", class_id).All()
	if db_err2 != nil {
		g.Log().Line().Debug(context.TODO(), db_err2)
		utils.Response.Field(r)
	}

	//g.Log().Line().Debug(context.TODO(), db_data)
	utils.Response.Success(r, db_data2, "")
}
