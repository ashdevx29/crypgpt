import React from 'react';
import '../../Styles/Staking.css';
import right from '../../assets/staking/right.mp4';

const StakingSection = () => {
  return (
    <section className="cgpt-full-wrapper">
      <div className="cgpt-full-container">
        
        {/* LEFT CONTENT AREA */}
        <div className="cgpt-full-hero">
          <h1 className="cgpt-full-hero__title">
            Stake. Earn. Scale — <br />
            <span className="cgpt-full-hero__accent">Powered by CrypGPT AI.</span>
          </h1>
          
          <p className="cgpt-full-hero__desc">
            CrypGPT Staking lets you lock your tokens to earn AI-powered 
            intelligent rewards. Generate passive income while supporting 
            ecosystem growth and network stability.
          </p>

          {/* LIST WITH YELLOW DOTS */}
          <ul className="cgpt-full-hero__list">
            <li>Flexible & Locked Staking Pools</li>
            <li>AI-Optimized Reward Distribution</li>
            <li>Real-Time Reward Tracking Dashboard</li>
            <li>Tier-Based APY Multipliers</li>
            <li>Secure Smart Contract Infrastructure</li>
          </ul>

          <button className="cgpt-full-hero__btn">
            Start Staking Now <span className="cgpt-full-hero__arrow">→</span>
          </button>
        </div>

        {/* RIGHT SIDE: HUD WITH BLACK FILL & VIDEO */}
        <div className="cgpt-full-hud">
          <div className="cgpt-full-hud__relative">
            <svg width="729" height="393" viewBox="0 0 729 393" fill="none" xmlns="http://www.w3.org/2000/svg" className="cgpt-hud-svg-main">
              
              {/* 1. Black Background Fill (Main Shape) */}
              <path d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z" fill="black"/>

              {/* 2. Video Viewport via ForeignObject */}
              <foreignObject x="45" y="45" width="640" height="300">
                <div className="hud-video-container" xmlns="http://www.w3.org/1999/xhtml">
                  <video autoPlay muted loop playsInline className="hud-video">
                    <source src={right} type="video/mp4" />
                  </video>
                </div>
              </foreignObject>

              {/* 3. Your Exact SVG Borders & Decoration */}
              <path d="M465.25 15.2946L505.571 15.2946L522.286 1L702.639 1L728.001 36.4899V108.456" stroke="url(#paint0_linear_2_3)" strokeWidth="2"/>
              <path d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z" stroke="white" strokeOpacity="0.2"/>
              <path d="M1 196.805L1 361.358L28.9443 391.999H103.463" stroke="url(#paint1_linear_2_3)" strokeWidth="2"/>
              <path d="M196.791 11.4686L203.385 11.4686L214.037 23.2986L207.443 23.2986L196.791 11.4686Z" fill="url(#paint2_linear_2_3)"/>
              <path d="M558.844 370.515H565.235L575.558 380.667H569.167L558.844 370.515Z" fill="url(#paint3_linear_2_3)"/>
              
              <defs>
                <linearGradient id="paint0_linear_2_3" x1="596.625" y1="1" x2="596.625" y2="108.456" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803"/><stop offset="1" stopColor="#E5AB24"/></linearGradient>
                <linearGradient id="paint1_linear_2_3" x1="52.2313" y1="196.805" x2="52.2313" y2="391.999" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803"/><stop offset="1" stopColor="#E5AB24"/></linearGradient>
                <linearGradient id="paint2_linear_2_3" x1="205.414" y1="11.4686" x2="205.414" y2="23.2986" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803"/><stop offset="1" stopColor="#E5AB24"/></linearGradient>
                <linearGradient id="paint3_linear_2_3" x1="567.201" y1="370.515" x2="567.201" y2="380.667" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803"/><stop offset="1" stopColor="#E5AB24"/></linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StakingSection;