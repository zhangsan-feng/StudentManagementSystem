import React, { useState,useEffect } from 'react';
import {Button, Modal, Form, Input, message, InputNumber, Select} from 'antd';
import {AdminClassGetSelectUserInfoApi,AdminClassAddApi} from '../../../api/api'

const AdminClassAdd = () => {
    const [open, setOpen] = useState(false);
    const [teacherOption, setTeacherOption] = useState([]);
    const [teacherOptionData, setTeacherOptionData] = useState([]);
    const [studentOption, setStudentOption] = useState([]);
    const [studentOptionData, setStudentOptionData] = useState([]);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};


    useEffect(()=>{
        AdminClassGetSelectUserInfoApi().then(res=>{
            // console.log(res)
            setStudentOption(res.data.student_data)
            setTeacherOption(res.data.teacher_data)
        }).catch(error=>{})
    },[])

    let TeacherSelectOption = []
    let StudentSelectOption = []

    teacherOption.forEach((value, index)=>{
        TeacherSelectOption.push(
            {
                value:value.id,
                label:value.username
            }
        )
        // console.log(value, index)
    })
    studentOption.forEach((value, index)=>{
        StudentSelectOption.push(
            {
                value:value.id,
                label:value.username
            }
        )
        // console.log(value, index)
    })

    const TeacherSelectChange = (data) =>{
        setTeacherOptionData(data)
    }
    const StudentSelectChange = (data) =>{
        setStudentOptionData(data)
    }

    const SubmitClick = ()=>{
        let class_number = document.getElementById("input-class-name").value
        console.log(class_number)
        console.log(teacherOptionData)
        console.log(studentOptionData)

        if (class_number == null ||class_number == "" || class_number.length == 0){
            message.error("请填写班级号码")
            return;
        }
        if (teacherOptionData == null || teacherOptionData == [] || teacherOptionData.length == 0){
            message.error("请选择班级的老师")
            return;
        }

        AdminClassAddApi({"class_number":class_number,"teacher_id":teacherOptionData,"student_id":studentOptionData.toString()}).then(res=>{
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
                添加班级
            </Button>

            <Modal
                forceRender
                open={open}
                title="添加班级信息"
                onCancel={handleCancel}
                width={1000}
                footer={[]}
            >

                <Input id="input-class-name" placeholder="请输入班级号" />
                <Select
                    placeholder="请选择班级的老师"
                    style={{width: '100%',marginTop:'20px'}}
                    onChange={TeacherSelectChange}
                    options={TeacherSelectOption}
                />
                <Select
                    placeholder="请选择班级的学生"
                    style={{width: '100%',marginTop:'20px'}}
                    mode="tags"
                    onChange={StudentSelectChange}
                    options={StudentSelectOption}
                />
                <Button type="primary" htmlType="submit" onClick={SubmitClick}  style={{width: '100%',marginTop:'20px'}}  >创建新的班级</Button>
            </Modal>
        </>
    );
};
export default AdminClassAdd;