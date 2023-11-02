import {useState, useEffect} from 'react'
import {StudentListApi} from '../../api/api'
import {Card, Pagination, Row, Col} from "antd";
import './student_list.js.css'
const StudentList = ()=>{
    const [userData,setUserData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [pageTotal,setPageTotal] = useState(50)

    useEffect(()=>{
        StudentListApi().then(res=>{
            // console.log(res)
            setUserData(res.data)
            let total = res.data.length + 1
            setPageTotal(total)

        }).catch(error => {});
    },[])

    // console.log(userData)
    let cardList = []
    userData.forEach((value,index)=>{
        cardList.push(
            <Col  span={2} key={index}>
                <Card style={{width: 100}} key={index} hoverable={true}>
                    <p>{value.student_id}</p>
                    <p>{value.username}</p>
                </Card>
            </Col>
        )
    })

    const PageOnChange = (page)=>{
        // console.log(page)
        setCurrentPage(page)
        StudentListApi({"page":page}).then(res=>{
            // console.log(res)
            setUserData(res.data)
            if (res.data.length == 10 && page > currentPage){
                let total = (page + 1) * 10
                setPageTotal(total)
            }
        }).catch(error => {});
    }

    return(
        <div className="student-list-container">
            <Row>
                {cardList}
            </Row>
            <div className="student-list-page">
                <Pagination defaultCurrent={currentPage} total={pageTotal} pageSize={10} onChange={PageOnChange}/>
            </div>
        </div>
    )
}

export default StudentList