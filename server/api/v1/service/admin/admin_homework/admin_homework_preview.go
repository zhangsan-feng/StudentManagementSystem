package admin_homework

import (
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminHomeWork) Preview(r *ghttp.Request) {
	user_id := r.Get("user_id")
	class_id := r.Get("class_id")
	if user_id.IsEmpty() || class_id.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	path := "/homework/" + user_id.String() + "/" + class_id.String() + "/"
	utils.Response.Success(r, path, "")

}
