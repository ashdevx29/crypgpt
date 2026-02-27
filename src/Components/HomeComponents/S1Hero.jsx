import React from "react";
import "../../Styles/S1Hero.css";
import robot from "../../assets/hero/robott.png";
import { PiGlobeSimple } from "react-icons/pi";
import { TbTopologyStar } from "react-icons/tb";
import { RiRobot3Line } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
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
            <span>CrypGPT Ecosystem</span>
          </div>

          <h2 className="hero-heading">
            Unlock the Future of <br /> Web3 with the CrypGPT <br /> <span>Ecosystem</span>
          </h2>

          <div className="hero-buttons">
            <div className="hero-buttons">
              <a
                href="https://blofin.com/spot/CRYPGPT-USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy CRYPGPT
              </a>

              <a
                href="https://crypgpt-9x2fp4n.gamma.site/"
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
          </div>
        </div>

        {/* ROBOT SECTION */}
        <div className="hero-image">
          <img src={robot} alt="AI Robot" />

          <div className="orbit-custom">
            <div className="orbit-rotate">

              <div className="orbit-icon icon-a">
                <TbTopologyStar />
              </div>

              <div className="orbit-icon icon-b">
                <RiRobot3Line />
              </div>

              <div className="orbit-icon icon-c">
                <TbExchange />
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
          <p className="exchange-names">Weex | MEXC | blofin</p>
          <p className="exchange-sub">LISTED ON TOP EXCHANGES</p>
          <div className="stats-wrapper">
            {/* <div className="scroll-circle">
              <MdKeyboardDoubleArrowRight />
            </div> */}

            <div className="dividerr"></div>

            <div className="stat-content">
              <h2>160K+</h2>
              <p>Community Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
