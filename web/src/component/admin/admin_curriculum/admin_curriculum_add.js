import React, { useState } from 'react';
import { Button, Modal ,Form, Input, message} from 'antd';
import {AdminCurriculumAddApi} from '../../../api/api'

const AdminCurriculumAdd = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {setOpen(true);};
    const handleCancel = () => {setOpen(false);};

    const onFinish = values => {
        // console.log(values)
        AdminCurriculumAddApi(values).then(res=>{
            if (res.code==200){
                message.success(res.data)
            }else {
                message.error(res.data)
            }
            setTimeout(()=>{window.location.reload()},2500)
        }).catch(err=>{})
    }

    return (
        <>
            <Button type="primary" style={{height:"40px", marginLeft:"10px"}} onClick={showModal}>
                添加课程
            </Button>

            <Modal
                forceRender
                open={open}
                title="添加课程信息"
                onCancel={handleCancel}
                width={1000}
                footer={[]}
            >
                <Form name="control-hooks" onFinish={onFinish} labelCol={{span: 2,}}>

                    <Form.Item className="grade_form " label="名字" name="name"><Input/></Form.Item>
                    <Form.Item className="grade_form " label="描述" name="describe"><Input/></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit" style={{left:"80%"}}  >Submit</Button></Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AdminCurriculumAdd;