import React from 'react';
import '../../Styles/Partnersmarquee.css';
import one from "../../assets/partners/svg-partner/cmc.svg";
import two from "../../assets/partners/svg-partner/coingecko.svg";
import three from "../../assets/partners/svg-partner/mexc.svg";
import four from "../../assets/partners/svg-partner/pancakeswap.svg";
import five from "../../assets/partners/svg-partner/phantom.svg";

const Partnersmarquee = () => {

  // Define logos with links
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
    <section className="gx-pure-image-marquee ">
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
  );
};

export default Partnersmarquee;