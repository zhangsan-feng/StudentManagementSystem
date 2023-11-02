import React, { useState } from 'react';
import {Button, Modal, Table} from 'antd';
import {AdminCLassCurriculumDetailsApi} from "../../../api/api";




const AdminClassCurriculumModify = (FatherComponentData) => {

    const columns = [
        {title: '课程名称', dataIndex: 'name', key: 'name',},
        {title: '日期', dataIndex: 'date', key: 'date',},
        {title: '上课时间', dataIndex: 'start_time', key: 'start_time',},
        {title: '老师', dataIndex: 'username', key: 'username',},
        {title: '', dataIndex: '', render:(index,value)=>{return <Button onClick={()=>{
            console.log(value.id)
        }}>删除</Button>}}
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data,setData] = useState([])
    const showModal = () => {
        if (data.length == 0){
            AdminCLassCurriculumDetailsApi({"class_id":FatherComponentData.data,"is_edit":"ok"}).then(res=>{setData(res.data)}).catch(err=>{})
        }
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                修改班级课程
            </Button>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={[]} width={1000}>
                <Table columns={columns} dataSource={data} rowKey={'id'} scroll={{y:700}}/>;
            </Modal>
        </>
    );
};


export default AdminClassCurriculumModify