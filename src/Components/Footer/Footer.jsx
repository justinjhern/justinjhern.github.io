import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'


const Footer = () => {

  return (
    <footer className="footer">
      <div id='footer' className="footer-links">
        <a href="https://www.linkedin.com/in/justin-jhern-0043301ba/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="mailto:justin.jhern@gmail.com">
          <img src={gmail} alt="Email"/>
        </a>
        <a href="https://github.com/justinjhern" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub"/>
        </a>
      </div>
      <hr />
      <div className="footer-bottom">
        <span>Justin Jhern</span>
        <a href="https://github.com/justinjhern/justinjhern.github.io" target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </footer>
  )
}

export default Footer
