package admin_homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminHomeWork) GetClass(r *ghttp.Request) {
	//page := r.Get("page")

	db_data, db_err := g.Model("class").Fields("id", "class_number").All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, db_data, "")
}
