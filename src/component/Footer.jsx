import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Footer.scss";

export const Footer = () => {
    return (
        <div className='footer'>
            <>
                <div className='foot-logo'>
                    <h1>
                        <Link to="/" className="foot-header">HomeLander</Link>
                    </h1>
                    <div className="social">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="footer-list">
                    <div className="footer-con">
                        <h4>Company</h4>
                        <ul>
                            <li>List a Property</li>
                            <li>About Us</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="footer-con">
                        <h4>Company</h4>
                        <ul>
                            <li>FAQ's</li>
                            <li>Contacts Us</li>
                        </ul>
                    </div>
                    <div className="footer-con">
                        <h4>Company</h4>
                        <ul>
                            <li>Privacy Settings</li>
                            <li>Contact Us</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}
