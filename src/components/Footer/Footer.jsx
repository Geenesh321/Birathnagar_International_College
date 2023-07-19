import "../Footer/Footer.scss";
import Logo from "../../assets/Images/biratnagar-normal-logo.svg";
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io';
import { FiFacebook } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';


import React from "react";

import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div className="footer-top">
                <img src={Logo} alt="" />
                <div className="buttons">
                    <button className="btn1" onClick={()=>navigate('/enquire')}>Enquire Now</button>
                    <button className="btn2" onClick={()=>navigate('/contact')}>Contact Us</button>
                </div>
            </div>

            <div className="bottom">
                <div className="info">
                    <span><MdLocationOn/><p>Biratnagar 5, Bhrikuti Chowk</p></span>
                    <span><BsFillTelephoneFill/><p>977-9801009090</p></span>
                    <span><IoMdMail/><p>info@bicnepal.edu.np</p></span>
                </div>
                <ul className="pages">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li>Scholarship Programmes</li>
                    <li>Events</li>
                </ul>
                <div className="social">
                    <span><FiFacebook/><p>Facebook</p></span>
                    <span><BsInstagram/><p>Instagram</p></span>
                    <span><FaLinkedin/><p>Linked In</p></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
