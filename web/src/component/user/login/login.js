import './login.css'
import {Button ,message,} from "antd";
import {UserLoginApi} from '../../../api/api'

const Login = ()=>{

    const ButtonLogin = ()=>{
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        if (!username || !password){
            message.error("请输入账号密码")
            return
        }
        console.log(username, password)
        UserLoginApi({"username":username,"password":password}).then(res=>{
            console.log(res)
            if(res.code == 200){
                message.success("登录成功")
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user_id",res.data.user_id)
                localStorage.setItem("user_role",res.data.user_role)
                localStorage.setItem("class_id",res.data.class_id)
                localStorage.setItem("username",res.data.username)
                localStorage.setItem("login_time",new Date())
                if (res.data.user_role == 1){
                    window.location.href = "/"
                }else {
                    window.location.href = "/admin"
                }

            }else {
                message.error("登录失败")

            }
        }).catch(error=>{})
    }

    return(
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                <div className="square" ></div>
                <div className="square" ></div>
                <div className="square" ></div>
                <div className="square" ></div>
                <div className="square" ></div>
                <div className="login-container">
                    <div className="form">
                        <h2>welcome login</h2>
                        <form>
                            <div className="inputBox"><input type="text" placeholder="请输入登录的账号" id="username"/></div>
                            <div className="inputBox"><input type="password"  placeholder="请输入登录的密码" id="password"/></div>
                            <Button className="login_button" type="primary" onClick={ButtonLogin}>登录</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login