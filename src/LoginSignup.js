import Login from './Login';
import Signup from './Signup';
import './LoginSignup.css';
import { useLocation } from 'react-router-dom'
import logo from './Assets/Images/Finalwhitelogo.png'

const LoginSignup = () => {

    const location = useLocation();
    // console.log(typeof(location.pathname));
    // console.log(location);
    let page;
    if (location.pathname === "/") {
        page = <Login />;
    } else {
        page = <Signup />
    }

    return (
        <div className="container loginTop">
            <div className="row">
                <div className="col-md-12 col-lg-9">
                    <div className="col"></div>
                    <div className="col-sm-10 col-md-8 leftbox">
                        {page}
                    </div>
                    <div className="col"></div>
                </div>
                
                    <div className="col-lg-3 rightbox textStyle d-none d-lg-block d-xl-block">
                        <br/><br/><br/>
                        <br/><br/><br/>
                    <div className="img_container">
                        <center>
                            <img src={logo} alt="can't fetch"/>
                        </center>
                            <br/><br/><br/>
                            <div className="text-block">
                                <h4><b>Psg Tech Coding Club</b></h4>
                                Simple things should be simple, complex
                                things should be possible.
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  
    );
}
 
export default LoginSignup;
