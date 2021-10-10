import { useState } from "react";
import { Link } from "react-router-dom";
import API from './api'

const Signup = () => {

    const [username, setUsername] = useState("");
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");

    const signup = async() =>{
        const b = {
            userName: username,
            emailID: emailid,
            password: password
        }
        const a = await API.signup(b)
        console.log(a);
    }


    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6 login">
            <center className="mb-4 loginTitle">Sign Up</center>
                <div className="mb-3">
                <label className="form-label formLabel">Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control inputField" id="UserName1"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Email address</label>
                    <input type="email" value={emailid} onChange={e => setEmailid(e.target.value)} className="form-control inputField" id="Email1"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control inputField" id="Password1"/>
                </div>

                <div className="row">
                    <div className="col" >
                        <button type="submit" onClick={signup} className="mt-4 btn btn-primary loginbutton">Signup</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col" >
                        Already Registered ? <Link to="/">Login</Link>
                    </div>                    
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
}
 
export default Signup;