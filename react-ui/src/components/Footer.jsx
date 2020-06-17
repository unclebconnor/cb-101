import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

    return (
        <footer className="copyright center">
            <div className="social-links">
                <a href="https://www.facebook.com/clubbing101/">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/clubbing101/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
            <div className="social-links">
                <a href="https://twitter.com/clubbing101_com">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
            <p className="copyright">
                Copyright © 2018 Clubbing101 - All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;

