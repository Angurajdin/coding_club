import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6 login">
            <center className="mb-4 loginTitle">Log In</center>
            <form>
                <div className="mb-3">
                <label className="form-label formLabel">Email address</label>
                <input type="email" className="form-control inputField" id="Email1"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Password</label>
                <input type="password" className="form-control inputField" id="Password1"/>
                </div>

                <div className="row justify-content-end">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <Link to="/forgetpassword">Forget Password?</Link>
                </div>
                </div>

                <div className="row justify-content-center">
                <div className="col"></div>
                    <div className="col">
                    <button type="submit" className="mt-4 btn btn-primary loginbutton">Login</button>
                    </div>
                <div className="col"></div>
                </div>
            </form>
            </div>
            <div className="col"></div>
        </div>
    );
}
 
export default Login;