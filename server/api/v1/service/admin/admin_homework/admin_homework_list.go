package admin_homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminHomeWork) List(r *ghttp.Request) {
	db_data, db_err := g.Model("curriculum_homework").
		Fields(
			"user.username",
			"user.id as user_id",
			"class.id as class_id",
			"class.class_number",
			"curriculum_homework.id",
			"curriculum_homework.title",
			"curriculum_homework.create_time",
			"curriculum_homework.expire_time",
			"curriculum_homework.file_name",
		).
		LeftJoin("user", "curriculum_homework.user_id=user.id").
		LeftJoin("class", "curriculum_homework.class_id=class.id").
		Page(r.Get("page").Int(), 10).
		All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, db_data, "")
}
