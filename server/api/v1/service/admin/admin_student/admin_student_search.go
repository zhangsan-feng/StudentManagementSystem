package admin_student

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*AdminStudent) Search(r *ghttp.Request) {
	search := r.Get("search")
	if search.IsEmpty() {
		utils.Response.MissingParameter(r)
	}

	db_data, db_err := g.Model("user").Where("role", 1).
		Page(10, r.Get("page").Int()).
		WhereLike("username", "%"+search.String()+"%").All()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, db_data, "")

}
