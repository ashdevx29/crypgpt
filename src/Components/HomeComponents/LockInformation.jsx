import React from "react";
import "../../Styles/LockInformation.css";
import { BiSolidLock } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { RiCoinsLine } from "react-icons/ri";
import { FiHash } from "react-icons/fi";
import { RiTokenSwapFill } from "react-icons/ri";
import { GiToken } from "react-icons/gi";
import { MdOutlineNetworkPing } from "react-icons/md";

const LockInformation = () => {
    return (
        <section className="lock-section">
            <div className="lock-container">

                {/* TITLE */}
                <h2 className="lock-title">
                    LOCK <span>INFORMATION</span>
                </h2>

                {/* LOCKED AMOUNT BAR */}
                <div className="locked-bar">
                    <div className="locked-content">
                        <div className="icon-box">
                            <BiSolidLock />
                        </div>
                        <div>
                            <p>Current Locked Amount</p>
                            <h4>550,000,000 CRYPGPT</h4>
                        </div>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="lock-grid">

                    {/* LEFT CARD */}
                    <div className="supply-card">

                        <div className="circle-wrapper">
                            <div className="yellow-circle">
                                <span>64.7%</span>
                            </div>
                        </div>

                        <div className="lock-right">
                            <div className="locked-tag">Locked</div>
                            <h3 className="supply-text">Supply Locked</h3>
                        </div>


                    </div>

                    {/* RIGHT INFO */}
                    <div className="info-cards">

                        <div className="info-box">
                             <div className="icon-wrapper">
                                <RiTokenSwapFill className="info-icon" />
                             </div>
                            <div>
                                <p>Token Name</p>
                                <h4>CrypGPT Token</h4>
                            </div>
                        </div>

                        <div className="info-box">
                         <div className="icon-wrapper">
                            <GiToken className="info-icon" />
                         </div>
                            <div>
                                <p>Symbol</p>
                                <h4>CRYPTGPT</h4>
                            </div>
                        </div>

                        <div className="info-box">
                         <div className="icon-wrapper">
                            <MdOutlineNetworkPing className="info-icon" />
                            </div>
                            
                            <div>
                                <p>Decimal</p>
                                <h4>18</h4>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BUTTON */}
                <div className="btn-wrapper">
                    <button className="lock-btn">
                        View Token Info Website →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default LockInformation;