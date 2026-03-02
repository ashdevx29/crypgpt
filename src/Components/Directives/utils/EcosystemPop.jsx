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
              <h2 className="ecosystem-title">Ecosystem</h2>
              <p className="ecosystem-desc">
                CrypGPT is an AI-powered crypto ecosystem that brings trading, security, payments, governance, and rewards together in one seamless platform.
              </p>

              {/* <div className="pill-container">
                <div className="pill-row row-1">
                  <div className="one-pill pill-lg">token</div>
                </div>
                <div className="pill-row row-2">
                  <div className="one-pill">contact us</div>
                  <div className="one-pill">White Paper</div>
                </div>
                <div className="pill-row row-3">
                  <div className="one-pill">Community</div>
                  <div className="one-pill pill-sm">Roadmap</div>
                  <div className="one-pill pill-sm">Partner</div>
                </div>
              </div> */}
              <div className="pill-container">
  <div className="pill-row row-1">
    {/* Token Link */}
    <div 
      className="one-pill pill-lg clickable-pill" 
      onClick={() => goTo("/token")}
    >
      token
    </div>
  </div>

  <div className="pill-row row-2">
    {/* Contact Us Link */}
    <div 
      className="one-pill clickable-pill" 
      onClick={() => goTo("/contact")}
    >
      contact us
    </div>
    {/* White Paper Link - Agar ye external PDF hai toh window.open use karein */}
    <div 
      className="one-pill clickable-pill" 
      onClick={() => window.open("https://crypgpt-token.gitbook.io/crypgpts-token/", "_blank")}
    >
      White Paper
    </div>
  </div>

  <div className="pill-row row-3">
    {/* Community Link */}
    <div 
      className="one-pill clickable-pill" 
      onClick={() => window.open("https://linktr.ee/crypgpt_token?utm_source=linktree_profile_share&ltsid=992a89e8-2fe2-4cd7-9104-aa211d9824b1", "_blank")}
    >
      Community
    </div>
    {/* Roadmap Link */}
    <div 
      className="one-pill pill-sm clickable-pill" 
      onClick={() => window.open("https://blofin.com/spot/CRYPGPT-USDT", "_blank")}
    >
      Buy Now
    </div>
    {/* Partner Link */}
    <div 
      className="one-pill pill-sm clickable-pill" 
      onClick={() => goTo("/privacy-policy")}
    >
      Policy
    </div>
  </div>
</div>
            </div>

           
            <div className="mega-right">

              <div className="mega-item">
                <div className="mega-icon"><img src={one} alt="Use Case" /></div>
                <div className="mega-text">
                  <h4 onClick={() => goTo("/usecase")} className="clickable-heading">
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
                  <h4 onClick={() => goTo("/exchange")} className="clickable-heading">
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
                  <h4 onClick={() => goTo("/dashboard")} className="clickable-heading">
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