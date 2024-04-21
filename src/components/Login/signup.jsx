import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


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
        <div className="signup" id="signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder="Enter name" autoComplete="on" name="email" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" placeholder="Enter email" autoComplete="on" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" placeholder="Enter email" autoComplete="on" name="email" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </form>

        </div>
    )
}

export default Signup;