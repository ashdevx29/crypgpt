import React from "react";
import one from "../../../assets/header-eco/one.png";
import two from "../../../assets/header-eco/two.png";
import three from "../../../assets/header-eco/three.png";
import four from "../../../assets/header-eco/four.png";
import five from "../../../assets/header-eco/five.png";
import six from "../../../assets/header-eco/six.png";
import seven from "../../../assets/header-eco/seven.png";
// import '../../../Styles/ecosystempop.css';
import { useNavigate } from "react-router-dom";

function EcosystemPop({ onClose }) {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Helper function → popup band + navigate
  const goTo = (path) => {
    handleClose();
    // Optional: thoda delay daal sakte ho agar closing animation hai
    setTimeout(() => {
      navigate(path);
    }, 120);
  };

  return (
    <>
      <div className="eco-overlay" onClick={handleClose} />

      <div className="ecosystem-mega-menu">
        <div className="mega-menu-content">
          <div className="ecosystem-section">

            {/* LEFT SIDE */}
            <div className="ecosystem-left">
              <h1 className="ecosystem-title">Ecosystem</h1>
              <p className="ecosystem-desc">
                CrypGPT is an AI-powered crypto ecosystem that brings trading, security, payments, governance, and rewards together in one seamless platform.
              </p>

              <div className="pill-container">
                <div className="pill-row row-1">
                  <div className="one-pill pill-lg">MEXC</div>
                </div>
                <div className="pill-row row-2">
                  <div className="one-pill">BSC Scan</div>
                  <div className="one-pill">White Paper</div>
                </div>
                <div className="pill-row row-3">
                  <div className="one-pill">Community</div>
                  <div className="one-pill pill-sm">Roadmap</div>
                  <div className="one-pill pill-sm">Partner</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mega-right">

              <div className="mega-item">
                <div className="mega-icon"><img src={one} alt="Use Case" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/use-case")} className="clickable-heading">
                    Use Case
                  </h4>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={five} alt="AI ChatBot" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/ai-chatbot")} className="clickable-heading">
                    AI ChatBot
                  </h4>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={two} alt="Staking" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/staking")} className="clickable-heading">
                    Staking
                  </h4>
                </div>
              </div>

              {/* Removed duplicate Staking block – agar yeh GPT Exchange tha to path change kar dena */}
              <div className="mega-item">
                <div className="mega-icon"><img src={six} alt="GPT Exchange" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/gpt-exchange")} className="clickable-heading">
                    GPT Exchange
                  </h4>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={three} alt="CrypGateWays" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/crypgateways")} className="clickable-heading">
                    CrypGateWays
                  </h4>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={seven} alt="Burn Dashboard" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/burn-dashboard")} className="clickable-heading">
                    Burn Dashboard
                  </h4>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={four} alt="DAO Governance" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/dao-governance")} className="clickable-heading">
                    DAO Governance
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcosystemPop;