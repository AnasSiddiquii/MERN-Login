import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/admin")
        }
        // eslint-disable-next-line
    },[])


    const collectData = async () => {
        if(!name || !email || !password || !type)
        {
            setError(true);
            return false
        }
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password, type }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await result.json();
        navigate("/")
    }


    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            {error && !email && <span className='invalid-input'>Enter valid email</span>}
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            {error && !password && <span className='invalid-input'>Enter valid password</span>}
            <input className="inputBox" type="text" placeholder="Enter user type"
                value={type} onChange={(e) => setType(e.target.value)}/>
            {error && !type && <span className='invalid-input'>Enter valid type</span>}
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
            
        </div>
    )
}
export default SignUp