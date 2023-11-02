import { PlusOutlined } from '@ant-design/icons';
import {Button, Drawer, Upload, message, Select,  Space, TimePicker} from 'antd';
import { useState ,useEffect} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {AdminCLassCurriculumGetSelectInfoApi,AdminCLassCurriculumAddApi} from '../../../api/api'





const AdminClassCurriculumAdd = () => {
    const [open, setOpen] = useState(false);
    const [Data, setData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [curriculumData, setCurriculumData] = useState([]);
    const [weekData, setWeekData] = useState([]);
    const [timeData, setTimeData] = useState('');
    const [uploading, setUploading] = useState(false);

    const showDrawer = () => {setOpen(true);};
    const onClose = () => {setOpen(false);};

    useEffect(()=>{
        AdminCLassCurriculumGetSelectInfoApi().then(res=>{
            // console.log(res)
            setData(res.data)
        }).catch(err=>{})
    },[])

    const ClassOption = [];
    const TeacherOption = [];
    const CurriculumOption = [];
    const WeekOption = [
        // Monday,Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday
        {value:'Monday', label:'Monday'},
        {value:'Tuesday', label:'Tuesday'},
        {value:'Wednesday', label:'Wednesday'},
        {value:'Thursday', label:'Thursday'},
        {value:'Friday', label:'Friday'},
        {value:'Saturday', label:'Saturday'},
        {value:'Sunday', label:'Sunday'},
    ];

    // console.log(Data.length)
    if ( Data != [] && Data.length != 0){
        Data.user.forEach((value, index, array)=>{TeacherOption.push({value:value.id,label:value.username})})
        Data.class.forEach((value, index, array)=>{ClassOption.push({value:value.id,label:value.class_number})})
        Data.curriculum.forEach((value, index, array)=>{CurriculumOption.push({value:value.id,label:value.name})})
    }

    const ClassChange = (data)=>{setClassData(data)}
    const TeacherChange = (data)=>{setTeacherData(data)}
    const WeekChange = (data)=>{setWeekData(data)}
    const TimeChange = (data,value)=>{
        let tmp = ""
        for (let i in value){
            if (i != 1){
                tmp += value[i] + "-"
            }else {
                tmp += value[i]
            }
        }
        // console.log(tmp)
        setTimeData(tmp)
    }
    const CurriculumChange = (data)=>{setCurriculumData(data)}


    const ButtonSubmit = () => {
        setUploading(true)
        // console.log(classData)
        // console.log(curriculumData)
        // console.log(weekData)
        // console.log(timeData)
        // console.log(teacherData)
        AdminCLassCurriculumAddApi({"class_id":classData,"week":weekData,"time":timeData,"teacher_id":teacherData,"curriculum_id":curriculumData}).then(res=>{
            // console.log(res)
            if (res.code == 200){
                message.success(res.data)
            }else {
                message.error(res.data)
            }
        }).catch(err=>{})
        setTimeout(()=>{setUploading(false)},2000)
    };

    return (
        <>
            <Button type="primary" style={{marginLeft:'10px'}} onClick={showDrawer} icon={<PlusOutlined />}>
                添加新的课程
            </Button>
            <Drawer
                // title="发布新的作业"
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
                    <Select style={{width: '100%',marginBottom:"10px"}} placeholder="请选择班级" onChange={ClassChange} options={ClassOption}/>
                    <Select style={{width: '100%',marginBottom:"10px"}} placeholder="请选择课程" onChange={CurriculumChange} options={CurriculumOption}/>
                    <Select style={{width: '100%',marginBottom:"10px"}} placeholder="请选择周天" onChange={WeekChange} options={WeekOption}/>
                    <TimePicker.RangePicker style={{width: '100%',marginBottom:"10px"}} onChange={TimeChange} />
                    <Select style={{width: '100%',marginBottom:"10px"}} placeholder="请选择老师" onChange={TeacherChange} options={TeacherOption}/>
                    <Button type="primary" onClick={ButtonSubmit} loading={uploading} style={{marginTop: 16,}}>{uploading ? '提交中' : '提交'}</Button>

                </div>

            </Drawer>
        </>
    );
};
export default AdminClassCurriculumAdd;
