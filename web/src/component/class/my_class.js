import {useState, useEffect} from 'react'
import {ClassDetailsApi} from '../../api/api'
import {Card, Col} from "antd";


const MyClass = ()=>{

    const [data,setData] = useState([])
    useEffect(()=>{
        ClassDetailsApi({"class_id":localStorage.getItem("class_id")}).then(res=>{
            setData(res.data)
        }).catch(err=>{})
    },[])

    let cardList = []
    data.forEach((value, index)=>{
        // console.log(value,index)
        cardList.push(
            <Col  span={4} key={index}>
                <Card style={{width: '240px',marginTop:'10px'}} key={index} hoverable={true}>
                    <p>学生姓名: {value.username}</p>
                    <p>入学时间: {value.create_time}</p>
                    <p>联系方式: {value.phone}</p>
                    <p>学生编号: {value.student_id}</p>

                </Card>
            </Col>
        )
    })
    return (
        <div style={{display:"flex"}}>
            {cardList}
        </div>
    )
}

export default MyClass