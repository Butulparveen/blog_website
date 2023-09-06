import React from 'react';
import {FaWhatsapp,FaInstagram,FaTwitter, FaFacebook, FaSearch} from "react-icons/fa";
import "../styles/topbar.css";
import {Link} from 'react-router-dom';



function Topbar() {
    const user =true;
  return (
    <div className='top'>
        <div className='topLeft'>
            <div className='topIcons'>
                <FaWhatsapp/>
                <FaInstagram/>
                <FaInstagram/>
                <FaTwitter/>
                <FaFacebook/>
            </div>

        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    Home
                </li>
                <li className='topListItem'>
                    About
                </li>
                <li className='topListItem'>
                    Contact
                </li>
                <li className='topListItem'>
                    Write
                </li>
                <li className='topListItem'>
                    Logout
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {user?(
                <Link to="/settings">
                    <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_Fp0R-ltx3Ws6a1NW1ASjFcYrYN5QcOhv_hk4Fg&s" alt=""/>
                </Link>
            ):(
                <ul className='topList'>
                     <li className='topListItem'>
                    Login
                </li>
                <li className='topListItem'>
                    Register
                </li>
                </ul>
            )}<FaSearch/>

        </div>

      
    </div>
  )
}

export default Topbar;
