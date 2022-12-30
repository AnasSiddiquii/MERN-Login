import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'

const Change = () => {
    const [password,setPassword] = useState("");
    const [next,setNext] = useState("");
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();


    const pass = async () => {
        if(!password || !next)
        {
            setError(true);
            return false
        }
      let result = await fetch(`http://localhost:5000/update/`,
            {
                method: 'Put',
                body: JSON.stringify({ password:next }),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });
            await result.json();
            navigate("/")
    }
    

    return (
        <div className="container">
            <h1 className="text-center mt-3">Change Password</h1>
            <div className="row mt-5">
                <div className="col-4"></div>
                <div className="col-6">
                <input className="inputBox" type="text" placeholder="Current Password"
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                {error && !password && <span className='invalid-input'>Enter valid password</span>}
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row mt-1">
                <div className="col-4"></div>
                <div className="col-6">
                <input className="inputBox" type="text" placeholder="New Password"
                value={next} onChange={(e) => setNext(e.target.value)}/>
                {error && !next && <span className='invalid-input'>Enter valid password</span>}
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row mt-1">
                <div className="col-4"></div>
                <div className="col-6">
                    <button onClick={pass} className="appButton" type="button">Change</button>
                </div>
                <div className="col-2"></div>
            </div>
            
        </div>
    )
    
}
export default Change