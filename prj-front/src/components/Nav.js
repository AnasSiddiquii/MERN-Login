import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    
    return (
        <div>
            {
                auth ?
                    <ul className="nav-ul">
                        <li> <Link onClick={logout} to="/">Logout</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;