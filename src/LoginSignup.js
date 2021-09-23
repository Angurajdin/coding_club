//import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './LoginSignup.css';

const LoginSignup = () => {

    //let [isLogin] = useState(true);

    return (
        <div className="container loginTop">
            <div className="row">
                <div className="col-9">
                <div className="col"></div>
                <div className="col-7 leftbox">
                    if(isLogin){
                        <Login />
                    }
                    else{  
                        <Signup/>
                    }
                </div>
                <div className="col"></div>
                </div>
                <div className="col-3 rightbox">
                
                </div>
            </div>
        </div>
  
    );
}
 
export default LoginSignup;