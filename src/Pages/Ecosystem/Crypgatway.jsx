import React from "react";
import "../../Styles/Crypgatway.css";
import bgGlow from "../../assets/gatway/crypto/bg.png";
import { MdOutlineSecurity } from "react-icons/md";
import trade from "../../assets/gatway/crypto/Markets.png"
import { FaExchangeAlt } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";

import HeroSection from "../../Components/Geteway/SectionOne";
import SectionTwo from "../../Components/Geteway/SectionTwo";
import SectionThree from "../../Components/Geteway/SectionThree";
import cornerImg from "../../assets/SectionThree/corner-glow.png";
import SectionFour from "../../Components/Geteway/SectionFour";



const Crypgatways = () => {
    return (

        <>
            <div className="bg-black text-white overflow-x-hidden font-inter">

                <HeroSection />
                <SectionTwo />
                <div className="relative z-30">
                    <img
                        src={cornerImg}
                        alt="Arc"
                        className="absolute right-0 -mt-[100px] w-[800px] max-w-full max-[768px]:w-[600px] max-[300px]:w-[300px] pointer-events-none"
                    />
                </div>
                <SectionThree />
                <SectionFour />

            </div>


            <div className="crypgateway-page">
                <div className="crypgateway-container">

                    {/* ABSOLUTE BACKGROUND IMAGE */}
                    <img src={bgGlow} alt="bg-glow" className="cryp-bg" />

                    <div className="crypgateway-wrapper">

                        {/* LEFT SIDE */}
                        <div className="cryp-left">
                            <p className="cryp-sub">ACCEPT AND BILL CRYPTO</p>

                            <h2 className="cryp-heading">
                                Flexible Plans for <br />
                                Every <span>Crypto</span> Need
                            </h2>

                            <div className="cryp-desc">
                                <div className="yellow-bar"></div>
                                <p>
                                    Choose a plan that fits your business—whether you're sending invoices, accepting payments,
                                    or managing wallets. Convert crypto to fiat, or keep it in your secure wallet. All with
                                    complete transparency.
                                </p>
                            </div>

                            <div className="cryp-stats">
                                <div>
                                    <p>Experience</p>
                                    <h2>12+</h2>
                                </div>
                                <div>
                                    <p>People</p>
                                    <h2>100+</h2>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="cryp-right">

                            {/* Secure Badge */}
                            <div className="secure-box">
                                <div className="shield"><MdOutlineSecurity /></div>
                                <div>
                                    <h4>100% Secure</h4>
                                    <span>Money are always save</span>
                                </div>
                            </div>

                            {/* Markets Card */}
                            <div className="markets-box">
                                <img src={trade} alt="" />
                            </div>

                            <div className="wallet-boxx">
                                <h3 className="wa-head">Wallets</h3>

                                <div className="convert-row">
                                    <span className="btc-tag">BTC</span>
                                    <FaExchangeAlt className="swap-icon" />
                                    <span className="usd-text">USD</span>
                                </div>



                                <p className="eth">
                                    You Got <FaEthereum className="eth-icon" /> 329.009 ETH
                                </p>

                                <button className="wallet-btn">Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Crypgatways;