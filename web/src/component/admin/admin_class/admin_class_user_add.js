import React, { useState,useEffect } from 'react';
import {Button, Modal, Form, Input, message, InputNumber, Select} from 'antd';
import {AdminClassGetSelectUserInfoApi,AdminClassAddUserApi} from '../../../api/api'

const AdminClassUserAdd = () => {
    const [open, setOpen] = useState(false);
    const [studentOption, setStudentOption] = useState([]);
    const [studentOptionData, setStudentOptionData] = useState([]);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};


    useEffect(()=>{
        AdminClassGetSelectUserInfoApi().then(res=>{
            // console.log(res)
            setStudentOption(res.data.student_data)
        }).catch(error=>{})
    },[])

    let StudentSelectOption = []

    studentOption.forEach((value, index)=>{
        StudentSelectOption.push(
            {
                key:index,
                value:value.id,
                label:value.username
            }
        )
        // console.log(value, index)
    })

    const StudentSelectChange = (data) =>{
        setStudentOptionData(data)
    }

    const SubmitClick = ()=>{
        let class_id = window.location.href.split("?")[1].split("=")[1]
        console.log(class_id)
        console.log(studentOptionData)

        AdminClassAddUserApi({"class_id":class_id,"student_id":studentOptionData.toString()}).then(res=>{
            // console.log(res)
            if (res.code == 200){
                message.success(res.data)
            }else {
                message.error("添加失败")
            }
            setTimeout(()=>{window.location.reload()},3000)
        }).catch(err=>{})
    }

    return (
        <>
            <Button type="primary" style={{height:"40px", marginLeft:"10px"}} onClick={showModal}>
                添加班级学生
            </Button>

            <Modal
                forceRender
                open={open}
                onCancel={handleCancel}
                width={1000}
                footer={[]}
            >
                <Select
                    style={{width: '100%',marginTop:'80px'}}
                    mode="tags"
                    onChange={StudentSelectChange}
                    options={StudentSelectOption}
                />
                <Button type="primary" htmlType="submit" onClick={SubmitClick}  style={{width: '100%',marginTop:'80px'}}  >提交</Button>
            </Modal>
        </>
    );
};
export default AdminClassUserAdd