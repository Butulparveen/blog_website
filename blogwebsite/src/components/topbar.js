import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaSearch,
} from "react-icons/fa";
import "../styles/topbar.css";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

function Topbar() {
  const user = true;
  // let changeRoute = (elementRoute) => {
  //   Router.push(elementRoute);
  // };
  return (
    <div className="top">
      <div className="topLeft">
        <div className="topIcons">
          <FaWhatsapp />
          <FaInstagram />
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">

             {/* <Link to="/">Home
            </Link>  */}
            
            Home
         
            {/* <Link
              className="topLinkDesc"
              to="/"
              onClick={(e) => {
                changeRoute("/");
                e.preventDefault();
              }}
            >
              Home
            </Link> */}
          </li>
          <li className="topListItem">About
            
            {/* <Link to="/about">About
            </Link>  */}
            {/* <Link
              to="/about"
              onClick={(e) => {
                changeRoute("/about");
                e.preventDefault();
              }}
            >
              About
            </Link> */}
          </li>

          <li className="topListItem">Contact</li>
          <li className="topListItem">
             Write
           
            {/* <Link
              to="/write"
              onClick={(e) => {
                changeRoute("/write");
                e.preventDefault();
              }}
            >
              Write
            </Link> */}
           
          </li>
          

          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_Fp0R-ltx3Ws6a1NW1ASjFcYrYN5QcOhv_hk4Fg&s"
              alt=""
            />
          </Link>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">Login</li>
            <li className="topListItem">Register</li>
          </ul>
        )}
        <FaSearch />
      </div>
      {/* <div>
      <ul className="topList">
            <li className="topListItem">Login</li>
            <li className="topListItem">Register</li>
          </ul>
      </div> */}
    </div>
  );
}

export default Topbar;
