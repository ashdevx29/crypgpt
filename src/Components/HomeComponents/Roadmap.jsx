import React, { useState, useEffect } from 'react';
import '../../Styles/Roadmap.css';
import phase1 from "../../assets/roadmap/phase1.png";
import phase2 from "../../assets/roadmap/phase2.png";
import phase3 from "../../assets/roadmap/pre-two.png";

const CgptStrategy = () => {
  const roadmap = [
    // 2026 DATA
    {
      year: "2026",
      heroTitle: { line1: "Foundation of", line2: "Intelligence" },
      phase: "Q1 2026",
      title: "Genesis Phase",
      desc: ["Official Token Launch", "Website & Whitepaper Release", "Global Community Activation", "Listings on CoinMarketCap, CoinGecko, Coin360 & CoinBubble"],
      // footer: "Laying the digital cornerstone.",
      thumb: phase1
    },
    {
      year: "2026",
      heroTitle: { line1: "Foundation of", line2: "Intelligence" },
      phase: "Q2 2026",
      title: "Expansion Protocol",
      desc: ["Token Launch on Blofin Exchange", "AI Trading Signal Assistant Launch", "Telegram AI Bot Integration", "Strategic Global Partnerships", "Tier-2 Exchange Listing", "Cyberscope Smart Contract Audit"],
      // footer: "Security. Utility. Momentum.",
      thumb: phase2
    },
    {
      year: "2026",
      heroTitle: { line1: "Foundation of", line2: "Intelligence" },
      phase: "Q3 2026",
      title: "Intelligence Acceleration",
      desc: ["AI Portfolio Management System", "Multi-Language AI Chatbot (Beta)", "CertiK Smart Contract Audit", "Tier-1 Exchange Listing"],
      // footer: "Institutional-grade credibility.",
      thumb: phase3
    },
    {
      year: "2026",
      heroTitle: { line1: "Foundation of", line2: "Intelligence" },
      phase: "Q4 2026",
      title: "Infrastructure Domination",
      desc: ["CrypGPT Crypto Card (Fiat + Crypto Payments)", "AI-Powered Fraud Detection System (Live)", "AI-Based Centralized Exchange Launch"],
      // footer: "From token to financial network.",
      thumb: phase1
    },
    // 2027 DATA
    {
      year: "2027",
      heroTitle: { line1: "Ecosystem ", line2: "Supremacy" },
      phase: "Q1 2027",
      title: "Behavioral Economy Layer",
      desc: ["Move-to-Earn + Chat-to-Earn Rollout", "Decentralized Knowledge Hub (Alpha)", "Large-Scale AI Marketplace Launch"],
      // footer: "Expanding the AI frontier.",
      thumb: phase2
    },
    {
      year: "2027",
      heroTitle: { line1: "Ecosystem", line2: "Supremacy" },
      phase: "Q2 2027",
      title: "Mass Adoption Era",
      desc: ["Full Ecosystem Expansion", "Top-Tier Global Exchange Listings", "1M+ Active Users in the CrypGPT Ecosystem"],
      // footer: "The future is autonomous.",
      thumb: phase3
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % roadmap.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? roadmap.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const active = roadmap[current];
  const upcoming = roadmap[(current + 1) % roadmap.length];
  const further = roadmap[(current + 2) % roadmap.length];

  return (
    <div className="cg-strategy-section">
      <div className="cg-top-header">
        <h2 className="cg-hero-title">
          <span className="title-line line1">
            {active.heroTitle.line1}
          </span>

          <span className="title-line line2">
            {active.heroTitle.line2}
          </span>
        </h2>
        {/* <h2 className="cg-hero-title">
          {active.heroTitle.line1}<br />
          <span>{active.heroTitle.line2}</span>
        </h2> */}
        <div className="cg-info-pill">
          <p className="cg-info-label">HOW CRYPGPT DRIVES RESULTS</p>
          <button className="cg-learn-btn">LEARN MORE ↗</button>
        </div>
      </div>

      <div className="cg-main-grid">
        <div className="cg-left-nav">
          <h2 className="cg-phase-display">Phase {active.phase}</h2>
          <div className="cg-nav-group">
            <button onClick={prevSlide} className="cg-arrow-btn">〈</button>
            <button onClick={nextSlide} className="cg-arrow-btn">〉</button>
          </div>
        </div>

        <div className="cg-center-frame">
          <svg viewBox="0 0 355 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud-v-svg">
            <path d="M344.5 117.283L331.648 125.715L331.422 125.864L331.422 315.995L331.612 316.144L344.5 326.324V427.329L317.592 440.499L35.5366 440.499L11.7407 427.228V387.329L25.772 375.857L25.9556 375.708L25.9556 71.2397L25.6987 71.0972L11.7407 63.3501V23.4858L32.2495 10.2368L316.442 10.2368L344.5 25.6577V117.283Z" fill="#1E1715" stroke="white" strokeOpacity="0.3" />
            <path d="M177.224 1L28.6629 1L0.999764 18.1915V64.0354" stroke="url(#paint1_v)" strokeWidth="2" />
            <path d="M341.094 286.608V311.414L354 321.697L354 432.651L321.959 448.254H256.987" stroke="url(#paint0_v)" strokeWidth="2" />
            {/* <path d="M344.549 121.452V125.508L333.869 132.062V128.005L344.549 121.452Z" fill="url(#paint2_v)" /> */}
            {/* Right Side Decorative HUD Stripes */}
            <path d="M344.549 121.452V125.508L333.869 132.062V128.005L344.549 121.452Z" fill="url(#paint2_v)" />

            <path d="M344.549 133.452V137.508L333.869 144.062V140.005L344.549 133.452Z" fill="url(#paint2_v)" />

            <path d="M344.549 145.452V149.508L333.869 156.062V152.005L344.549 145.452Z" fill="url(#paint2_v)" />

            <path d="M344.549 157.452V161.508L333.869 168.062V164.005L344.549 157.452Z" fill="url(#paint2_v)" />

            <path d="M344.549 169.452V173.508L333.869 180.062V176.005L344.549 169.452Z" fill="url(#paint2_v)" />




            <path d="M6 325 L20 318 L20 321 L6 329 Z" fill="url(#paint2_v)" />
            <path d="M6 337 L20 329 L20 333 L6 341 Z" fill="url(#paint2_v)" />
            <path d="M6 349 L20 341 L20 345 L6 353 Z" fill="url(#paint2_v)" />
            <path d="M6 361 L20 353 L20 357 L6 365 Z" fill="url(#paint2_v)" />
            <path d="M6 373 L20 365 L20 369 L6 377 Z" fill="url(#paint2_v)" />


            <foreignObject x="25" y="30" width="295" height="400">
              <div className="v-hud-inner" xmlns="http://www.w3.org/1999/xhtml">
                <div className="v-hud-image-box">
                  <img src={active.thumb} alt={active.title} />
                  <span className="v-hud-tag">{active.title.toUpperCase()}</span>
                </div>
                <h3 className="v-hud-title">{active.title}</h3>

                {/* Button dynamic Q content */}
                <ul className="v-hud-desc-list">
                  {active.desc.map((item, index) => (
                    <li key={index} className="v-hud-li">{item}</li>
                  ))}
                </ul>
                <button className="v-hud-btn">{active.phase} </button>

                <p className="v-hud-footer-desc">{active.footer}</p>
              </div>
            </foreignObject>

            <defs>
              <linearGradient id="paint0_v" x1="354" y1="367.431" x2="256.987" y2="367.431" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
              <linearGradient id="paint1_v" x1="177.224" y1="32.5177" x2="0.999756" y2="32.5177" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
              <linearGradient id="paint2_v" x1="344.549" y1="126.757" x2="333.869" y2="126.757" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>



            </defs>
          </svg>
        </div>

        <div className="cg-right-preview">
          <div className="preview-stack">
            <img src={further.thumb} className="pre-img back" alt="future" />
            <img src={upcoming.thumb} className="pre-img front" alt="next" />
          </div>
          <div className="next-info">
            <div className="next-label">Phase {upcoming.phase}</div>
            <h4 className="next-title">{upcoming.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CgptStrategy;