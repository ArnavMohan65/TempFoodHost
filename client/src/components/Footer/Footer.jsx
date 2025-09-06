import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import logo from './logo.png';

const Footer = () => {
  // const imageUrl = 'https://www.canva.com/design/DAF_AuKufEs/dPI9ynQ7ym4QP8puFYvKtg/view?utm_content=DAF_AuKufEs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview';

  return (
    <div className="footer">
      <div className="heading-footer">
        <img src={logo} className="cropped-img"/>
      </div>
      <div className="div1">
        <h4 className="footer-h4">Resources</h4>
        <p className="footer-p">Donate Food</p>
        <p className="footer-p">Contact Us</p>
      </div>
      <div className="div2">
        <h4 className="footer-h4">Get Involved</h4>
        <p className="footer-p">Request For Food</p>
        <p className="footer-p">Partner with Us</p>
      </div>
      <div className="div3">
        <h4 className='footer-h4 className="footer-p"'>Socials</h4>
        <div className="footer-icons">
          <p className="footer-p">
            <FaInstagram size={40} />
          </p>
          <p className="footer-p">
            <FaTwitter size={40} />
          </p>
          <p className="footer-p">
            <FaFacebook size={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
