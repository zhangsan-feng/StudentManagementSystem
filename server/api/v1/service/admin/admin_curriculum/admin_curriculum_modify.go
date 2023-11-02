package admin_curriculum

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminCurriculum) Modify(r *ghttp.Request) {
	id := r.Get("id")
	name := r.Get("name")
	describe := r.Get("describe")

	if name.IsEmpty() || describe.IsEmpty() || id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}
	_, db_err := g.Model("curriculum").Where("id", id).Update(g.Map{"name": name, "describe": describe})
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "修改成功", "")
}
