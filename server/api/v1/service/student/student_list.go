package student

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*Student) List(r *ghttp.Request) {
	db_data, db_err := g.Model("user").
		Fields("id", "username", "student_id").
		Where("role", 1).
		Page(r.Get("page").Int(), 10).All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, db_data, "")
}
