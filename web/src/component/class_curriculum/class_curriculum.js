import React, {useState, useEffect} from 'react'
import {ClassCurriculumDetailsApi} from '../../api/api'

const  ClassCurriculum = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        ClassCurriculumDetailsApi({"class_id":localStorage.getItem("class_id")}).then(res=>{setData(res.data)}).catch(err=>{})
    },[])

    let cardList = []
    for (let i in data){
        let tmpList = []
        // console.log(i, data)
        data[i].forEach((value, index)=>{
            // console.log(index, value)
            tmpList.push(
                <div style={{marginTop:'20px'}} key={index}>

                    <p>课程名称: {value.name}</p>
                    <p>课程老师: {value.username}</p>
                    <p>上课时间: {value.start_time}</p>
                    <p style={{width:'100%',height:'5px',backgroundColor:'#d2e5ef'}}></p>
                </div>
            )
        })

        cardList.push(
            <div style={{marginLeft:'30px'}} key={i}>
                <h1>{i}</h1>
                {tmpList}
            </div>
        )

    }

    return(
        <div style={{display:'flex'}}>
            {cardList}
        </div>
    )
}

export default ClassCurriculum