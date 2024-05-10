import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

 <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer