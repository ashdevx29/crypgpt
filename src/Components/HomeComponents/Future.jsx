import React, { useEffect, useRef } from 'react';
import '../../Styles/Future.css';
import frame from '../../assets/future/frame.png';
import one from '../../assets/future/frameone.mp4';
import two from '../../assets/future/frametwo.mp4';
import three from '../../assets/future/framethree.mp4';
import ai from '../../assets/future/ai.png';
import crypto from '../../assets/future/crypto.png';
const SmartCrypto = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const startSequence = () => {
      if (videoRefs[0].current) videoRefs[0].current.play();

      setTimeout(() => {
        if (videoRefs[2].current) videoRefs[2].current.play();
      }, 800);

      setTimeout(() => {
        if (videoRefs[1].current) videoRefs[1].current.play();
      }, 1600);
    };

    startSequence();
  }, []);

  const cardData = [
    { id: 1, video: one, className: 'vframe-first' },
    { id: 2, video: two, className: 'vframe-second' },
    { id: 3, video: three, className: 'vframe-third' }
  ];

  return (
    <section className="smart-crypto-section">
      <div className="crypto-header">
        <div className="header-left">
          <p>
            AI transforming the way the world trades,
            invests, and secures digital assets.
          </p>
        </div>

        <div className="header-right">
          <h2 className="crypto-title">
            <span className="title-top">SMART CRYPTO</span>
            <span className="highlight title-bottom">FUTURE</span>
          </h2>
        </div>
      </div>
      {/* <div className="crypto-header">
        <div className="header-left">
          <p>AI transforming the way the world trades, invests, and secures digital assets.</p>
        </div>
        <div className="header-right">
          <h2>SMART CRYPTO <br /> <span className="highlight">FUTURE</span></h2>
        </div>
      </div> */}

      <div className="crypto-grid">
        {cardData.map((card, index) => (
          <div key={card.id} className={`hud-card-container ${card.className}`}>
            <img src={frame} className="hud-frame" alt="frame" />

            <div className="video-content">
              <video
                ref={videoRefs[index]}
                muted
                loop
                playsInline
                className="cube-video"
              >
                <source src={card.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>

      <div className="crypto-footer">
        <div className="footer-left">
          <span><img src={ai} alt="AI Icon" /> <p>Advanced AI</p></span>
          <span><img src={crypto} alt="crypto" /><p>Crypto Network</p></span>
        </div>
        {/* <button className="learn-more-btn">Learn More →</button> */}
        <div className="footer-right">
          <p>Predictive Analytics</p>
          <p className="highlight-sub">Automated Strategies</p>
        </div>
      </div>
    </section>
  );
};

export default SmartCrypto;