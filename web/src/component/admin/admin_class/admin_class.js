import {useState, useEffect} from 'react'
import AdminClassAdd from "./admin_class_add";
import {AdminClassListApi,AdminClassDeleteApi} from "../../../api/api";
import {Button, Card, Col, Row,message} from "antd";
import {Link} from "react-router-dom";

const AdminClass = ()=>{

    const [Data,setData] = useState([])
    useEffect(()=>{
        AdminClassListApi().then(res=>{
            // console.log(res)
            setData(res.data)
        }).catch(error=>{})
    },[])

    let cardList = []

    Data.forEach((value, index)=>{
        // console.log(value,index)
        cardList.push(
            <Col span={3} key={index}>
                <Card style={{width: 170,marginLeft:'2%',marginTop:'10px'}} key={index} hoverable={true}>
                    <p>班级编号: {value.class_number}</p>
                    {/*<p>班级编号{value.class_id}</p>*/}
                    <p>代课老师: {value.username}</p>
                    <Link to={`/admin/class_details?class_id=${value.class_id}`}>查看班级学生</Link>
                    <p></p>
                    <Button onClick={()=>{
                        console.log(value)
                        AdminClassDeleteApi({"class_id":value.class_id}).then(res=>{
                            console.log(res)
                            if (res.code==200){
                                message.success(res.data)
                            }else {
                                message.error(res.data)
                            }
                            setTimeout(()=>{window.location.reload()},2500)
                        }).catch(err=>{})}
                    }>删除班级</Button>

                </Card>
            </Col>
        )
    })

    return(
        <div >
            <div >
                <AdminClassAdd/>
            </div>
            <Row>
                {cardList}
            </Row>
        </div>
    )
}

export default AdminClass