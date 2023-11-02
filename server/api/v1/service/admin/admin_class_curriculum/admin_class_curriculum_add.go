package admin_class_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClassCurriculum) Insert(r *ghttp.Request) {
	class_id := r.Get("class_id")
	teacher_id := r.Get("teacher_id")
	curriculum_id := r.Get("curriculum_id")
	week := r.Get("week")
	start_time := r.Get("time")

	if class_id.IsEmpty() || teacher_id.IsEmpty() || curriculum_id.IsEmpty() || week.IsEmpty() || start_time.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	//g.Log().Line().Debug(context.TODO(), class_id)
	//g.Log().Line().Debug(context.TODO(), teacher_id)
	//g.Log().Line().Debug(context.TODO(), curriculum_id)
	//g.Log().Line().Debug(context.TODO(), week)
	//g.Log().Line().Debug(context.TODO(), start_time)

	_, db_err := g.Model("class_curriculum").Insert(g.Map{
		"class_id":      class_id,
		"teacher_id":    teacher_id,
		"curriculum_id": curriculum_id,
		"start_time":    start_time,
		"date":          week,
	})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, "添加成功", "")
}
