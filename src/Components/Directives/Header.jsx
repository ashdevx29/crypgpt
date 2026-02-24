import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../Styles/Header.css";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import {  useEffect, useRef } from "react";
import fireIcon from "../../assets/b1icon.png"; // Fire icon ke liye image import
import buttonTwo from "../../assets/buttonTwo.png"; // Button two ke liye image import
import one from "../../assets/header-eco/one.png";
import two from "../../assets/header-eco/two.png";
import three from "../../assets/header-eco/three.png";
import four from "../../assets/header-eco/four.png";
import five from "../../assets/header-eco/five.png";
import six from "../../assets/header-eco/six.png";
import seven from "../../assets/header-eco/seven.png";
import EcosystemPop from "./utils/EcosystemPop";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const ecosystemRef = useRef(null); // Menu ko track karne ke liye ref

  // Bahar click karne par band karne ka logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Agar click ecosystemRef waale div ke bahar hua hai, toh menu band kar do
      if (ecosystemRef.current && !ecosystemRef.current.contains(event.target)) {
        setIsEcosystemOpen(false);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 const toggleEcosystem = (e) => {
  e.preventDefault();

  setIsMobileMenuOpen(false);   // 🔥 Mobile menu close
  setIsEcosystemOpen(true);     // 🔥 Full screen mega open
};

  return (
    <>
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
      </NavLink>
      </div> 



      {/* ✅ Mobile Stats (Only below 1180px) */}
<div className="mobile-stats">
 <a
  href="https://bscscan.com/advanced-filter?fadd=0x0000000000000000000000000000000000000000&tadd=0x0000000000000000000000000000000000000000&tkn=0xe0ae52e75b38b605e9c879a570ee1e7bcc66254b"
  target="_blank"
  rel="noopener noreferrer"
  className="stat-pill one-pill"
>
  <span className="fire-icon">
    <img src={fireIcon} alt="Fire Icon" />
  </span>
  <div className="stat-column">
    <span className="stat-main">13 M</span>
    <span className="stat-sub">CRYPGPT BURNED</span>
  </div>
</a>

  <div className="stat-pill">
    <div className="stat-column">
      <img src={buttonTwo} alt="Button Icon" className="buttontwo-icon" />
      <span className="stat-status">
        ON BOARD <span className="g-dot">●</span>
      </span>
    </div>
  </div>
  
</div>

      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {/* <ul onClick={() => setIsMobileMenuOpen(false)}> */}
        <ul onClick={() => setIsMobileMenuOpen(false)}>
        <li>
            <NavLink to="/">
              <span className="nav-dot"></span>
              Home
              <span className="nav-arrow">
                <PiArrowBendDownRightFill />
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/token">
              <span className="nav-dot"></span>
              Token
              <span className="nav-arrow">
                <PiArrowBendDownRightFill />
              </span>
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="/ecosystem">
              <span className="nav-dot"></span>
              Ecosystem
              <span className="nav-arrow">
                <PiArrowBendDownRightFill />
              </span>
            </NavLink>
          </li> */}

{/* Ecosystem Item with Ref */}
          <li className="ecosystem-nav-item" ref={ecosystemRef}>
            <NavLink 
              to="/ecosystem" 
              onClick={toggleEcosystem} 
              className={isEcosystemOpen ? "active" : ""}
            >
              <span className="nav-dot"></span>
              Ecosystem
              <span className="nav-arrow"><PiArrowBendDownRightFill /></span>
            </NavLink>

            {/* Bada Box (Mega Menu) */}
          
             
 

  {/* Ye wo bada box hai jo screenshot mein dikh raha hai */}



</li>
               
                {/* Aapka pehle wala mega-menu-content yahan rahega */}
            
            
        

<li>
  <a
    href="https://crypgpt-token.gitbook.io/crypgpts-token/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="nav-dot"></span>
    WhitePaper
    <span className="nav-arrow">
      <PiArrowBendDownRightFill />
    </span>
  </a>
</li>

          <li>
            <NavLink to="/contact-us">
            <span className="nav-dot"></span>
              Contact
               <span className="nav-arrow">
                <PiArrowBendDownRightFill />
              </span>
            </NavLink>
          </li>


          {/* <li className="mobile-contact">
            <NavLink to="/contact">
              Contact
            </NavLink>




          </li> */}

<div className="mobile-statss mobile-contact hiden-desktop">
  
 <a
  href="https://bscscan.com/advanced-filter?fadd=0x0000000000000000000000000000000000000000&tadd=0x0000000000000000000000000000000000000000&tkn=0xe0ae52e75b38b605e9c879a570ee1e7bcc66254b"
  target="_blank"
  rel="noopener noreferrer"
  className="stat-pill one-pill"
>
  <span className="fire-icon">
    <img src={fireIcon} alt="Fire Icon" />
  </span>
  <div className="stat-column">
    <span className="stat-main">13 M</span>
    <span className="stat-sub">CRYPGPT BURNED</span>
  </div>
</a>

  <div className="stat-pill mbl-mr-btm">
    <div className="stat-column">
      <img src={buttonTwo} alt="Button Icon" className="buttontwo-icon" />
      <span className="stat-status">
        ON BOARD <span className="g-dot">●</span>
      </span>
    </div>
  </div>

</div>



        </ul>

        {/* Mobile Stats Inside Menu (Only <480px) */}

      </nav>

      <div className="h-line"></div>

   

      <div className="header-stats-group desktop-btn">
  <a
  href="https://bscscan.com/advanced-filter?fadd=0x0000000000000000000000000000000000000000&tadd=0x0000000000000000000000000000000000000000&tkn=0xe0ae52e75b38b605e9c879a570ee1e7bcc66254b"
  target="_blank"
  rel="noopener noreferrer"
  className="stat-pill one-pill"
>
  <span className="fire-icon">
    <img src={fireIcon} alt="Fire Icon" />
  </span>
  <div className="stat-column">
    <span className="stat-main">13 M</span>
    <span className="stat-sub">CRYPGPT BURNED</span>
  </div>
</a>

  <div className="stat-pill">
    <div className="stat-column">
    <img src={buttonTwo} alt="Button Icon" className="buttontwo-icon" />
      <span className="stat-status">ON BOARD <span className="g-dot">●</span></span>
    </div>
  </div>

</div>

      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <HiX size={28} className="menu-icon" />
        ) : (
          <HiMenuAlt1 size={28} className="menu-icon" />
        )}
      </div>
    </header>

      {isEcosystemOpen && (
  <EcosystemPop onClose={() => setIsEcosystemOpen(false)} />
)}
</>
  );
 
}

export default Header;