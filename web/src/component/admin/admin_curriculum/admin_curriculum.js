import React, {useState, useEffect} from 'react'
import {AdminCurriculumListApi,AdminCurriculumDeleteApi} from '../../../api/api'
import {Button, message, Space, Table} from "antd";
import AdminCurriculumModify from './admin_curriculum_modify'
import AdminCurriculumAdd from "./admin_curriculum_add";

const AdminCurriculum = ()=>{

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '描述',
            key: 'describe',
            dataIndex: 'describe',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <AdminCurriculumModify data={record}/>
                    <Button onClick={()=>{
                        AdminCurriculumDeleteApi({"id":record.id}).then(res=>{
                            if (res.code==200){
                                message.success(res.data)
                            }else {
                                message.error(res.data)
                            }
                            setTimeout(()=>{window.location.reload()},2500)
                        }).catch(err=>{})
                    }}>删除</Button>
                </Space>
            ),
        },
    ];

    const [Data,setData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [pageTotal,setPageTotal] = useState(0)

    useEffect(()=>{
        AdminCurriculumListApi().then(res=>{
            // console.log(res)
            setData(res.data)
            let total = res.data.length + 1
            setPageTotal(total)
        }).catch(err=>{})
    },[])

    const PageChange = (page)=>{
        setCurrentPage(page)
        AdminCurriculumListApi({"page":page}).then(res=>{
            setData(res.data)
            if (res.data.length == 10 && page > currentPage){
                let total = (page + 1) * 10
                setPageTotal(total)
            }
        }).catch(err=>{})
    }

    return(
        <div>
            <div>
                <AdminCurriculumAdd/>
            </div>
            <div>
                <Table
                    scroll={{y:document.documentElement.clientHeight * 0.6}}
                    columns={columns}
                    dataSource={Data}
                    rowKey="id"
                    pagination={{pageSize:10, total:pageTotal,onChange:PageChange, current:currentPage}}/>
            </div>
        </div>
    )
}

export default AdminCurriculum