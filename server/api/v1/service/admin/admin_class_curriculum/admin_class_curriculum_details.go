package admin_class_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/util/gconv"
	"server/utils"
)

func (*AdminClassCurriculum) Details(r *ghttp.Request) {
	class_id := r.Get("class_id")
	isEdit := r.Get("is_edit")
	if class_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}
	db_data, db_err := g.Model("class_curriculum").
		Fields("class_curriculum.id",
			"class_curriculum.start_time",
			"class_curriculum.date",
			"user.username, curriculum.name").
		LeftJoin("curriculum", "class_curriculum.curriculum_id=curriculum.id").
		LeftJoin("user", "class_curriculum.teacher_id=user.id").
		Where("class_curriculum.class_id", class_id).All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	if isEdit.IsEmpty() {
		tmpData := map[string][]map[string]interface{}{}
		for k := range db_data {
			tmpMap := db_data[k].Map()
			key := gconv.String(tmpMap["date"])
			delete(tmpMap, "date")
			tmpData[key] = append(tmpData[key], tmpMap)
		}
		utils.Response.Success(r, tmpData, "")
	}
	utils.Response.Success(r, db_data, "")
}
