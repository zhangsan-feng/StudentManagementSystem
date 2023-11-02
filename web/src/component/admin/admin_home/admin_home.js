import {Button, Layout, Menu} from "antd";
import {Link, Outlet} from "react-router-dom";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, HomeOutlined, UsergroupDeleteOutlined} from "@ant-design/icons";
const { Content } = Layout;



const items = [
    {
        label: <Link to="/admin/student">学生管理</Link>,
        key: '1',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/admin/class">班级管理</Link>,
        key: '2',
        icon: <UsergroupDeleteOutlined />,
    },
    {
        label: <Link to="/admin/class_curriculum">班级课程</Link>,
        key: '3',
        icon: <DesktopOutlined />,
    },
    {
        label: <Link to="/admin/homework">作业管理</Link>,
        key: '4',
        icon: <FileOutlined />,
    },
    {
        label: <Link to="/admin/curriculum">课程管理</Link>,
        key: '5',
        icon: <FileOutlined />,
    },
];






const AdminHome = ()=>{
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return(
        <Layout >
            <div style={{width:"100%", height:"50px",display:'flex' }}>
                <div style={{width:"90%"}}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div>
                <Button style={{height:"100%", marginLeft:"10px"}} onClick={()=>{
                    localStorage.clear()
                    window.location.href="/login"
                }}>退出登录</Button>
            </div>
            <Content style={{padding:'20px', width:'100%',height:"100%"}}>

                <Outlet/>
            </Content>
        </Layout>
    )
}

export default AdminHome