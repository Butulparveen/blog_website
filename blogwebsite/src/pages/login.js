import React from 'react'
import "../styles/login.css"

function LoginK() {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Name</label>
        <input className='loginInput' type='text' placeholder='enter a name'/>
        <label>Email</label>
        <input className='loginInput' type='email' placeholder='enter a email'/>
        <label>Password</label>
        <input className='loginInput' type='password' placeholder='enter a password'/>
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegister'>Register</button>
    </div>
  )
}

export default LoginK;
