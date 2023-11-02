package admin_class

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminClass) Delete(r *ghttp.Request) {
	class_id := r.Get("class_id")
	if class_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}
	g.Model("class").Delete("id", class_id)
	g.Model("class_user").Delete("class_id", class_id)

	utils.Response.Success(r, "删除成功", "")
}
