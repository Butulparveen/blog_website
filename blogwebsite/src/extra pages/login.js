import { useState } from "react";
import * as React from "react";
import "../styles/login.css";
import {Link} from "react-router-dom";
import Footer from "../components/footer.js"



function Login() {
  const [checked, setChecked] = useState(false);
  const handleChangeOne = () => {
    setChecked(!checked);
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className="loginDesc">Name</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter a name....."
        />
        <label className="loginDesc">Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter a email ...."
        />
        <label className="loginDesc">Password</label>
        <input
          className="loginInput"
          type="passsword"
          placeholder="Enter a password...."
        />


        <div className="loginCheck">
          <label className="loginRemeber">
            <input type="checkbox" onChange={handleChangeOne} />
            Remember me
          </label>
          <label className="loginForgot" onClick={Link}>Forgot Password</label>
        </div>


        <div className="submitForm">
          <button className="loginButton" >login</button>
          <button className="loginRegister">Register</button>
        </div>
      
      </form>
     
    </div>
  );
}


export default Login;
/* <div>
                    <li>
                    <button className='loginButton'>Login</button>
                    </li>
                    <li>
                    <button className='loginButton'>Register</button>
                    </li>
            </div> */
