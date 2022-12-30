import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/admin")
        }
        // eslint-disable-next-line
    },[])

    const handleLogin = async () => {
        if(!email || !password)
        {
            setError(true);
            return false
        }
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }           
        });
        result = await result.json();
        
        
        if (result.user.type === "customer") {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/customer")
        }
        else if (result.user.type === "retailer") {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/retailer")
        }
        else if (result.user.type === "salesman") {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/salesman")
        }
        else if (result.user.type === "admin") {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/admin")
        }
        else if (result.user.type !== "admin" || "salesman" || "retailer" || "customer") {
            alert("Wrong User Type")
        }
        else{
            alert("Invalid")
        }
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            {error && !email && <span className='invalid-input'>Enter valid email</span>}
            <input type="password" className="inputBox" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            {error && !password && <span className='invalid-input'>Enter valid password</span>}
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}

export default Login