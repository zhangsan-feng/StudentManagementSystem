import { PlusOutlined } from '@ant-design/icons';
import {Button, Drawer, Upload, message, Select, Input,DatePicker} from 'antd';
import { useState ,useEffect} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {AdminHomeWorkGetClassApi,AdminHomeWorkAddApi} from '../../../api/api'





const AdminHomeWorkAdd = () => {
    const [open, setOpen] = useState(false);
    const [option, serOption] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [Data, setData] = useState([]);
    const [expireTime, setExpireTime] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(()=>{
        AdminHomeWorkGetClassApi().then(res=>{
            setData(res.data)
        }).catch(err=>{})
    },[])

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const options = [];
    Data.forEach((value, index)=>{
        options.push(
            {
                value:value.id,
                label:value.class_number
            }
        )
        // console.log(value, index)
    },[])
    const handleChange = (value) => {
        serOption(value)
        // console.log(`selected ${value}`);
        // console.log(selectData);
    };


    const onChange = (value, dateString) => {
        // console.log('Selected Time: ', value);
        // console.log('Formatted Selected Time: ', dateString);
        setExpireTime(dateString)
    };
    const onOk = (value) => {
        // console.log('onOk: ', value);
    };

    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };
    const handleUpload = () => {
        setUploading(true)
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
        });
        let title = document.getElementById('file_message').value
        // console.log(option)
        // console.log(expireTime)
        // console.log(localStorage.getItem("user_id"))
        // console.log(title)
        formData.append("user_id",localStorage.getItem("user_id"))
        formData.append("class_id",option)
        formData.append("expire_time",expireTime)
        formData.append("title",title)
        AdminHomeWorkAddApi(formData).then(res=>{
            if (res.code==200){
                message.success(res.data)
            }else {
                message.error(res.data)
            }
            setTimeout(()=>{window.location.reload()},2500)
        }).catch(err=>{})
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                发布作业
            </Button>
            <Drawer
                title="发布新的作业"
                width={720}
                onClose={onClose}
                placement="top"
                // size='large'
                size='default'
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            >
            <div style={{marginLeft:"40%",marginRight:"40%",textAlign:"center"}}>
                <Select
                    style={{width: '100%',}}
                    placeholder="请选择发布作业的班级"
                    onChange={handleChange}
                    options={options}
                />
                <p></p>
                <Input placeholder="请输入作业标题" id="file_message" />
                <p></p>
                <DatePicker  style={{width: '100%',}} placeholder="请选择作业到期提交时间"  showTime onChange={onChange} onOk={onOk} />
                <p></p>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>请选择上传的文件</Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{
                        marginTop: 16,
                    }}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button>

            </div>

            </Drawer>
        </>
    );
};
export default AdminHomeWorkAdd;
