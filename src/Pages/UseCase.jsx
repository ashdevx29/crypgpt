import React from "react";
import { useState } from "react";
import "../Styles/UseCase.css";
import robotImg1 from "../assets/UseCase/usecase1.png"; 
import robotImg2 from "../assets/UseCase/usecase2.png";
import robotImg3 from "../assets/UseCase/usecase3.png";   
import bgImg from "../assets/UseCase/usecase1.png";     
import { FiZap } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";   

import '../Styles/Partnersmarquee.css';
import one from "../assets/partners/svg-partner/cmc.svg";
import two from "../assets/partners/svg-partner/coingecko.svg";
import three from "../assets/partners/svg-partner/mexc.svg";
import four from "../assets/partners/svg-partner/pancakeswap.svg";
import five from "../assets/partners/svg-partner/phantom.svg";
import MovementSection from "../Components/HomeComponents/MovementSection";


const useCaseData = [
  {
    topLine: "CRYPTO + GENERAL",
    bottomLine: "ASSISTANCE",
    description:
      "The AI Chatbot serves as a smart assistant designed to simplify both crypto-related and general queries. It provides real-time responses, market insights, portfolio updates, and day-to-day assistance — ensuring a smooth and interactive user experience.",
    image: robotImg1,
    bgImage: robotImg1,
    features: [
      {
        title: "REAL-TIME RESPONSES",
        desc: "Delivers instant and accurate answers to both crypto and general questions, enhancing user engagement and efficiency.",
      },
      {
        title: "MARKET INSIGHTS",
        desc: "Provides timely updates and valuable information to help users understand market movements and trends.",
      },
      {
        title: "PORTFOLIO UPDATES",
        desc: "Keeps users informed about their crypto holdings with consistent tracking and performance summaries.",

      },
      {
        title: "DAY-TO-DAY ASSISTANCE",
        desc: "Supports everyday queries beyond crypto, creating a seamless and intelligent interactive experience.",

      },
    ],
  },

  {
    topLine: "PORTFOLIO " ,
    bottomLine: "MANAGEMENT",
    description:
      "AI Crypto Portfolio Management helps users track, analyze, and optimize their digital assets with ease. It delivers real-time insights, continuous performance monitoring, and intelligent risk analysis to support smarter and more confident investment decisions.",
    image: robotImg2,
    bgImage: robotImg2,
    features: [
      {
        title: "REAL-TIME INSIGHTS",
        desc: "Access live portfolio data with instant updates on asset value, allocation, and market movements.",
      },
      {
        title: " PERFORMANCE MONITORING",
        desc: "Track gains, losses, and historical performance trends to evaluate portfolio growth effectively.",
      },
      {
        title: "RISK ANALYSIS",
        desc: "Identify potential risks with AI-driven evaluation and smarter asset distribution insights.",
      },
      {
        title: "SMART OPTIMIZATION",
        desc: "Receive intelligent recommendations to rebalance and optimize your portfolio strategy efficiently.",
      },
    ],
  },

  {
    topLine: "FOR GLOBAL PAYMENTS",
    bottomLine: "(FIAT + CRYPTO)",
    description:
      "The Crypto Card enables seamless global payments by supporting both fiat and cryptocurrency transactions. It gives users the flexibility to spend digital assets anywhere while ensuring fast, secure, and reliable processing worldwide.",
    image: robotImg3,
    bgImage: robotImg3,
    features: [
      {
        title: "GLOBAL PAYMENT ACCESS",
        desc: "Use your crypto or fiat balance for payments across international merchants and online platforms.",
      },
      {
        title: "DUAL ASSET SUPPORT",
        desc: "Seamlessly switch between cryptocurrency and traditional fiat for smooth transactions.",
      },
      {
        title: "FAST & SECURE PROCESSING",
        desc: "Experience quick transaction approvals backed by advanced security protocols.",
      },
      {
        title: " SAFE & RELIABLE SPENDING",
        desc: "Built with strong protection systems to ensure secure, hassle-free global payments.",
      },
    ],
  },
];

const UseCase = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex((prev) =>
    prev === useCaseData.length - 1 ? 0 : prev + 1
  );
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? useCaseData.length - 1 : prev - 1
  );
};


  const baseLogos = [
    { img: one, link: "https://dex.coinmarketcap.com/token/bsc/0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb/" },
    { img: two, link: "https://www.coingecko.com/en/coins/crypgpt" },
    { img: three, link: "https://www.mexc.com/exchange/CRYPGPT_USDT" },
        { img: four, link: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B&chain=bsc" },
    { img: five, link: "https://phantom.com/tokens/base/0xd04519aee0128f2c1407b88096e6c8b0d5980f84" },
  ];

  // Duplicate for smooth infinite marquee
  const logoSources = [...baseLogos, ...baseLogos];

  return (

    
    <>
    <div className="crypto-container">

      {/* LEFT BIG BACKGROUND TEXT */}
      <h1 className="bg-text1">CRYPGPT</h1>

      {/* RIGHT BLUR BACKGROUND IMAGE */}
     <div
  className="right-bg"
  style={{ backgroundImage: `url(${useCaseData[currentIndex].bgImage})` }}
></div>

      <div className="crypto-wrapper">

        {/* TOP SECTION */}
        <div className="top-section">
          <div className="left-box">
            <p>Utility-Driven Growth Strategy</p>
            <button>USECASE</button>    
          </div>

          <div className="right-heading">
  <h2>
  <span className="top-line">
    {useCaseData[currentIndex].topLine}
  </span>
  <span className="bottom-line">
    {useCaseData[currentIndex].bottomLine}
  </span>
</h2>
</div>


        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">

          {/* LEFT IMAGE */}
          <div className="image-section">
           <img src={useCaseData[currentIndex].image} alt="robot" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="content-section">


             {/* DESCRIPTION TEXT */}
 <p className="assistant-desc">
  {useCaseData[currentIndex].description}
</p>


<div className="feature-box">
  {useCaseData[currentIndex].features.map((feature, index) => (
    <div className="feature" key={index}>
      <div className="icon">
        <FiZap />
      </div>
      <h4>{feature.title}</h4>
      <p>{feature.desc}</p>
    </div>
  ))}
</div>

  {/* PAGINATION */}
 <div className="pagination">
  <button className="pagination-btn" onClick={handlePrev}>
    <FiChevronLeft />
  </button>
  <button className="pagination-btn" onClick={handleNext}>
    <FiChevronRight />
  </button>
</div>












            
          </div>

        </div>





      </div>
    </div>

<section className="gx-pure-image-marquee usecase-marquuee ">
      <div className="gx-marquee-viewport">
        <div className="gx-marquee-track">
          {[...logoSources, ...logoSources].map((item, index) => (
            <div className="gx-marquee-slot" key={index}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={item.img} 
                  alt="Partner Logo" 
                  className="gx-partner-img" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>


    <MovementSection/>
    </>
  );
};

export default UseCase;