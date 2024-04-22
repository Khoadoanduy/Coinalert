import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import "./login.css"
function Signup() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName] = useState();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://localhost:3002/signup', {name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    return (
        <div className="login-container">
            <div className="signup-content" id="signup">
                <div className="signup-form">
                    <h2 className="form-title">Signup</h2>
                    <form onSubmit={handleSubmit} class="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" placeholder="Your name" name="name" id="name" autoComplete="on" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                <i class="zmdi zmdi-email"></i>
                            </label>
                            <input type="text" placeholder="Your email" name="email" id="email" autoComplete="on"  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i class="zmdi zmdi-lock"></i>
                            </label>
                            <input type="text" placeholder="Your password" name= "pass" id="pass" autoComplete="on"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;