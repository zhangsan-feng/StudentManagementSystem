package homework

import (
	"github.com/gogf/gf/v2/net/ghttp"
	"server/utils"
	"strings"
)

func (*HomeWork) Preview(r *ghttp.Request) {
	path := r.Get("path")
	path_link := "/homework/" + strings.ReplaceAll(path.String(), "./static", "")
	utils.Response.Success(r, path_link, "")
}
