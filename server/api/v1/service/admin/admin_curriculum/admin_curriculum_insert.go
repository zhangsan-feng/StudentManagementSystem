package admin_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminCurriculum) Insert(r *ghttp.Request) {
	name := r.Get("name")
	describe := r.Get("describe")
	if name.IsEmpty() || describe.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	_, db_err := g.Model("curriculum").Insert(g.Map{"name": name, "describe": describe})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "添加成功", "")
}
