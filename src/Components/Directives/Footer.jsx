import React from 'react';
import '../../Styles/Footer.css';
import logo from "../../assets/footer/logo.png"
import tw from "../../assets/footer/1.png"
import fb from "../../assets/footer/medi.png"
import insta from "../../assets/footer/tele.png"
import github from "../../assets/footer/logo-instagram 1.png"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="cgpt-footer-container">
      {/* Top Curve SVG */}
      <div className="cgpt-footer-curve">
        <svg width="100%" height="103" viewBox="0 0 1512 103" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1512 0H0V103C124.25 73.0211 455.7 23.3132 787.5 64.3122C1119.3 105.311 1408.75 81.3951 1512 64.3122V0Z" fill="url(#paint0_linear_476_57)"/>
          <defs>
            <linearGradient id="paint0_linear_476_57" x1="1512" y1="51.2488" x2="-2.9494e-05" y2="51.523" gradientUnits="userSpaceOnUse">
              <stop stopColor="#110E0D"/>
              <stop offset="1" stopColor="#1B1B1B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="cgpt-footer-content">
        <div className="cgpt-footer-main-grid">
          
          {/* Brand Section */}
          <div className="cgpt-footer-brand">
            <div className="cgpt-logo-wrapper">
             <img src={logo} alt=''/>
            </div>
            <p className="cgpt-brand-description">
              Discover the power of CrypGPT AI, where advanced intelligence meets real-time crypto strategy. 
              Unlock smarter decisions, automated execution, and next-level trading performance.
            </p>
            <div className="cgpt-social-icons">
              <a href="https://x.com/crypgpt_token"  target="_blank" rel="noopener noreferrer"><img src={tw} alt=''></img></a>
              <a href="https://medium.com/@crypgpt_token" target="_blank" rel="noopener noreferrer"><img src={fb} alt=''></img></a>
              <a href="https://t.me/crypgptcommunity" target="_blank" rel="noopener noreferrer"><img src={insta} alt=''></img></a>
              <a href="https://www.instagram.com/crypgpt_token" target="_blank" rel="noopener noreferrer  "><img src={github} alt=''></img></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="cgpt-links-grid">
            <div className="cgpt-link-column">
              <h4 className="cgpt-column-title">Company</h4>
              <a href="/crypgateways">Crypgatway</a>
              <a href="/token">Token</a>
              <a href="https://crypgpt-9x2fp4n.gamma.site/" target="_blank" rel="noopener noreferrer" >Whitepaper</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <div className="cgpt-link-column">
              <h4 className="cgpt-column-title">Resources</h4>
              <a href="/usecase">Use Case</a>
              <a href="/ai-chatbot">AI ChatBot</a>
              <a href="/staking">Staking</a>
              <a href="/exchange">GPT Exchange</a>
            </div>
            <div className="cgpt-link-column">
              <h4 className="cgpt-column-title">Help</h4>
              <a href="#">Customer Support</a>
              <a href="/terms-and-conditions">Terms & Conditions</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="cgpt-footer-bottom">
          <div className="cgpt-bottom-links">
           <Link to="/?section=about">About Us</Link>
            <a href="/contact-us">Contact</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/terms-and-conditions">Terms of Use</a>
          </div>
          <div className="cgpt-copyright">
            © 2026, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;