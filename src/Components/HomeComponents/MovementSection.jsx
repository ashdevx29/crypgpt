import React from 'react';
import '../../Styles/Movement.css';
// Asset Imports
import movementVideo from "../../assets/movement/center.mp4";
import moveIcon1 from "../../assets/movement/insta.png";
import moveIcon2 from "../../assets/movement/twitter.png";
import moveIcon3 from "../../assets/movement/teli.png";
import moveIcon4 from "../../assets/movement/m.png";

const MovementSection = () => {
  return (
    <section className="move-root-wrapper">
      {/* Add this link if FontAwesome isn't working */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <div className="move-main-layout">

        {/* Card 1: Community (Reverse Animated Border) */}
        <div className="move-glass-card move-border-card">
          <div className="move-border-animator move-reverse"></div>
          <div className="move-card-inner">
            <h2 className="move-title-text">JOIN THE AI <span className="move-crypgpt">CRYPGPT</span> MOVEMENT</h2>
            <p className="move-description">Follow CrypGPT for AI trading signals, product updates, and community access.</p>

            {/* <div className="move-social-row">
              <div className="move-social-item"><img src={moveIcon1} alt="Insta" /></div>
              <div className="move-social-item"><img src={moveIcon2} alt="FB" /></div>
              <div className="move-social-item"><img src={moveIcon3} alt="Telegram" /></div>
              <div className="move-social-item"><img src={moveIcon4} alt="Medium" /></div>
            </div> */}

            <div className="move-social-row">
              <div className="move-social-item">
                <a href="https://www.instagram.com/crypgpt_token" target="_blank" rel="noopener noreferrer">
                  <img src={moveIcon1} alt="Instagram" />
                </a>
              </div>

              <div className="move-social-item">
                <a href="https://x.com/crypgpt_token" target="_blank" rel="noopener noreferrer">
                  <img src={moveIcon2} alt="twitter" />
                </a>
              </div>

              <div className="move-social-item">
                <a href="https://t.me/crypgptcommunity" target="_blank" rel="noopener noreferrer">
                  <img src={moveIcon3} alt="Telegram" />
                </a>
              </div>

              <div className="move-social-item">
                <a href="https://medium.com/@crypgpt_token" target="_blank" rel="noopener noreferrer">
                  <img src={moveIcon4} alt="Medium" />
                </a>
              </div>
            </div>

            <button className="move-primary-btn">Join Now ↗</button>
          </div>
        </div>

        {/* Card 2: Video (Center - Normal Animation) */}
        <div className="move-glass-card move-video-node">
          <div className="move-border-animator"></div>
          <div className="move-video-inner-frame">
            <video autoPlay loop muted playsInline className="move-background-vid">
              <source src={movementVideo} type="video/mp4" />
            </video>
            <div className="move-content-overlay">
              <div className="move-indicator-circle">↗</div>
              <h3 className="move-video-caption"><span className="move-accent">CRYPGPT</span> ECOSYSTEM JOURNEY</h3>
            </div>
          </div>
        </div>

        {/* Card 3: Solutions (Reverse Animated Border) */}
        <div className="move-glass-card move-border-card">
          <div className="move-border-animator move-reverse"></div>
          <div className="move-card-inner">
            <h2 className="move-title-text">OUR CORE <br /><span className="move-solution">SOLUTIONS</span></h2>

            <div className="move-pill-container">
              <div className="move-pill-row"><span className="move-pill-item">GPT Exchange</span></div>
              <div className="move-pill-row move-end"><span className="move-pill-item">Staking</span></div>
              <div className="move-pill-row"><span className="move-pill-item">CrypGateWays</span></div>
              <div className="move-pill-row move-end"><span className="move-pill-item">AI Chatbot</span></div>
            </div>

            <div className="move-scroll-dock">
              <div className="move-scroll-mouse">
                <i className="fa-solid fa-angles-down move-icon-anim"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MovementSection;