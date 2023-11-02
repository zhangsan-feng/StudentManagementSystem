import {HttpServerUrl} from "./instance";
import {HttpPost,HttpGet,FormPost,DownLoadFile} from './ajax'

const HttpRouterMatchV1 = "/v1/web"
const HttpRouterUrl = `${HttpServerUrl}${HttpRouterMatchV1}`


//

export const PingApi = p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/ping`, p);
export const StudentListApi = p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/student/list`, p);
export const UserLoginApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/user/login`, p);
export const ClassDetailsApi = p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/class/details`, p);
export const ClassCurriculumDetailsApi = p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/curriculum/details`, p);
export const HomeWorkDetailsApi = p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/homework/details`, p);
export const HomeWorkPreviewApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/homework/preview`, p);
export const HomeWorkDownLoadApi =  p => DownLoadFile(`${HttpServerUrl}${HttpRouterMatchV1}/homework/file_download`, p);
export const HomeWorkCommitApi =  p => FormPost(`${HttpServerUrl}${HttpRouterMatchV1}/homework/commit`, p);



//    admin  api ##############################################
export const AdminStudentListApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/student/list`, p);
export const AdminStudentAddApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/student/add`, p);
export const AdminStudentDeleteApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/student/delete`, p);
export const AdminStudentModifyApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/student/modify`, p);
export const AdminStudentSearchApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/student/search`, p);

export const AdminClassGetSelectUserInfoApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/get_class_select_user_info`, p);
export const AdminClassListApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/list`, p);
export const AdminClassAddApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/add`, p);
export const AdminClassDetailsApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/details`, p);
export const AdminClassDeleteUserApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/delete_user`, p);
export const AdminClassAddUserApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/add_user`, p);
export const AdminClassDeleteApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class/delete`, p);

export const AdminCurriculumListApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/curriculum/list`, p);
export const AdminCurriculumAddApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/curriculum/add`, p);
export const AdminCurriculumModifyApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/curriculum/modify`, p);
export const AdminCurriculumDeleteApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/curriculum/delete`, p);

export const AdminHomeWorkGetClassApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/get_class`, p);
export const AdminHomeWorkAddApi =  p => FormPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/add`, p);
export const AdminHomeWorkListApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/list`, p);
export const AdminHomeWorkPreviewApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/preview`, p);
export const AdminHomeWorkDeleteApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/delete`, p);
export const AdminHomeWorkDetailsApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/student`, p);
export const AdminHomeWorkFileDownLoadApi =  p => DownLoadFile(`${HttpServerUrl}${HttpRouterMatchV1}/admin/homework/file_download`, p);

export const AdminCLassCurriculumGetSelectInfoApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class_curriculum/get_select_info`, p);
export const AdminCLassCurriculumAddApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class_curriculum/add`, p);
export const AdminCLassCurriculumListApi =  p => HttpGet(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class_curriculum/list`, p);
export const AdminCLassCurriculumDetailsApi =  p => HttpPost(`${HttpServerUrl}${HttpRouterMatchV1}/admin/class_curriculum/details`, p);