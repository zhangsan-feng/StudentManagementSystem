package homework

import "github.com/gogf/gf/v2/net/ghttp"

func (*HomeWork) FileDownLoad(r *ghttp.Request) {
	path := r.Get("path")
	file_name := r.Get("file_name")

	file_path := path.String() + file_name.String()
	r.Response.Header().Set("Access-Control-Expose-Headers", "Content-disposition")
	r.Response.ServeFileDownload(file_path)
}
