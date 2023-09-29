import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import{Link} from 'react-router-dom';
import "../styles/sidebar.css";
import Footer from "../components/footer.js"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About</span>
            <img  src='https://img.freepik.com/premium-vector/serenity-nature-beautiful-woman-meditating-nature-cartoon-vector-eps-10-format_24381-1773.jpg?w=2000' alt=''/>
            <p>
            In nature, everyone depends on one another to keep the ecosystem healthy. For survival, every creature is interrelated and reliant on one another. Humans,
             for example, rely on nature for their survival, and nature provides us with oxygen, food, water, shelter, medicines, and clothing, among other things.
            </p>
        </div>
        <div>
            <span className='sidebarTitle'>
            Categories
            </span>
            <ul className='sidebarList'>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">sports</Link></li>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">Life</Link></li>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">Music</Link></li>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">styles</Link></li>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">Tech</Link></li>
                <li><Link className='sidebarListItem' to ="/posts?nature=sports">Cinema</Link></li>
            </ul>
        </div>
        <div className='sidebarSocialMedia'>
            <FaFacebook/>
            <FaWhatsapp/>
            <FaInstagram/>
            <FaTwitter/>
            <FaPinterest/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Sidebar;
