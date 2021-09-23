const Signup = () => {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6 login">
            <center className="mb-4 loginTitle">Sign Up</center>
            <form>
                <div className="mb-3">
                <label className="form-label formLabel">Email address</label>
                <input type="text" className="form-control inputField" id="Name2"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Email address</label>
                <input type="email" className="form-control inputField" id="Email2"/>
                </div>
                <div className="mb-3">
                <label className="form-label formLabel">Password</label>
                <input type="password" className="form-control inputField" id="Password2"/>
                </div>

                <div className="row justify-content-center">
                <div className="col"></div>
                    <div className="col">
                    <button type="submit" className="mt-4 btn btn-primary loginbutton">Signup</button>
                    </div>
                <div className="col"></div>
                </div>
            </form>
            </div>
            <div className="col"></div>
        </div>
    );
}
 
export default Signup;