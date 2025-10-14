import '../App.css'

import { useState } from 'react'
export default function Register() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[confirmpassword, setConfirmPassword] = useState("")
    const[message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmpassword) {
            setMessage("Passwords do not match")
        }
        try {
            const res = await fetch("http://127.0.0.1:8000/f1/register/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            });
            if (res.ok) {
                setMessage("User Account Created")
            }
            else {
                setMessage("error creating account")
            }
        } catch (error){
            setMessage("Something went wrong")
        }

    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='register-container'>
                <div className='register-box'>
                    <h2>Register</h2>
                    <div className='form-group'>
                        <input name='username' placeholder='Username'  autoFocus className='form-control' onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input name='password' placeholder='Password' type='password' autoFocus className='form-control' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='password' name='confirmpassword' autoFocus placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className='submit-btn' type='submit'>Register</button>

                </div>
            </div>
        </form>
        </>
    )
}