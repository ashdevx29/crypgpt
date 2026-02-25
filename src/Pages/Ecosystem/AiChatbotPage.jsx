import React from "react";
import "../../Styles/AiChatbot.css";
import { IoArrowUp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";
import { IoMdMic } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
const AiChatPage = () => {
    return (
        <div className="ai-page">

            {/* Background Glow Effects */}
            <div className="ai-bg-glow-left"></div>
            <div className="ai-bg-glow-right"></div>

            <div className="ai-content">

                <div className="ai-badge">
                    <BsStars className="ai-badge-icon" />
                    <span>V2.0 BETA LIVE</span>
                </div>

                <h2 className="ai-heading">
                    Power Your Crypto Intelligence with AI
                </h2>

                <p className="ai-subtext">
                    Autonomous AI agents for trading, research, automation & blockchain analytics. The next evolution of Web3 intelligence.
                </p>

                {/* FEATURE CARDS */}
                <div className="ai-features">

                    <div className="ai-feature-card">
                        <div className="ai-feature-icon trade"><HiOutlineArrowTrendingUp /></div>
                        <h4>Trade Insights</h4>
                        <p>Deep analysis of on-chain movements and whale activity.</p>
                    </div>

                    <div className="ai-feature-card">
                        <div className="ai-feature-icon risk"><MdOutlineSecurity /></div>
                        <h4>Risk Audit</h4>
                        <p>Automated smart contract vulnerability scanning in real-time.</p>
                    </div>

                    <div className="ai-feature-card">
                        <div className="ai-feature-icon multi"><TbTopologyStar3 /></div>
                        <h4>Multi-Agent</h4>
                        <p>Deploy multiple sub-agents to execute complex workflows.</p>
                    </div>

                </div>

                {/* SUGGESTION CHIPS */}
                <div className="ai-suggestions">
                    <span>"Analyze $SOL volume trends"</span>
                    <span>"What is the sentiment on Ethereum?"</span>
                    <span>"Bridge USDC to Arbitrum"</span>
                </div>

                {/* INPUT SECTION */}
                <div className="ai-input-wrapper">
                    <IoMdMic className="ai-mic-icon" />

                    <input
                        type="text"
                        placeholder="Ask CrypGPT anything about crypto, AI, trading or blockchain..."
                    />

                    <BsPaperclip className="ai-attach-icon" />

                    <button className="ai-send-btn">
                        <IoArrowUp />
                    </button>
                </div>

                <p className="ai-note">
                    AI-GENERATED RESPONSES. USE RESPONSIBLY. SEE TERMS & PRIVACY.
                </p>

            </div>
        </div>
    );
};

export default AiChatPage;