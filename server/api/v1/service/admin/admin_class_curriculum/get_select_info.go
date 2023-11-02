package admin_class_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClassCurriculum) GetSelectInfo(r *ghttp.Request) {
	//curriculum_page := r.Get("curriculum_page")
	//class_page := r.Get("class_page")
	//user_page := r.Get("user_page")

	curriculum_data, curriculum_err := g.Model("curriculum").Fields("id", "name").All()
	if curriculum_err != nil {
		g.Log().Line().Debug(context.TODO(), curriculum_err)
		utils.Response.Field(r)
	}
	user_data, user_err := g.Model("user").Fields("id", "username").Where("role", "2").All()
	if user_err != nil {
		g.Log().Line().Debug(context.TODO(), user_err)
		utils.Response.Field(r)
	}
	class_data, class_err := g.Model("class").Fields("id", "class_number").All()
	if class_err != nil {
		g.Log().Line().Debug(context.TODO(), class_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, g.Map{
		"user":       user_data,
		"curriculum": curriculum_data,
		"class":      class_data,
	}, "")
}
