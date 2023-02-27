import { useState } from 'react';
import axios from 'axios'//used to post,get
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    let [name,SetName]=useState('')
    let [Mobile,SetMobile]=useState('')
    let [email,SetEmail]=useState('')
    let [Password,SetPassword]=useState('')
    let [confirmPassword,SetConfirmPassword] =useState('')
    let navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDeault()
        let data={name,email,Password,confirmPassword,Mobile}
        if (name && email && (Password === confirmPassword) && Mobile) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
                console.log(data);
            })
        } else {
            
        }
    }

    return ( <div className="signup">
        <h1>Signup</h1>
        <div className="signup_form">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>SetName(e.target.value)}  />
                </div>
                <div className="mob_num">
                <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" value={Mobile} onChange={(e)=>SetMobile(e.target.value)} />
                </div>
                <div className="email">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>SetEmail(e.target.value)} />
                </div>
                <div className="password">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
                </div>
                <div className="confirmpassword">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e)=>SetConfirmPassword(e.target.value)}/>
                </div>
                <div className="signup_btn">
                <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            <div className="login_btn">
                <p>Already a user?</p>
                <Link to='/' className="btn btn-outline-success">Log In</Link>
                </div>
        </div>
    </div> );
}
 
export default Signup;