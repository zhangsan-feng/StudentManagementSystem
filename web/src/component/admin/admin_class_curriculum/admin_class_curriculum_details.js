import React, { useState ,useEffect} from 'react';
import { Button, Modal } from 'antd';
import {AdminCLassCurriculumDetailsApi} from '../../../api/api'
const AdminClassCurriculumDetails = (FatherComponentData) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data,setData] = useState([])
    const showModal = () => {
        if (data.length == 0){
            AdminCLassCurriculumDetailsApi({"class_id":FatherComponentData.data}).then(res=>{setData(res.data)}).catch(err=>{})
        }
        // console.log(FatherComponentData.data)
        setIsModalOpen(true);
    };

    let cardList = []
    for (let i in data){
        let tmpList = []
        // console.log(i, data)
        data[i].forEach((value, index)=>{
            // console.log(index, value)
            tmpList.push(
                <div style={{marginTop:'20px'}} key={index}>

                    <p>课程名称: {value.name}</p>
                    <p>课程老师: {value.username}</p>
                    <p>上课时间: {value.start_time}</p>
                    <p style={{width:'100%',height:'5px',backgroundColor:'#d2e5ef'}}></p>
                </div>
            )
        })

        cardList.push(
            <div style={{marginLeft:'30px'}} key={i}>
                <h1>{i}</h1>
                {tmpList}
            </div>
        )

    }


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                查看班级课程
            </Button>
            <Modal  open={isModalOpen} onCancel={handleCancel} footer={[]}>
                <div style={{display:'flex'}}>
                    {cardList}
                </div>
            </Modal>
        </>
    );
};


export default AdminClassCurriculumDetails