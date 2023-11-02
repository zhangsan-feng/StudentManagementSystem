package admin_class_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClassCurriculum) List(r *ghttp.Request) {
	db_data, db_err := g.Model("class_curriculum").
		Fields("DISTINCT class_number, class_id").
		LeftJoin("class", "class_curriculum.class_id=class.id").
		All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, db_data, "")
}
