import React, { useState } from 'react';
import {
    HomeOutlined,UsergroupDeleteOutlined,DesktopOutlined,FileOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { Menu, } from 'antd';

const StudentItems = [
    {
        label: <Link to="/student_list">学生</Link>,
        key: '1',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/my_class">我的班级</Link>,
        key: '2',
        icon: <UsergroupDeleteOutlined />,
    },
    {
        label: <Link to="/my_curriculum">我的课程</Link>,
        key: '3',
        icon: <DesktopOutlined />,
    },
    {
        label: <Link to="/my_homework">我的作业</Link>,
        key: '4',
        icon: <FileOutlined />,
    },

];




const HomeNav = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return (<div style={{width:"90%"}}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={StudentItems} /></div>);
};
export default HomeNav;