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
    let rightboxShow;
    console.log(window.screen.availWidth);
    if (window.screen.availWidth < 768) {
        rightboxShow = false
    } else {
        rightboxShow = true
    }

    return (
        <div className="container loginTop">
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <div className="col"></div>
                    <div className="col-sm-9 col-md-7 leftbox">
                        {page}
                    </div>
                    <div className="col"></div>
                </div>
                { rightboxShow &&
                    <div className="col-md-3 rightbox textStyle">
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <div className="img_container">
                            <img src={logo} alt="can't fetch"/>
                            <br/><br/><br/>
                            <div className="text-block">
                                <h4><b>Psg Tech Coding Club</b></h4>
                                Simple things should be simple, complex
                                things should be possible.
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
  
    );
}
 
export default LoginSignup;
