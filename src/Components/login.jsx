import { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    let [email,Setemail]=useState('')
    let [Password,Setpassword]=useState('')
    let handleSubmit=()=>{
        
    }
    return (
        <div className="login">
            <h1>Login-Page</h1>
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>Setemail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={Password} onChange={(e)=>Setpassword(e.target.value)} />
                </div>
                <div className="options">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="signup">
                    <p>Are you a new user?</p>
                    <Link to={'/signup'} type="submit" className="btn btn-outline-success">Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;