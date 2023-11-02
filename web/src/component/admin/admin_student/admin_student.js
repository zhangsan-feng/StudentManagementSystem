import {useState, useEffect} from 'react'
import {AdminStudentListApi, AdminStudentSearchApi} from '../../../api/api'
import React from 'react';
import {Button, Space, Table, Input} from 'antd';
import AdminStudentModify from './admin_student_modify'
import AdminStudentAdd from "./admin_student_add";
const { Search } = Input;




const AdminStudent = ()=>{
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '名字',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '学生id',
            key: 'student_id',
            dataIndex: 'student_id',

        },
        {
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '入学时间',
            key: 'create_time',
            dataIndex: 'create_time',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <AdminStudentModify data={record}/>
                    <Button onClick={()=>{console.log(record)}}>删除</Button>
                </Space>
            ),
        },
    ];

    const [TableData,setTableData] =  useState([])
    const [PageTotal,setPageTotal] =  useState([])
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(()=>{
        AdminStudentListApi().then(res=>{
            // console.log(res)
            setTableData(res.data)
            let total = res.data.length + 1
            setPageTotal(total)
        }).catch(error => {});

    },[])

    const PageChange = (page)=>{
        setCurrentPage(page)
        AdminStudentListApi({"page":page}).then(res=>{
            // console.log(res)
            setTableData(res.data)
            if (res.data.length == 10 && page > currentPage){
                let total = (page + 1) * 10
                setPageTotal(total)
            }

        }).catch(error => {});
    }

    const onSearch = (data)=>{
        console.log(data)
        if (data.length == 0){
            AdminStudentListApi().then(res=>{
                // console.log(res)
                setTableData(res.data)
                let total = res.data.length + 1
                setPageTotal(total)
            }).catch(error => {});
        }else {
            AdminStudentSearchApi({"search":data}).then(res=>{
                console.log(res)
                setTableData(res.data)
                if (res.data != null){
                    setPageTotal(res.data.length)
                }

            })
        }
    }

    return(

        <div>
            <div>
                <Search
                    placeholder="请输入  学生姓名 "
                    style={{width:"500px"}}
                    allowClear
                    enterButton="搜索学生"
                    size="large"
                    onSearch={onSearch}
                />
                <AdminStudentAdd/>
            </div>
            <div>
                <Table
                    scroll={{y:document.documentElement.clientHeight * 0.6}}
                    columns={columns}
                    dataSource={TableData}
                    rowKey="id"
                    pagination={{pageSize:10, total:PageTotal,onChange:PageChange, current:currentPage}}/>

            </div>
        </div>
    )
}

export default AdminStudent