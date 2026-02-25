import React, { useState } from 'react';
import '../../Styles/Partners.css';
import one from "../../assets/partners/svg-partner/cmc.svg"
import two from "../../assets/partners/svg-partner/coingecko.svg"
import three from "../../assets/partners/svg-partner/pancakeswap.svg"
import four from "../../assets/partners/svg-partner/mexc.svg"
import onee from "../../assets/partners/svg-partner/cmc.svg"
import twoo from "../../assets/partners/svg-partner/anewsweek.svg"
import threee from "../../assets/partners/svg-partner/active.svg"
import fourr from "../../assets/partners/svg-partner/phantom.svg"
import fivee from "../../assets/partners/svg-partner/edito.svg"


const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState('EXCHANGES');

  const partnersData = {
    EXCHANGES: [
      { id: 1, img: one, url: "https://dex.coinmarketcap.com/token/bsc/0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb/" },
      { id: 2, img: two, url: "https://www.coingecko.com/en/coins/crypgpt" },
      { id: 3, img: four, url: "https://www.mexc.com/exchange/CRYPGPT_USDT" },
      { id: 4, img: three, url: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B&chain=bsc" },
      { id: 5, img: fourr, url: "https://phantom.com/tokens/base/0xd04519aee0128f2c1407b88096e6c8b0d5980f84" },
    ],
    "Our Press Release": [
      { id: 1, img: onee, url: "https://coinmarketcap.com/community/articles/691c545ba8c25e535b6a6236/" },
      { id: 2, img: twoo, url: "https://anewsweek.com/crypgpt-token-now-live-on-blofin-exchange-ushering-in-the-era-of-ai-powered-crypto-trading-with-a-100000-usdt-mega-contests-launch/" },
      { id: 3, img: threee, url: "https://www.activefeatured.com/crypgpt-token-now-live-on-blofin-exchange-ushering-in-the-era-of-ai-powered-crypto-trading-with-a-100000-usdt-mega-contests-launch/" },
      { id: 4, img: fivee, url: "https://www.editionbiz.com/crypgpt-token-now-live-on-blofin-exchange-ushering-in-the-era-of-ai-powered-crypto-trading-with-a-100000-usdt-mega-contests-launch/" },
    ],
  };

  const tabs = ["EXCHANGES", "Our Press Release"];

  return (
    <div className="container">
      <div className="header-wrapper">
        {/* Left SVG */}
        <div className="svg-line">
          <svg width="274" height="80" viewBox="0 0 274 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H91.8727L166.055 92H273" stroke="url(#paint0_linear_482_1630)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_482_1630" x1="273" y1="92.6842" x2="-2.50366" y2="24.7978" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF803" />
                <stop offset="1" stopColor="#110E0D" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tabs Filter */}
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right SVG */}
        <div className="svg-line">
          <svg width="278" height="80" viewBox="0 0 278 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M277 1H184.791L109.518 92H1" stroke="url(#paint0_linear_482_1631)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_482_1631" x1="0.999987" y1="92.6842" x2="280.082" y2="22.9048" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF803" />
                <stop offset="1" stopColor="#110E0D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid-container">
        {partnersData[activeTab].map((item) => (
          <div key={item.id} className="exchange-card">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                alt="partner"
                className="partner-img"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;