import '../App.css'
import { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    
    const handleLogin = async (event) => {
        event.preventDefault()
    
    try{
        const res = await fetch("http://127.0.0.1:8000/f1/token/", {
            method: "POST",
            headers: {"Content_Type": "application/json"},
            body: JSON.stringify({username, password}),
        });
        const data = await res.json()

        if(res.ok) {
            localStorage.setItem("token saved", data.access)
            localStorage.setItem("refresh token is also granted", data.refresh)
            setMessage("Login Successfull", "Token saved")
        } else {
            setMessage("Invalid Username or Password")
        }
    } catch(error) {
        setMessage("Network Error")
    }
};


return(
    <>
    <form onSubmit={handleLogin} method='post'>
        <div className='login-container'>
            <div className='login-box'>
                <h8>Login</h8>
                <div className='form-group'>
                    <input autoFocus name='username' placeholder='Username' type='text' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <input autoFocus name='password' placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='login-btn' type='submit'>Login</button>
            </div>
        </div>
    </form>
    </>
);
}