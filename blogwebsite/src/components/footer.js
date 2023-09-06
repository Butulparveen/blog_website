import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerCenter">
        <div className="footerLeft">
          <div className="footerIcons">
            <FaFacebook />
            <FaWhatsapp />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="footerRight">
          <a href=" https://www.blogwebsite.com/">
            {" "}
            © 2023 Copyright:Blogwebsite.com
          </a>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerTitlegmail">
          <h6 className="footerTitle">blogwebsite@gmail.com</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
