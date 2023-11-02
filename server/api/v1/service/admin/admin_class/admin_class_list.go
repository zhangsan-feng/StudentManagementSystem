package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClass) List(r *ghttp.Request) {
	db_data, db_err := g.Model("class").
		Fields("class.class_number", "user.username", "class.id as class_id").
		LeftJoin("user", "class.teacher_id=user.id").All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, db_data, "")
}
