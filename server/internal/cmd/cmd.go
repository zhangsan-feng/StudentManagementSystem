package cmd

import (
	"context"
	"server/api/v1/service"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gcmd"
)

var (
	Main = gcmd.Command{
		Name:  "main",
		Usage: "main",
		Brief: "start http server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			server := g.Server()
			server.Use(service.Middleware.Cors)
			server.Use(service.Middleware.RequestRecord)

			server.Group("/v1/web", func(group *ghttp.RouterGroup) {
				group.POST("/user/login", service.User.Login)
			})

			server.SetIndexFolder(true)
			server.SetServerRoot("./static")
			server.AddStaticPath("/homework", "./static")

			server.Group("/v1/web", func(group *ghttp.RouterGroup) {
				group.Middleware(service.Middleware.UserAuthentication)
				group.GET("ping", service.Ping)

				group.Group("/student", func(group *ghttp.RouterGroup) {
					group.GET("/list", service.Student.List)
				})
				group.Group("/class", func(group *ghttp.RouterGroup) {
					group.GET("/details", service.Class.Details)
				})
				group.Group("/curriculum", func(group *ghttp.RouterGroup) {
					group.GET("/details", service.ClassCurriculum.Details)
				})
				group.Group("/homework", func(group *ghttp.RouterGroup) {
					//group.GET("/list", service.Class.ClassList)
					group.GET("/details", service.HomeWork.Details)
					group.POST("/commit", service.HomeWork.Commit)
					group.POST("/file_download", service.HomeWork.FileDownLoad)
					group.POST("/preview", service.HomeWork.Preview)
				})

				group.Group("/comm", func(group *ghttp.RouterGroup) {
				})

				group.Group("/admin", func(group *ghttp.RouterGroup) {
					group.Group("/student", func(group *ghttp.RouterGroup) {
						group.GET("/list", service.Admin.Student.List)
						group.POST("/add", service.Admin.Student.Add)
						group.POST("/modify", service.Admin.Student.Modify)
						group.POST("/delete", service.Admin.Student.Delete)
						group.POST("/search", service.Admin.Student.Search)
					})

					group.Group("/class", func(group *ghttp.RouterGroup) {
						group.GET("/get_class_select_user_info", service.Admin.Class.GetCLassUserSelectUserInfo)
						group.GET("/list", service.Admin.Class.List)
						group.POST("/add", service.Admin.Class.Add)
						group.GET("/details", service.Admin.Class.Details)
						group.POST("/delete_user", service.Admin.Class.DeleteUser)
						group.POST("/add_user", service.Admin.Class.AddUser)
						group.POST("/delete", service.Admin.Class.Delete)
					})
					group.Group("/curriculum", func(group *ghttp.RouterGroup) {
						group.GET("/list", service.Admin.Curriculum.List)
						group.POST("/add", service.Admin.Curriculum.Insert)
						group.POST("/modify", service.Admin.Curriculum.Modify)
						group.POST("/delete", service.Admin.Curriculum.Delete)
					})
					group.Group("/homework", func(group *ghttp.RouterGroup) {
						group.GET("/get_class", service.Admin.HomeWork.GetClass)
						group.GET("/list", service.Admin.HomeWork.List)
						group.POST("/add", service.Admin.HomeWork.Add)
						group.POST("/preview", service.Admin.HomeWork.Preview)
						group.POST("/delete", service.Admin.HomeWork.Delete)
						group.POST("/details", service.Admin.HomeWork.Details)
						group.GET("/student", service.Admin.HomeWork.Student)
						group.POST("/file_download", service.Admin.HomeWork.FileDownLoad)

					})
					group.Group("/class_curriculum", func(group *ghttp.RouterGroup) {
						group.GET("/get_select_info", service.Admin.ClassCurriculum.GetSelectInfo)
						group.GET("/list", service.Admin.ClassCurriculum.List)
						group.POST("/add", service.Admin.ClassCurriculum.Insert)
						group.POST("/details", service.Admin.ClassCurriculum.Details)
						group.POST("/modify", service.Admin.ClassCurriculum.Modify)
						group.POST("/delete", service.Admin.ClassCurriculum.Delete)
					})
				})

			})

			server.Run()
			return nil
		},
	}
)
