import {useState, useEffect} from 'react'
import {HomeWorkDetailsApi, HomeWorkPreviewApi, HomeWorkDownLoadApi} from '../../api/api'
import {Button, Card, Col, message, Row} from "antd";
import {HttpServerUrl} from "../../api/instance";
import HomeWorkCommit from "./homework_commit";

const Homework = ()=>{

    const [data,setData] = useState([])
    useEffect(()=>{
        HomeWorkDetailsApi({"class_id":localStorage.getItem("class_id")}).then(res=>{setData(res.data)}).catch(err=>{})
    },[])


    let cardList = []
    data.forEach((value, index)=>{
        // console.log(value,index)
        cardList.push(
            <Col  span={4} key={index}>
                <Card style={{width: 240,marginLeft:'20%',marginTop:'10px'}} key={index + value.id} hoverable={true}>
                    <p>作业老师: {value.username}</p>
                    <p>作业标题: {value.title}</p>
                    <p>发布时间: {value.create_time}</p>
                    <p>提交时间: {value.expire_time}</p>
                    <Button type="primary" onClick={()=>{
                        HomeWorkDownLoadApi({"path":value.path,"file_name":value.file_name}).catch(err=>{})
                    }}  style={{width: '100%',marginTop:'20px'}}>下载作业</Button>
                    <HomeWorkCommit id={value.id}/>
                    <Button type="primary" onClick={()=>{
                        HomeWorkPreviewApi({"path":value.path}).then(res=>{
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
        <div >
        <Row>
            {cardList}
        </Row></div>
    )
}

export default Homework