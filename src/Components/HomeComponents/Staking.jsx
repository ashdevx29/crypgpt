import React, { useState, useEffect } from "react";
import "../../Styles/Staking.css";

import img1 from "../../assets/staking/stake1.png";
import img2 from "../../assets/staking/stake1.png";
import img3 from "../../assets/staking/stake1.png";

const stakingData = [
  {
    heading: "CrypGPT Staking 2.0",
    description:
      "CrypGPT Staking 2.0 introduces an intelligent, next-generation staking experience powered by advanced AI algorithms, designed to deliver sustainable growth and optimized rewards while transforming passive holding into smart earning. With real-time performance analysis and automated reward optimization, users benefit from data-driven staking strategies that maximize potential returns. Built on secure, transparent, and scalable infrastructure, Staking 2.0 strengthens long-term value creation within the CrypGPT ecosystem.",
    points: [
      {
        title: "AI-Optimized Reward Engine –",
        text: "Smart algorithms maximize sustainable staking returns.",
      },
      {
        title: "Flexible & Locked Pools –",
        text: "Choose liquidity freedom or boosted long-term APY.",
      },
      {
        title: "Secure & Transparent Infrastructure –",
        text: "Built on audited smart contracts for maximum asset protection.",
      },
    ],
    image: img1,
  },
  {
    heading: "CrypGPT Exchange ",
    description:
      "CrypGPT is launching its own next-generation crypto exchange, built to deliver high-speed trading, deep liquidity, and AI-powered market intelligence. Designed for both beginners and professional traders, our platform will offer seamless execution, advanced tools, and enterprise-grade security. This marks a major step toward building a fully independent and powerful Web3 ecosystem.",
    points: [
      {
        title: "AI-Powered Trading Engine –",
        text: " Advanced AI integration for smarter analytics, automated strategies, and optimized trade execution.",
      },
      {
        title: "High Liquidity & Low Fees –",
        text: "Deep liquidity pools with competitive trading fees to ensure smooth and efficient transactions.",
      },
      {
        title: "Secure & Scalable Infrastructure  –",
        text: " Enterprise-level security, real-time monitoring, and scalable technology for global adoption",
      },
    ],
    image: img2,
  },
  {
    heading: "Next-Generation Crypto Gateway",
    description:
      "CrypGPT is launching its own advanced crypto payment gateway, designed to enable seamless, secure, and instant digital asset transactions. Built for businesses, traders, and Web3 platforms, the gateway will simplify crypto payments while integrating AI-powered monitoring for enhanced efficiency. This innovation strengthens the CrypGPT ecosystem by connecting users, merchants, and global markets effortlessly.",
    points: [
      {
        title: "Seamless Crypto Payments –",
        text: "Fast, borderless transactions with multi-asset support for businesses and users worldwide.",
      },
      {
        title: "AI-Powered Risk Monitoring –",
        text: "Intelligent fraud detection and real-time transaction analysis for maximum security.",
      },
      {
        title: "Scalable Web3 Integration  –",
        text: " Easy API integration for platforms, merchants, and decentralized applications.",
      },
    ],
    image: img3,
  },
];

const Staking = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stakingData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = stakingData[index];

  return (
    <section className="stakev2-wrapper">
      <div className="stakev2-container">

        {/* LEFT */}
        <div className="stakev2-left fade-animation">
          <h2 className="stakev2-heading">{current.heading}</h2>

          <p className="stakev2-description">{current.description}</p>

          <div className="stakev2-points">
            {current.points.map((item, i) => (
              <p className="stakev2-line" key={i}>
                <span className="stakev2-line-title">{item.title}</span>
                {item.text}
              </p>
            ))}
          </div>

          <button className="stakev2-button">Coming Soon</button>
        </div>

        {/* RIGHT */}
        <div className="stakev2-right fade-animation">
          <img src={current.image} alt="staking visual" />
        </div>

      </div>
    </section>
  );
};

export default Staking;