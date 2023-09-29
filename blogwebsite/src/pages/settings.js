import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Sidebar from '../components/sidebar';
import "../styles/settings.css";

function settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
           <div className='settingsTitle'>
           <span className='settingsTitleUpdate'>Update Account</span>
            <span className='settingTitleDelete'>Delete Account</span>
           </div>
           <form className='settingsForm'>
            <label>Profile Picture</label>
            <img className='settingsImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_Fp0R-ltx3Ws6a1NW1ASjFcYrYN5QcOhv_hk4Fg&s' alt=''/>
            <lable><FaUserCircle/></lable>
            <div className='settingsPp'>
            <input type ='file' style={{display:"none"}}/>
            </div>
            <label>username</label>
            <input type='text' placeholder='butul' name='name'/>
            <label>email</label>
            <input type='email' placeholder='butul@gmail.com' name='email'/>
            <label>Password</label>
            <input type='password' placeholder='password' name='password'/>
            <button className='settingsSubmitButton'>Update</button>
           </form>
        </div>
        <Sidebar/>
      
    </div>
  )
}

export default settings
