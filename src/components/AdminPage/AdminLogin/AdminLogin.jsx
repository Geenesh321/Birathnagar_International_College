import React, { useState } from "react";
import './AdminLogin.scss';
import NavBar from "../../NavBar/NavBar";
import ip from '../../../ip-config/ip';
import Axios from 'axios';
const AdminLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('')

    const win = window.sessionStorage;

    const adminLogin = (e)=>{
        e.preventDefault();
        Axios.post(`https://${ip}/api/admin`,{
            name: userName,
            password: password
        }).then((response) =>{
            if(response.data.success === 0){
                setErrMsg(response.data.message)
            }
            else{
                setErrMsg('')
                win.setItem('token', response.data.token)
                alert('Login Successfull.')
                window.location.href = '/admin-page'
            }
        })
    }
    return (
        <>
            <NavBar/>
            <section className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={(e)=>adminLogin(e)}>
                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {errMsg?<p className="message">{errMsg}</p>:''}
                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default AdminLogin;