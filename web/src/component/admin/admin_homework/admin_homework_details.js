import {useState, useEffect} from 'react'
import {AdminHomeWorkDetailsApi,AdminHomeWorkFileDownLoadApi} from '../../../api/api'
import {Button, Modal, Table} from 'antd';




const columns = [
    {
        title: '姓名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '年龄',
        dataIndex: 'commit_time',
        key: 'commit_time',
    },
    {
        title: '提交的作业',
        dataIndex: 'path',
        key: 'path',
        render:(index,value)=>{
            let d = value.path.split('/')
            // console.log(d[3])
            return d[3]
        }
    },
    {
        title: '',
        dataIndex: '',
        key: '',
        render:(index, value)=>{return <Button type="primary" onClick={()=>{AdminHomeWorkFileDownLoadApi({"path":value.path}).catch(err=>{})}}>下载</Button>}
    }
];



const AdminHomeWorkDetails = (FatherComponentData)=>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data,setData] = useState([])
    const showModal = () => {
        setIsModalOpen(true);
        // console.log(FatherComponentData)
        AdminHomeWorkDetailsApi({"id":FatherComponentData.id}).then(res=>{setData(res.data)}).catch(err=>{})
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return(
        <>
            <Button type="primary" onClick={showModal} style={{width: '100%',marginTop:'20px'}} >
                查看学生作业
            </Button>
            <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel} width={1000}>
                <Table dataSource={data} columns={columns} rowKey="id"/>;
            </Modal>
        </>
    )
}

export default AdminHomeWorkDetails