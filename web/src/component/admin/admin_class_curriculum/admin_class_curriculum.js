import AdminClassCurriculumAdd from "./admin_class_curriculum_add";
import React, {useState, useEffect} from 'react'
import {AdminCLassCurriculumListApi,} from '../../../api/api'
import AdminClassCurriculumDetails from "./admin_class_curriculum_details";
import AdminClassCurriculumModify from "./admin_class_curriculum_modify";
import {Button, Card, Col, message} from "antd";
import {Link} from "react-router-dom";


const AdminClassCurriculum = ()=>{
    const [data,setData] = useState([])


    useEffect(()=>{
        AdminCLassCurriculumListApi().then(res=>{
            setData(res.data)
        }).catch(err=>{})
    },[])

    let cardList = []
    data.forEach((value, index, array)=>{
        cardList.push(
            <Col  span={3} key={index}>
                <Card style={{width: 170,marginLeft:'2%',marginTop:'10px'}} key={index} hoverable={true}>
                    <p>班级编号: {value.class_number}</p>
                    <AdminClassCurriculumDetails data={value.class_id}/>
                    <p></p>
                    <AdminClassCurriculumModify  data={value.class_id}/>
                </Card>
            </Col>
        )
    })

    return(
        <div>
            <div>
                <AdminClassCurriculumAdd/>
            </div>
            <div style={{display:'flex'}}>
                {cardList}
            </div>
        </div>
    )
}

export default AdminClassCurriculum