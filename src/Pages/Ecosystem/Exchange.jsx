import React from "react";
import "../../Styles/Exchange.css";
import { IoArrowUp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";
import { IoMdMic } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
const Exchange = () => {
    return (
        <div className="ex-page">

            {/* Background Glow Effects */}
            <div className="ex-bg-glow-left"></div>
            <div className="ex-bg-glow-right"></div>

            <div className="ex-content">

                <div className="ex-badge">
                    <BsStars className="ex-badge-icon" />
                    <span>Coming Q2 2026</span>
                </div>

                <h2 className="ex-heading">
                    The Future of Crypto Trading is Almost Here
                </h2>

                <p className="ex-subtext">
                    Experience lightning-fast trades, AI-powered insights, and next-generation DeFi integration. CrypGPT Exchange is launching soon.
                </p>

                {/* FEATURE CARDS */}
                <div className="ex-features">

                    <div className="ex-feature-card">
                        <div className="ex-feature-icon trade"><HiOutlineArrowTrendingUp /></div>
                        <h4>AI-Powered Trading</h4>
                        <p>Advanced algorithms analyze market trends in real-time to help you make smarter trading decisions.</p>
                    </div>

                    <div className="ex-feature-card">
                        <div className="ex-feature-icon risk"><MdOutlineSecurity /></div>
                        <h4>Bank-Grade Security</h4>
                        <p>Multi-layer security with cold storage, 2FA, and insurance protection for your digital assets.</p>
                    </div>

                    <div className="ex-feature-card">
                        <div className="ex-feature-icon multi"><TbTopologyStar3 /></div>
                        <h4>Zero-Fee Trading</h4>
                        <p>Trade with no hidden fees. Pay only what you see with our transparent pricing model.</p>
                    </div>

                </div>

                <p className="ex-note">
                    Be the first to know when we launch. Get exclusive early access.
                </p>

                {/* INPUT SECTION */}
                <div className="ex-input-wrapper">

                    <input
                        type="text"
                        placeholder="Enter your Email Address ..."
                    />

                    <button className="ex-send-btn">
                        <IoArrowUp />
                    </button>
                </div>

                

            </div>
        </div>
    );
};

export default Exchange;