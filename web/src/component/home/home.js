import React,{useEffect} from 'react';
import {Button, Dropdown, Layout} from 'antd';
import'./home.css'
import {  CSSTransition ,TransitionGroup} from "react-transition-group";
import { useLocation,Outlet ,Link} from "react-router-dom";
import HomeNav from "./nav";
import {PingApi} from '../../api/api'
const { Content } = Layout;



const items = [
    {
        key: '1',
        label: (
            <Button onClick={()=>{
                localStorage.clear()
                window.location.href="/login"
            }}>退出登录</Button>
        ),
    },
];

const Home = () => {
    useEffect(()=>{
        let loginTime = new Date(localStorage.getItem("login_time"))
        let nowTime = new  Date()
        // console.log(loginTime)
        // console.log(nowTime)
        let timeSince = Math.floor((nowTime - loginTime) / 1000 / 60)
        // console.log(Math.floor((nowTime - loginTime) / 1000 / 60))
        // console.log((nowTime - loginTime) / 1000 / 60)
        if (timeSince > 240){
            window.location.href = "/login"
        }
        let user_role = localStorage.getItem("user_role")
        if (user_role != 1){
            window.location.href = "/admin"
        }
    },[])


    const location = useLocation();
    return (
        <Layout >
            <div style={{width:"100%", height:"50px",display:'flex' }}>
                <HomeNav/>
                <Dropdown
                    menu={{items}}
                    placement="bottom"
                    arrow={{
                        pointAtCenter: true,
                    }}
                >
                    <Button style={{height:"100%",marginLeft:"10px"}}>{localStorage.getItem("username")}</Button>
                </Dropdown>
            </div>
            <Content style={{padding:'20px', width:'100%',height:"100%"}}>
                {/*<TransitionGroup mode="out-in" style={{padding:'20px', width:'100%',height:"100%"}}>*/}
                {/*    <CSSTransition*/}
                {/*        key={location.pathname}*/}
                {/*        timeout={1500}*/}
                {/*        appear={true}*/}
                {/*        classNames={{*/}
                {/*            // appear: 'animate__animated',*/}
                {/*            // appearActive: 'animate__backInLeft',*/}
                {/*            // enter: 'animate__animated',*/}
                {/*            // enterActive: 'animate__backInLeft',*/}
                {/*            // exit: 'animate__animated',*/}
                {/*            // exitActive: 'animate__backOutRight'*/}

                {/*            // appear: 'animate__animated',*/}
                {/*            // appearActive: 'animate__fadeInLeft',*/}
                {/*            // enter: 'animate__animated',*/}
                {/*            // enterActive: 'animate__fadeInLeft',*/}
                {/*            // exit: 'animate__animated',*/}
                {/*            // exitActive: 'animate__fadeOutRight'*/}

                {/*            // appear: 'animate__animated',*/}
                {/*            // appearActive: 'animate__fadeInLeft',*/}

                {/*        }}*/}
                {/*    >*/}
                        <Outlet/>
                    {/*</CSSTransition>*/}
                {/*</TransitionGroup>*/}
            </Content>
        </Layout>
    );
};
export default Home;
