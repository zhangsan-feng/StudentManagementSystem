package homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*HomeWork) Details(r *ghttp.Request) {
	class_id := r.Get("class_id")
	db_data, db_err := g.Model("curriculum_homework").
		Fields("user.username",
			"curriculum_homework.id",
			"curriculum_homework.title",
			"curriculum_homework.create_time",
			"curriculum_homework.expire_time",
			"curriculum_homework.path",
			"curriculum_homework.file_name",
		).
		LeftJoin("user", "curriculum_homework.id=user.id").
		Where("curriculum_homework.class_id", class_id).All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, db_data, "")
}
