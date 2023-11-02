package homework

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/util/gconv"
	"os"
	"server/utils"
	"time"
)

func (*HomeWork) Commit(r *ghttp.Request) {
	file := r.GetUploadFile("file")
	user_id := r.Get("user_id")
	homework_id := r.Get("homework_id")

	if file == nil || user_id.IsEmpty() || homework_id.IsNil() {
		utils.Response.MissingParameter(r)
	}
	file.Filename = gconv.String(time.Now().Unix()) + "_" + file.Filename
	file_dir := utils.StaticFilePath + user_id.String() + "/"
	file_path := file_dir + file.Filename
	if !gfile.Exists(file_dir) {
		if err := os.MkdirAll(file_path, os.ModePerm); err != nil {
			g.Log().Line().Debug(context.TODO(), err)
		}
	}

	file.Save(file_dir)

	dataSource := g.Map{
		"path":        file_path,
		"student_id":  user_id,
		"homework_id": homework_id,
		"commit_time": utils.NowDateTime24(),
	}
	_, db_err := g.Model("commit_homework").Insert(dataSource)
	if db_err != nil {
		g.Log().Line().Debug(context.TODO(), db_err)
		utils.Response.Field(r)
	}
	utils.Response.Success(r, "提交成功", "")
}
