package admin_homework

import "github.com/gogf/gf/v2/net/ghttp"

func (*AdminHomeWork) FileDownLoad(r *ghttp.Request) {
	path := r.Get("path")

	r.Response.ServeFileDownload(path.String())
}
