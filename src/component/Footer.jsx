import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagramSquare, faPinterest, faTwitter, } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className='footer'>
            <>
                <div className='foot-logo'>
                    <h1>
                        <Link to="/" className="foot-header">HomeLander</Link>
                    </h1>
                    <div className="social">
                        <span><FontAwesomeIcon icon={faInstagramSquare} /></span>
                        <span><FontAwesomeIcon icon={faPinterest} /></span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
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
