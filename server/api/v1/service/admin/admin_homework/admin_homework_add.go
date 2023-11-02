package admin_homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gfile"
	"os"
	"server/utils"
)

func (*AdminHomeWork) Add(r *ghttp.Request) {
	title := r.Get("title")
	class_id := r.Get("class_id")
	user_id := r.Get("user_id")
	expire_time := r.Get("expire_time")
	file := r.GetUploadFile("file")

	if title.IsEmpty() || class_id.IsEmpty() || user_id.IsEmpty() || expire_time.IsEmpty() || file == nil {
		utils.Response.MissingParameter(r)
	}
	g.Log().Line().Debug(context.TODO(), file.Filename)
	file_path := "./static/" + user_id.String() + "/" + class_id.String() + "/"

	if !gfile.Exists(file_path) {
		if err := os.MkdirAll(file_path, os.ModePerm); err != nil {
			g.Log().Line().Debug(context.TODO(), err)
		}
	}

	if _, err := file.Save(file_path); err != nil {
		g.Log().Line().Debug(context.TODO(), err)
		utils.Response.Field(r)
	}

	if _, err := g.Model("curriculum_homework").Insert(g.Map{
		"title":       title,
		"class_id":    class_id,
		"user_id":     user_id,
		"create_time": utils.NowDateTime24(),
		"expire_time": expire_time,
		"path":        file_path,
		"file_name":   utils.NowDateTime24() + "_" + file.Filename,
	}); err != nil {
		g.Log().Line().Debug(context.TODO(), err)
		utils.Response.Field(r)
	}

	utils.Response.Success(r, "添加成功", "")
}
