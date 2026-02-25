import React from "react";
import "../../Styles/S1Hero.css";
import robot from "../../assets/hero/robott.png";
import { PiGlobeSimple } from "react-icons/pi";
import { PiLightningLight } from "react-icons/pi";
import { LuShield } from "react-icons/lu";
import { PiFireLight } from "react-icons/pi";
import { HiOutlinePlay } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import weex from "../../assets/hero/weex.png";
import mexc from "../../assets/hero/mexc.png";
import bitget from "../../assets/hero/bitget.png";



export default function Hero() {
  return (
    <section className="hero">
      <div className="bg-glow-circle"></div>
      {/* Big Background Text */}
      <div className="bg-text">CRYPGPT</div>

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="tag">
            <PiFireLight className="tag-icon" />
            <span>Crafting Intelligence</span>
          </div>

          <h2 className="hero-heading">
            POWERING THE FUTURE <br />
            WITH AI-DRIVEN <br />
            CRYPTO INTELLIGENCE
          </h2>

          <div className="hero-buttons">
            <div className="hero-buttons">
              <a
                href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy CRYPGPT
              </a>

              <a
                href="https://crypgpt-token.gitbook.io/crypgpts-token/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Whitepaper
                <span className="play-icon">
                  <HiOutlinePlay />
                </span>
              </a>
            </div>
            {/* <button className="btn-primary">
              Buy CRYPGPT
            </button>
            <button className="btn-outline">
              Whitepaper
              <span className="play-icon">
                <HiOutlinePlay />
              </span>
            </button> */}
          </div>
        </div>

        {/* ROBOT SECTION */}
        <div className="hero-image">
          <img src={robot} alt="AI Robot" />

          <div className="orbit-custom">
            <div className="orbit-rotate">

              <div className="orbit-icon icon-a">
                <PiLightningLight />
              </div>

              <div className="orbit-icon icon-b">
                <PiGlobeSimple />
              </div>

              <div className="orbit-icon icon-c">
                <LuShield />
              </div>

            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="exchange-icons">
            <div className="exchange-box">
              <img src={weex} alt="Weex" />
            </div>
            <div className="exchange-box active">
              <img src={mexc} alt="Mexc" />
            </div>
            <div className="exchange-box">
              <img src={bitget} alt="Bitget" />
            </div>
          </div>
          <p className="exchange-names">WEEX • MEXC • BITGET</p>
          <p className="exchange-sub">LISTED ON TOP EXCHANGES</p>
          <div className="stats-wrapper">
            <div className="scroll-circle">
              <MdKeyboardDoubleArrowRight />
            </div>

            <div className="divider"></div>

            <div className="stat-content">
              <h2>750K+</h2>
              <p>Community Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
