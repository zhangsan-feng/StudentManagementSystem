import {useState,} from 'react'
import {HomeWorkCommitApi} from "../../api/api";
import {Button,  Drawer, message, Upload} from "antd";
import { UploadOutlined} from "@ant-design/icons";


const HomeWorkCommit = (FatherComponentData)=>{
    const [open, setOpen] = useState(false);

    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    // console.log(FatherComponentData)

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
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
        formData.append("user_id",localStorage.getItem("user_id"))
        formData.append("homework_id",FatherComponentData.id)

        HomeWorkCommitApi(formData).then(res=>{
            if (res.code == 200){
                message.success(res.data)
            }else {
                message.error(res.data)
            }
            setTimeout(()=>{setUploading(false);window.location.reload()},2500)
        }).catch(err=>{})

    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} style={{width: '100%',marginTop:'20px'}}>
               提交作业
            </Button>
            <Drawer
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
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>请选择上传的文件</Button>
                    </Upload>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                        style={{marginTop: 16,}}
                    >
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>

                </div>

            </Drawer>
        </>
    );
}

export default HomeWorkCommit