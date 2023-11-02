package admin_homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminHomeWork) Student(r *ghttp.Request) {
	id := r.Get("id")

	db_data, db_err := g.Model("commit_homework").
		Fields("user.username", "commit_homework.id", "commit_homework.path", "commit_homework.commit_time").
		LeftJoin("user", "commit_homework.student_id=user.id").
		Where("commit_homework.homework_id", id).All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, db_data, "")
}
