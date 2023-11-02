import {useState, useEffect} from 'react'
import AdminHomeWorkAdd from "./admin_homework_add";
import {AdminHomeWorkDeleteApi, AdminHomeWorkListApi, AdminHomeWorkPreviewApi} from '../../../api/api'
import {HttpServerUrl} from '../../../api/instance'
import {Button, Card,  message, Row, Col} from "antd";
import {Link} from "react-router-dom";
import AdminHomeWorkDetails from "./admin_homework_details";
const AdminHomework = ()=>{


    const [Data,setData] = useState([])

   useEffect(()=>{
       AdminHomeWorkListApi().then(res=>{
           // console.log(res)
           setData(res.data)
       }).catch(err=>{})
   },[])



    let cardList = []
    Data.forEach((value, index)=>{
        // console.log(value,index)
        cardList.push(
            <Col  span={4} key={index}>
                <Card style={{width: 240,marginLeft:'20%',marginTop:'10px'}} key={index + value.id} hoverable={true}>
                    <p>作业老师: {value.username}</p>
                    <p>作业班级: {value.class_number}</p>
                    <p>作业标题: {value.title}</p>
                    <p>发布时间: {value.create_time}</p>
                    <p>提交时间: {value.expire_time}</p>
                    <AdminHomeWorkDetails id={value.id}/>

                    <Button type="primary" onClick={()=>{
                        AdminHomeWorkDeleteApi({"id":value.id}).then(res=>{
                            console.log(res)
                            if (res.code == 200){
                                message.success(res.data)
                            }else {
                                message.error(res.data)
                            }
                            setTimeout(()=>{window.location.reload()},2500)
                        }).catch(err=>{})
                    }} htmlType="submit"   style={{width: '100%',marginTop:'20px'}} >删除作业</Button>

                    <Button type="primary" onClick={()=>{
                        console.log(value.user_id)
                        console.log(value.class_id)
                        AdminHomeWorkPreviewApi({"user_id":value.user_id,"class_id":value.class_id}).then(res=>{
                            if (res.code == 200){
                                let path = HttpServerUrl + res.data + value.file_name
                                window.open(path)
                            }else {
                                message.error(res.data)
                            }
                            console.log()
                        }).catch(err=>{})
                    }} htmlType="submit"  style={{width: '100%',marginTop:'20px'}} >预览</Button>
                    <p></p>
                </Card>
                </Col>

        )
    })

    return(
        <div>
            <div style={{marginLeft:'60px'}}>
                <AdminHomeWorkAdd/>
            </div>
            <Row>
                {cardList}
            </Row>
        </div>
    )
}

export default AdminHomework