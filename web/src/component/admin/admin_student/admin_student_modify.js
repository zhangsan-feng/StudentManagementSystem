import React, { useState } from 'react';
import { Button, Modal ,Form, Input, message} from 'antd';
import {AdminStudentModifyApi} from '../../../api/api'

const AdminStudentModify = (data) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};

    // console.log(data)
    const [form] = Form.useForm();
    const onFinish = values => {
        AdminStudentModifyApi(values).then(res=>{
            // console.log(res)
            if (res.code == 200){
                message.success(res.data)
            }else {
                message.error("修改失败")
            }
            setTimeout(()=>{window.location.reload()},3000)

        }).catch(error=>{})
        // console.log(values)
    }
    form.setFieldsValue({
        "id":data.data.id,
        "username":data.data.username,
        "phone":data.data.phone,
        "create_time":data.data.create_time,
    })
    return (
        <>
            <Button type="primary" onClick={showModal}>
                修改
            </Button>

            <Modal
                forceRender
                open={open}
                title="修改学生信息"
                onCancel={handleCancel}
                width={1000}
                footer={[]}
            >
                <Form form={form} name="control-hooks" onFinish={onFinish} labelCol={{span: 2,}}>

                    <Form.Item className="grade_form " label="id" name="id"><Input disabled={true}/></Form.Item>
                    <Form.Item className="grade_form " label="姓名" name="username"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="联系方式" name="phone"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="入学时间" name="create_time" ><Input disabled={true}/></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit" style={{left:"80%"}}  >Submit</Button></Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AdminStudentModify;