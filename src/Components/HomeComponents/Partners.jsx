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

import apspace from "../../assets/partners/partner/APSPACE 1.png";
import blofin from "../../assets/partners/partner/BloFin 1.png";
import coinscope from "../../assets/partners/partner//Coinscope 1.png";
import blockspot from "../../assets/partners/partner/cropped-blockspot-logo-white.png 1.png";
import dex from "../../assets/partners/partner/Dex 1.png";
import dextool from "../../assets/partners/partner/dextools_logo_full_dark 1.png";
import floz from "../../assets/partners/partner/Flooz 1.png";
import gechotarminal from "../../assets/partners/partner/geckoterminal 1.png";
import gemfider from "../../assets/partners/partner/Group 1321315828.png";
import dexguru from "../../assets/partners/partner/Group 1321315849.png";
import mycoinvote from "../../assets/partners/partner/Group 1321315850.png";
import pumpfun from "../../assets/partners/partner/Group 1321315851.png";
import poocoin from "../../assets/partners/partner/Group 1321315852.png";
import livecoinwatch from "../../assets/partners/partner/images 2.png";
import coingem from "../../assets/partners/partner/logo.85f464b4 1.png";
import honeypot from "../../assets/partners/partner/Mask group.png";


const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState('EXCHANGES');

  const partnersData = {
    EXCHANGES: [
      { id: 1, img: one, url: "https://dex.coinmarketcap.com/token/bsc/0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb/" },
      { id: 2, img: two, url: "https://www.coingecko.com/en/coins/crypgpt" },
      { id: 3, img: four, url: "https://www.mexc.com/exchange/CRYPGPT_USDT" },
      { id: 4, img: three, url: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B&chain=bsc" },
      { id: 5, img: fourr, url: "https://phantom.com/tokens/base/0xd04519aee0128f2c1407b88096e6c8b0d5980f84" },
      { id: 6, img: apspace, url: "https://apespace.io/bsc/0x55a209722ebb99c2f42befc5147c022b9b7cc83d" },
      { id: 7, img: blofin, url: "https://blofin.com/spot/en/CRYPGPT-USDT" },
      { id: 8, img: coinscope, url: "https://www.coinscope.co/coin/crypgpt" },
      { id: 9, img: blockspot, url: "https://blockspot.io/coin/crypgpt-token/" },
      { id: 10, img: dex, url: "https://dexscreener.com/bsc/0x077591ba61d762393f003f77dc93e001db80d130" },
      { id: 11, img: dextool, url: "https://www.dextools.io/app/bnb/pair-explorer/0x077591ba61d762393f003f77dc93e001db80d130?t=1760359770143" },
      { id: 12, img: floz, url: "https://flooz.xyz/ai" },
      { id: 13, img: gechotarminal, url: "https://www.geckoterminal.com/bsc/pools/0x077591ba61d762393f003f77dc93e001db80d130" },
      { id: 14, img: gemfider, url: "https://gemfinder.cc/promote" },
      { id: 15, img: dexguru, url: "https://dex.guru/token/bsc/0xe0ae52e75b38b605e9c879a570ee1e7bcc66254b" },
      { id: 16, img: mycoinvote, url: "" },
      { id: 17, img: pumpfun, url: "" },
      { id: 18, img: poocoin, url: "https://poocoin.app/tokens/0xe0ae52e75b38b605e9c879a570ee1e7bcc66254b" },
      { id: 19, img: livecoinwatch, url: "https://www.livecoinwatch.com/price/CrypGPT-___CGPT" },
      { id: 20, img: coingem, url: "https://coingem.com/binance/crypgpt" },
      { id: 21, img: honeypot, url: "https://honeypot.is/?address=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B" },
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