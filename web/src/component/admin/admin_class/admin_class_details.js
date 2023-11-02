import {useState, useEffect} from 'react'
import {AdminClassDetailsApi,AdminClassDeleteUserApi} from '../../../api/api'
import {Button, Card, Col, message} from "antd";
import AdminClassUserAdd from './admin_class_user_add'

const AdminCLassDetails = ()=>{
   const [Data,setData] = useState([])
    useEffect(()=>{
        let class_id = window.location.href.split("?")[1].split("=")[1]
        // console.log(class_id)
        AdminClassDetailsApi({"class_id":class_id}).then(res=>{
            // console.log(res)
            setData(res.data)
        }).catch(err=>{})
    },[])

    let cardList = []
    if ( Data == null ){
        cardList.push(<div><h1>该班级暂无学生</h1></div>)
    }else {
        Data.forEach((value, index)=>{
            cardList.push(
                <Col style={{marginLeft:'100px'}} span={2} key={index}>
                    <Card style={{width: 200,marginLeft:'2%',marginTop:'10px'}} key={index} hoverable={true}>
                        <p>学生姓名: {value.username}</p>
                        <p>联系方式: {value.phone}</p>
                        <Button type="primary" htmlType="submit" key={index}  style={{width: '100%',marginTop:'20px'}} onClick={()=>{
                            AdminClassDeleteUserApi({"id":value.id}).then(res=>{
                                if (res.code=200){
                                    message.success(res.data)
                                }else {
                                    message.error(res.data)
                                }
                            }).catch(err=>{})
                            setTimeout(()=>{window.location.reload()},3000)
                        }}>删除学生</Button>
                    </Card>
                </Col>
            )
        })
    }

    return(
        <div>
            <div style={{marginLeft:"100px"}}>
                <AdminClassUserAdd/>
            </div>
            <div style={{display:'flex'}}>
                {cardList}
            </div>
        </div>
    )
}

export default AdminCLassDetails