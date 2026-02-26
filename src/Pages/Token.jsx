import React from "react";
import "../Styles/Token.css";
import robotImg from "../assets/Token/robot1.png";
import boxSvg from "../assets/Token/token1.svg";
import Partnersmarquee from "../Components/HomeComponents/Partnersmarquee";
import '../Styles/Partnersmarquee.css';
import one from "../assets/partners/svg-partner/cmc.svg";
import two from "../assets/partners/svg-partner/coingecko.svg";
import three from "../assets/partners/svg-partner/mexc.svg";
import four from "../assets/partners/svg-partner/pancakeswap.svg";
import five from "../assets/partners/svg-partner/phantom.svg";
import distImg from "../assets/Token/dist.png";
import LockInformation from "../Components/HomeComponents/LockInformation";   

import blofin from "../assets/partners/partner/BloFin 1.png";
import coinscope from "../assets/partners/partner//Coinscope 1.png";
import blockspot from "../assets/partners/partner/cropped-blockspot-logo-white.png 1.png";

import tokenImg  from "../assets/Token/coin.png";
const Token = () => {
      const baseLogos = [
        { img: one, link: "https://dex.coinmarketcap.com/token/bsc/0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb/" },
        { img: two, link: "https://www.coingecko.com/en/coins/crypgpt" },
        { img: three, link: "https://www.mexc.com/exchange/CRYPGPT_USDT" },
            { img: four, link: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B&chain=bsc" },
        { img: five, link: "https://phantom.com/tokens/base/0xd04519aee0128f2c1407b88096e6c8b0d5980f84" },
         { img: blofin, link: "https://blofin.com/spot/en/CRYPGPT-USDT" },
            { img: coinscope, link: "https://www.coinscope.co/coin/crypgpt" },
            { img: blockspot, link: "https://blockspot.io/coin/crypgpt-token/" },

      ];
    
      // Duplicate for smooth infinite marquee
      const logoSources = [...baseLogos, ...baseLogos];
  return (
    <>
    <section className="token-section">
      <h1 className="bg-text bg-text-token">TOKENOMICS</h1>

      <div className="token-container">

        {/* LEFT SIDE */}
        <div className="token-left">

          <div className="token-box left-1">
            <img src={boxSvg} alt="" className="box-svg" />
            <div className="box-content">
              <span className="token-name">Token</span>
              <span className="token-value">CrypGPT</span>
            </div>
          </div>

          <div className="token-box left-2">
            <img src={boxSvg} alt="" className="box-svg" />
            <div className="box-content">
              <span className="token-name">Supply</span>
              <span className="token-value">850 Million</span>
            </div>
          </div>

          <div className="token-box left-3">
            <img src={boxSvg} alt="" className="box-svg" />
            <div className="box-content">
              <span className="token-name">Decimal</span>
              <span className="token-value">18</span>
            </div>
          </div>

        </div>

        {/* CENTER IMAGE */}
        <div className="token-center">
          <img src={robotImg} alt="robot" />
        </div>

        {/* RIGHT SIDE */}
        <div className="token-right">

          <div className="token-box right-1">
            <img src={boxSvg} alt="" className="box-svg" />
            <div className="box-content">
              <span className="token-name">Symbol</span>
              <span className="token-value">CRYPGPT</span>
            </div>
          </div>

          <div className="token-box right-2">
            <img src={boxSvg} alt="" className="box-svg" />
            <div className="box-content">
              <span className="token-name">Network</span>
              <span className="token-value">BEP-20</span>
            </div>
          </div>

        </div>

      </div>
    </section>

 <section className="gx-pure-image-marquee token-marquee">
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


 <section className="token-dist">
      <h2 className="token-dist-heading">
        Token Distribution
      </h2>
      <div className="token-dist-image">
        <img src={distImg} alt="Token Distribution" />
      </div>
    </section>

<section className="token-inside-wrapper">
      <div className="token-inside-container">

        <svg
          viewBox="0 0 729 393"
          xmlns="http://www.w3.org/2000/svg"
          className="token-inside-svg"
        >

          {/* BLACK FRAME SHAPE */}
          <path
            d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z"
            fill="black"
          />

          {/* BORDER */}
          <path
            d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z"
            stroke="white"
            strokeOpacity="0.2"
          />





           {/* 3. Your Exact SVG Borders & Decoration */}
              <path d="M465.25 15.2946L505.571 15.2946L522.286 1L702.639 1L728.001 36.4899V108.456" stroke="url(#paint0_linear_2_3)" strokeWidth="2" />
              <path d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z" stroke="white" strokeOpacity="0.2" />
              <path d="M1 196.805L1 361.358L28.9443 391.999H103.463" stroke="url(#paint1_linear_2_3)" strokeWidth="2" />

              {/* <path d="M196.791 11.4686L203.385 11.4686L214.037 23.2986L207.443 23.2986L196.791 11.4686Z" fill="url(#paint2_linear_2_3)" /> */}
              {/* SLASH 1 */}
              <path d="M196.791 11.4686L203.385 11.4686L214.037 23.2986L207.443 23.2986L196.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 2 */}
              <path d="M210.791 11.4686L217.385 11.4686L228.037 23.2986L221.443 23.2986L210.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 3 */}
              <path d="M224.791 11.4686L231.385 11.4686L242.037 23.2986L235.443 23.2986L224.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 4 */}
              <path d="M238.791 11.4686L245.385 11.4686L256.037 23.2986L249.443 23.2986L238.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 5 */}
              <path d="M252.791 11.4686L259.385 11.4686L270.037 23.2986L263.443 23.2986L252.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 1 */}
              <path d="M558.844 370.515H565.235L575.558 380.667H569.167L558.844 370.515Z" fill="url(#paint3_linear_2_3)" />
              {/* SLASH 2 */}
              <path d="M572.844 370.515H579.235L589.558 380.667H583.167L572.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 3 */}
              <path d="M586.844 370.515H593.235L603.558 380.667H597.167L586.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 4 */}
              <path d="M600.844 370.515H607.235L617.558 380.667H611.167L600.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 5 */}
              <path d="M544.844 370.515H551.235L561.558 380.667H555.167L544.844 370.515Z" fill="url(#paint3_linear_2_3)" />
              <path d="M614.844 370.515H621.235L631.558 380.667H625.167L614.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              <defs>
                <linearGradient id="paint0_linear_2_3" x1="596.625" y1="1" x2="596.625" y2="108.456" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint1_linear_2_3" x1="52.2313" y1="196.805" x2="52.2313" y2="391.999" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint2_linear_2_3" x1="205.414" y1="11.4686" x2="205.414" y2="23.2986" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint3_linear_2_3" x1="567.201" y1="370.515" x2="567.201" y2="380.667" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
              </defs>

          {/* FULL CONTENT INSIDE SVG */}
          <foreignObject x="65" y="60" width="600" height="290">
            <div
              className="token-inside-content"
              xmlns="http://www.w3.org/1999/xhtml"
            >

              {/* LEFT SIDE */}
              <div className="token-inside-left">
                <h2>
                  ABOUT <span>TOKEN</span>
                </h2>

                <p>
                The total token supply is 1 billion, allocated to ensure balanced growth and sustainability.
                 20% is dedicated each to ecosystem development, staking & rewards,
                  and token burn, while 10% each goes to marketing, team & advisors, 
                  and investors. The remaining 10% is split between the AI Contributor DAO (5%)
                   and reserves (5%) to support innovation and long-term stability.
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="token-inside-right">
                <img src={tokenImg} alt="token" />
              </div>

            </div>
          </foreignObject>


           

        </svg>

      </div>
    </section>



    <LockInformation />
    </>
  );
  
};

export default Token;