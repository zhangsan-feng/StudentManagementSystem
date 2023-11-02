package admin_homework

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminHomeWork) Delete(r *ghttp.Request) {
	id := r.Get("id")
	if id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	g.Model("curriculum_homework").Delete("id", id)

	utils.Response.Success(r, "删除成功", "")
}
