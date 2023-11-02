package admin_class

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
	"strings"
)

func (*AdminClass) AddUser(r *ghttp.Request) {
	class_id := r.Get("class_id")
	student_id := r.Get("student_id")

	if class_id.IsEmpty() || student_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}
	//g.Log().Line().Debug(context.TODO(), class_id)
	//g.Log().Line().Debug(context.TODO(), student_id)

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

	utils.Response.Success(r, "添加成功", "")
}
