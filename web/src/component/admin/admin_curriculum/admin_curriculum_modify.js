import React, { useState } from 'react';
import { Button, Modal ,Form, Input, message} from 'antd';
import {AdminCurriculumModifyApi} from '../../../api/api'

const AdminCurriculumModify = (data) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};

    // console.log(data)
    const [form] = Form.useForm();
    const onFinish = values => {
        AdminCurriculumModifyApi(values).then(res=>{
            if (res.code==200){
                message.success(res.data)
            }else {
                message.error(res.data)
            }
            setTimeout(()=>{window.location.reload()},2500)
        }).catch(err=>{})
    }
    form.setFieldsValue({
        "id":data.data.id,
        "name":data.data.name,
        "describe":data.data.describe,
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
                    <Form.Item className="grade_form " label="名称" name="name"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="描述" name="describe"><Input/></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit" style={{left:"80%"}}  >Submit</Button></Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AdminCurriculumModify;