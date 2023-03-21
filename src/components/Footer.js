import './FooterStyles.css';

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>390 Pound Street</p>
              <p>Athens, Georgia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              706-286-0303
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              kpfranklin22@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
            <h4>About the company</h4>
            <p>Kyle here! CEO of kicking back and Founder of F.U.N. I enjoy long walks on the beach!</p>
            <div className='social'>
            <FaFacebook
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
               <FaTwitter
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
               <FaLinkedin
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
               <FaGithub
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
