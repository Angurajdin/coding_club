import { useState } from "react";
import { Link } from "react-router-dom";
import API from './api'

const Login = () => {

    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");

    const login = async() =>{
        const b = {
            email: emailid,
            password: password
        }
        const a = await API.login(b)
        console.log(a);
    }

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6 login">
            <center className="mb-4 loginTitle">Log In</center>
                <div className="mb-3">
                <label className="form-label formLabel">Email address</label>
                    <input type="email" value={emailid} onChange={e => setEmailid(e.target.value)} className="form-control inputField" id="Email1"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control inputField" id="Password1"/>
                </div>

                <div className="row">
                    <div className="col">
                        Not a member? <Link to="/signup">Register</Link> 
                    </div>
                    <div className="col">
                        <Link style={{float:"right"}} to="/forgetpassword">Forget Password?</Link>
                    </div>
                </div>

                <div className="row justify-content-center">
                <div className="col"></div>
                    <div className="col">
                    <button type="submit" onClick={login} className="mt-4 btn btn-primary loginbutton">Login</button>
                    </div>
                <div className="col"></div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
}
 
export default Login;