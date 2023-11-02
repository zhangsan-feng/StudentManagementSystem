package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
	"strings"
)

func (*AdminClass) Add(r *ghttp.Request) {
	class_number := r.Get("class_number")
	teacher_id := r.Get("teacher_id")
	student_id := r.Get("student_id")

	if class_number.IsEmpty() || teacher_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	//g.Log().Line().Debug(context.TODO(), class_number)
	//g.Log().Line().Debug(context.TODO(), teacher_id)
	//g.Log().Line().Debug(context.TODO(), student_id)

	class_obj, db_err := g.Model("class").Insert(g.Map{
		"class_number": class_number,
		"teacher_id":   teacher_id,
	})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	class_id, err2 := class_obj.LastInsertId()
	if err2 != nil {
		g.Log().Line().Debug(context.TODO(), err2)
		utils.Response.Field(r)
	}
	if strings.Contains(student_id.String(), ",") {
		for _, v := range strings.Split(student_id.String(), ",") {
			g.Model("class_user").Insert(g.Map{
				"class_id": class_id,
				"user_id":  v,
			})
		}
	} else {
		if _, err := g.Model("class_user").Insert(g.Map{
			"class_id": class_id,
			"user_id":  student_id,
		}); err != nil {
			g.Log().Line().Debug(context.TODO(), err)
			utils.Response.Field(r)
		}
	}

	utils.Response.Success(r, "添加班级成功", "")
}
