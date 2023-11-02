package admin_class_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClassCurriculum) Delete(r *ghttp.Request) {
	id := r.Get("id")

	_, db_err := g.Model("class_curriculum").Delete("id", id)
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "删除成功", "")
}