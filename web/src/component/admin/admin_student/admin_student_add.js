import React, { useState } from 'react';
import { Button, Modal ,Form, Input, message} from 'antd';
import {AdminStudentAddApi} from '../../../api/api'

const AdminStudentAdd = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};

    const onFinish = values => {
        AdminStudentAddApi(values).then(res=>{
            // console.log(res)
            if (res.code == 200){
                message.success(res.data)
            }else {
                message.error("添加失败")
            }
            setTimeout(()=>{window.location.reload()},3000)

        }).catch(error=>{})
    }

    return (
        <>
            <Button type="primary" style={{height:"40px", marginLeft:"10px"}} onClick={showModal}>
                添加学生
            </Button>

            <Modal
                forceRender
                open={open}
                title="添加学生信息"
                onCancel={handleCancel}
                width={1000}
                footer={[]}
            >
                <Form name="control-hooks" onFinish={onFinish} labelCol={{span: 2,}}>

                    <Form.Item className="grade_form " label="姓名" name="username"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="联系方式" name="phone"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="学号" name="student_id"><Input/></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit" style={{left:"80%"}}  >Submit</Button></Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AdminStudentAdd;