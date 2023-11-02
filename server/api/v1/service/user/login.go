package user

import (
	"context"
	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
)

func (*User) Login(r *ghttp.Request) {
	username := r.Get("username")
	password := r.Get("password")
	if username.IsEmpty() || password.IsEmpty() {
		utils.Response.Error(r, "请输入账号密码")
	}

	password_en := utils.Aes.AesEncrypt(password.String(), aesKey)

	db_data, db_err := g.Model("user").
		Where("username", username).
		Where("password", password_en).One()
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	if db_data.IsEmpty() {
		utils.Response.Error(r, "用户名或密码错误")
	}
	var class_id gdb.Record
	if db_data["role"].Int() == 1 {
		class_id, db_err = g.Model("class_user").Where("user_id", db_data["id"]).One()
		if db_err != nil {
			g.Log().Line().Debug(context.TODO(), db_err)
			utils.Response.Field(r)
		}
	}
	id := db_data["id"].String()
	role_id := db_data["role"].String()
	name := db_data["username"].String()

	token, Terr := utils.Jwt.CreateToken(name, "SB", id, []string{role_id})
	if Terr != nil {
		g.Log().Line().Debug(context.TODO(), Terr)
		utils.Response.Field(r)
	}
	response_data := g.Map{
		"username":  name,
		"user_id":   id,
		"user_role": role_id,
		"class_id":  class_id["class_id"],
		"token":     token,
	}
	utils.Response.Success(r, response_data, "")
}
