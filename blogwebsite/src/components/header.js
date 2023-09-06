import React from 'react';
import "../styles/header.css";


function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesSm'>
                Blog Website
            </span>
            <span className='headerTitlesLg'>
                Blog
            </span>
        </div>
        <img className='headerImg' src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg' alt=''/>

      
    </div>
  )
}

export default Header;
