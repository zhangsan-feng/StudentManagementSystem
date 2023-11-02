package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/api/v1/model"
	"server/utils"
)

func (*AdminClass) GetCLassUserSelectUserInfo(r *ghttp.Request) {
	student_data := []model.User{}
	if db_err := g.Model("user").
		Where("role", 1).
		Where("(select count(1) from class_user where user.id=class_user.user_id)=0").
		Scan(&student_data); db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	teacher_data := []model.User{}
	if db_err := g.Model("user").Where("role", 2).Scan(&teacher_data); db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, g.Map{"student_data": student_data, "teacher_data": teacher_data}, "")
}
