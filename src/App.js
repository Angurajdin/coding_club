import './App.css';

function App() {
  return (
    <div className="container ">
      <div className="row full-height">
        <div className="col-9">
          <div className="leftbox">
            <div className="col-3"></div>
            <div className="col-6 login">
              <div className="logintitle">Log In</div>
              <form>
                <div className="mb-3">
                <label className="form-label emaillabel">Email </label>
                <input type="email" className="form-control emailinput" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <label className="form-label  passwordlabel">Password</label>
                <input type="password" className="form-control passwordinput" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="loginbutton"  >Login</button>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="col-3 loginBgColor">
          <div className="rightcontent">
            <div className="codingclubtitle">Psg Tech Coding Club</div>
            <div className="codingclubcontent">Simple things should be simple, complex things should be possible.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
