import {createBrowserRouter, Navigate} from 'react-router-dom'
import Login from "./component/user/login/login";
import Home from "./component/home/home";
import React from "react";
import StudentList from "./component/student/student_list";
import MyClass from "./component/class/my_class";
import ClassCurriculum from "./component/class_curriculum/class_curriculum";
import Homework from "./component/homework/homework";
import AdminHome from "./component/admin/admin_home/admin_home";
import AdminStudent from "./component/admin/admin_student/admin_student";
import AdminClass from "./component/admin/admin_class/admin_class";
import AdminCLassDetails from "./component/admin/admin_class/admin_class_details";
import AdminCurriculum from "./component/admin/admin_curriculum/admin_curriculum";
import AdminHomework from "./component/admin/admin_homework/admin_homework";
import Admin_class_curriculum from "./component/admin/admin_class_curriculum/admin_class_curriculum";

function AuthRouter({ children }) {
    if (localStorage.getItem('token')) {return <>{children}</>}
    return <Navigate to='/login' replace></Navigate>
}


let WebRouterView = [
    {
        path: "/",
        element: <AuthRouter><Home/></AuthRouter>,
        children:[
            {
                path: '/student_list',
                element: <StudentList/>
            },
            {
                path: '/my_class',
                element: <MyClass/>
            },
            {
                path: '/my_curriculum',
                element: <ClassCurriculum/>
            },
            {
                path: '/my_homework',
                element: <Homework/>
            },
        ]
    },
    {
        path:'/login',
        element: <Login/>,
    },
    {
        path: '/admin',
        element: <AdminHome/>,
        children: [
            {
                path: '/admin/student',
                element: <AdminStudent/>
            },
            {
                path: '/admin/class',
                element: <AdminClass/>
            },
            {
                path: '/admin/class_details',
                element: <AdminCLassDetails/>
            },
            {
                path: '/admin/curriculum',
                element: <AdminCurriculum/>
            },
            {
                path: '/admin/homework',
                element: <AdminHomework/>
            },
            {
                path: '/admin/class_curriculum',
                element: <Admin_class_curriculum/>
            }
        ]
    }

    //
    // {
    //     path:"/class",
    //     element:<AuthRouter><div>test1</div></AuthRouter>
    //
    // },
    // {
    //     path:"/major",
    //     element:<div>test2</div>
    //
    // },
    // {
    //     path:"/gradesheet",
    //     element:<div>test2</div>
    //
    // },
    // {
    //     path:"/curriculum",
    //     element:<div>test2</div>
    //
    // },
    // {
    //     path:"/student_curriculum",
    //     element:<div>test2</div>
    //
    // },
    // {
    //     path:"/forum",
    //     element:<div>test2</div>
    //
    // },
    //
    //
    // {
    //     path: "/user",
    //     children: [
    //         {
    //             path:"/user/test1",
    //             element:<AuthRouter><div>test1</div></AuthRouter>
    //
    //         },
    //         {
    //             path:"/user/test2",
    //             element:<div>test2</div>
    //
    //         },
    //     ]
    // },


]


let HttpRoute = createBrowserRouter(WebRouterView);

export default HttpRoute