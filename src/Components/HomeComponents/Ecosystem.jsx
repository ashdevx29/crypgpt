import React, { useState } from 'react'; // Added useState import
import '../../Styles/Ecosystem.css';
import one from '../../assets/ecosystem/one.png';
import two from '../../assets/ecosystem/two.jpg';
import three from '../../assets/ecosystem/three.png';
import first from "../../assets/ecosystem/one.mp4";
import second from "../../assets/ecosystem/two.mp4";
import third from "../../assets/ecosystem/three.mp4";

const Ecosystem = () => {
  const options = ['CRYPGPT AI', 'DECENTRALIZED CRYPTO', 'MEETS'];
  const [activeOption, setActiveOption] = useState(options[0]);

  const videoData = {
    'CRYPGPT AI': first,
    'DECENTRALIZED CRYPTO': second,
    'MEETS': third
  };

  return (
    /* 1. Added Fragment (<>) to wrap the two main sections */
    <>
      <div className="eco-wrapper">
        <div className="eco-container">
          <header className="eco-header">
            <div className="eco-top-row">
              <p className="eco-tagline anim-fade-in">CRYPGPT AI ECOSYSTEM</p>
              <h1 className="title-ai anim-title-ai">AI SMART</h1>
            </div>
            <div className="eco-title-group">
              <div className="eco-mid-section anim-fade-up">
                <div className="eco-arrow-container">
                  <svg width="100" height="20" viewBox="0 0 100 20">
                    <path 
                      className="path-draw" 
                      d="M0 10 H90 M90 10 L82 2 M90 10 L82 18" 
                      stroke="#f0b90b" 
                      strokeWidth="1.5" 
                      fill="none" 
                    />
                  </svg>
                </div>

                <div className="eco-pill float-anim">
                  <div className="avatar-stack">
                    <div className="avatar-img"><img src={one} alt="Avatar 1" className='avatar-img' /></div>
                    <div className="avatar-img av-2"><img src={two} alt="Avatar 2" className='avatar-imgtwo' /></div>
                    <div className="avatar-img av-3"><img src={three} alt="Avatar 3" className='avatar-imgthree' /></div>
                  </div>
                  <div className="pill-text">
                    <span className="pill-small">FUTURE OF</span>
                    <span className="pill-bold">CRYPTO</span>
                  </div>
                </div>
              </div>
              <h1 className="title-crypto anim-title-crypto">CRYPTO ERA</h1>
            </div>
          </header>

          <footer className="eco-bottom anim-fade-up-delayed">
            <div className="eco-description">
              <p>
                Unlock smarter trading, secure transactions, and 
                AI-driven insights designed to maximize 
                performance and growth in Web3.
              </p>
              <a href="/" className="explore-btn">
                 More <span>→</span>
              </a>
            </div>

            <div className="eco-stats-card pulse-glow">
              <div className="stats-main">
                <p className="stats-label">Success Accuracy</p>
                <h2 className="stats-value">99.9%</h2>
                <p className="stats-sub">+0.7% Weekly Growth</p>
              </div>
              <div className="stats-tags">
                <span className="eco-tag">AI Innovation</span>
                <span className="eco-tag">Scalable Growth</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="video-container">
        <div className="video-panel">
          <video 
            key={activeOption} 
            autoPlay 
            muted 
            loop 
            className="video-element"
          >
            <source src={videoData[activeOption]} type="video/mp4" />
          </video>

          {/* <div className="video-play-overlay">
            <div className="play-blur-circle">
              <div className="play-arrow"></div>
            </div>
          </div> */}
        </div>

        <div className="video-nav-bar">
          {options.map((opt) => (
            <div 
              key={opt}
              className={`video-nav-item ${activeOption === opt ? 'active' : ''}`}
              onClick={() => setActiveOption(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ecosystem;