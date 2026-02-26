import React, { useState, useEffect } from "react";
import "../../Styles/DaoGovernance.css";
import { FiSearch } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";

const DaoGovernance = () => {
    const [activeTab, setActiveTab] = useState("proposals");

    // 🔹 API Ready States
    const [proposals, setProposals] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(false);

    // 🔹 Future API Integration
    useEffect(() => {
        /*
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("YOUR_API_URL");
                const data = await res.json();

                setProposals(data.proposals);
                setLeaderboard(data.leaderboard);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        */
    }, []);

    return (
        <div className="dao-container">

            {/* ===== HERO SECTION ===== */}
            <div className="dao-hero">
                <div className="dao-left">
                    <p className="dao-subtitle">CRYPGPT</p>
                    <h2 className="dao-title">
                        DAO <span>Governance</span>
                    </h2>
                    <p className="dao-description">
                        Empowering decentralized intelligence through blockchain-powered AI
                        infrastructure, fueling our Compute Network, AI Marketplace, and
                        No-Code AI Builder platform. Powered by $CRYPGPT.
                    </p>
                </div>

                <div className="dao-stats">
                    <div className="stat-box">
                        <h3>-</h3>
                        <p>Total Proposals</p>
                    </div>
                    <div className="divider" />
                    <div className="stat-box">
                        <h3>-</h3>
                        <p>Total Votes</p>
                    </div>
                    <div className="divider" />
                    <div className="stat-box">
                        <h3>-</h3>
                        <p>Followers</p>
                    </div>
                </div>
            </div>

            {/* ===== TABS ===== */}
            <div className="dao-tabs">
                <button
                    className={activeTab === "proposals" ? "active" : ""}
                    onClick={() => setActiveTab("proposals")}
                >
                    PROPOSALS
                </button>

                <button
                    className={activeTab === "leaderboard" ? "active" : ""}
                    onClick={() => setActiveTab("leaderboard")}
                >
                    LEADERBOARD
                </button>
            </div>

            {/* ===== FILTER SECTION ===== */}
            <div className="dao-filters">
                <div className="search-box">
                    <FiSearch />
                    <input type="text" placeholder="Search proposal" />
                </div>

                <div className="filter-options">
                    <select>
                        <option>Proposed by Any</option>
                    </select>

                    <select>
                        <option>Status Any</option>
                    </select>

                    <button className="cryp-btn">
                        <BsLightningChargeFill /> CrypGPT
                    </button>

                    <button className="create-btn">
                        Create New Proposal
                    </button>
                </div>
            </div>

            {/* ===== TABLE WRAPPER ===== */}
            <div className="dao-table-wrapper">

                {/* ================= PROPOSALS TABLE ================= */}
                {activeTab === "proposals" && (
                    <div className="dao-table">
                        <div className="table-header">
                            <span>PROPOSAL</span>
                            <span>RESULT</span>
                            <span>DATE</span>
                            <span>STATUS</span>
                            <span>QUORUM</span>
                        </div>

                        {/* Loading State */}
                        {loading && (
                            <div style={{ padding: "20px", textAlign: "center" }}>
                                Loading...
                            </div>
                        )}

                        {/* Data Render (Future API) */}
                        {!loading && proposals.length > 0 &&
                            proposals.map((item, index) => (
                                <div className="table-row" key={index}>
                                    <span>{item.title}</span>
                                    <span>{item.result}</span>
                                    <span>{item.date}</span>
                                    <span>{item.status}</span>
                                    <span>{item.quorum}</span>
                                </div>
                            ))
                        }
                    </div>
                )}

                {/* ================= LEADERBOARD TABLE ================= */}
                {activeTab === "leaderboard" && (
                    <div className="dao-table">
                        <div className="table-header">
                            <span>RANK</span>
                            <span>WALLET</span>
                            <span>VOTES</span>
                            <span>PROPOSALS</span>
                            <span>PARTICIPATION</span>
                        </div>

                        {/* Loading State */}
                        {loading && (
                            <div style={{ padding: "20px", textAlign: "center" }}>
                                Loading...
                            </div>
                        )}

                        {/* Data Render (Future API) */}
                        {!loading && leaderboard.length > 0 &&
                            leaderboard.map((item, index) => (
                                <div className="table-row" key={index}>
                                    <span>{item.rank}</span>
                                    <span>{item.address}</span>
                                    <span>{item.votes}</span>
                                    <span>{item.proposals}</span>
                                    <span>{item.participation}</span>
                                </div>
                            ))
                        }
                    </div>
                )}

            </div>
        </div>
    );
};

export default DaoGovernance;














// import React, { useState } from "react";
// import "../../Styles/DaoGovernance.css";
// import { FiSearch } from "react-icons/fi";
// import { BsLightningChargeFill } from "react-icons/bs";

// const DaoGovernance = () => {
//     const [activeTab, setActiveTab] = useState("proposals");

//     const proposals = [
//         {
//             title: "Integrate AI Validator Upgrade",
//             result: "Passed",
//             date: "Feb 20, 2026",
//             status: "Closed",
//             quorum: "82%",
//         },
//         {
//             title: "Launch CrypGPT Mobile App",
//             result: "Active",
//             date: "Mar 02, 2026",
//             status: "Voting",
//             quorum: "64%",
//         },
//     ];

//     const leaderboard = [
//         {
//             address: "0xA93F...12B4",
//             votes: "1,245",
//             proposals: "12",
//             participation: "89%",
//             rank: "#1",
//         },
//         {
//             address: "0xB77C...89D1",
//             votes: "980",
//             proposals: "9",
//             participation: "76%",
//             rank: "#2",
//         },
//     ];

//     return (
//         <div className="dao-container">
//             {/* ===== HERO SECTION ===== */}
//             <div className="dao-hero">
//                 <div className="dao-left">
//                     <p className="dao-subtitle">CRYPGPT</p>
//                     <h2 className="dao-title">
//                         DAO <span>Governance</span>
//                     </h2>
//                     <p className="dao-description">
//                         Empowering decentralized intelligence through blockchain-powered AI
//                         infrastructure, fueling our Compute Network, AI Marketplace, and
//                         No-Code AI Builder platform. Powered by $CRYPGPT, a utility-driven
//                         ecosystem token.
//                     </p>
//                 </div>

//                 <div className="dao-stats">
//                     <div className="stat-box">
//                         <h3>-</h3>
//                         <p>Total Proposals</p>
//                     </div>
//                     <div className="divider" />
//                     <div className="stat-box">
//                         <h3>-</h3>
//                         <p>Total Votes</p>
//                     </div>
//                     <div className="divider" />
//                     <div className="stat-box">
//                         <h3>-</h3>
//                         <p>Followers</p>
//                     </div>
//                 </div>
//             </div>

//             {/* ===== TABS ===== */}
//             <div className="dao-tabs">
//                 <button
//                     className={activeTab === "proposals" ? "active" : ""}
//                     onClick={() => setActiveTab("proposals")}
//                 >
//                     PROPOSALS
//                 </button>
//                 <button
//                     className={activeTab === "leaderboard" ? "active" : ""}
//                     onClick={() => setActiveTab("leaderboard")}
//                 >
//                     LEADERBOARD
//                 </button>
//             </div>

//             {/* ===== FILTER SECTION ===== */}
//             <div className="dao-filters">
//                 <div className="search-box">
//                     <FiSearch />
//                     <input type="text" placeholder="Search proposal" />
//                 </div>

//                 <div className="filter-options">
//                     <select>
//                         <option>Proposed by Any</option>
//                     </select>

//                     <select>
//                         <option>Status Any</option>
//                     </select>

//                     <button className="cryp-btn">
//                         <BsLightningChargeFill /> CrypGPT
//                     </button>

//                     <button className="create-btn">Create New Proposal</button>
//                 </div>
//             </div>

//             {/* ===== TABLE ===== */}
//             <div className="dao-table-wrapper">

//                 {/* PROPOSALS TABLE */}
//                 {activeTab === "proposals" && (
//                     <div className="dao-table">
//                         <div className="table-header">
//                             <span>PROPOSAL</span>
//                             <span>RESULT</span>
//                             <span>DATE</span>
//                             <span>STATUS</span>
//                             <span>QUORUM</span>
//                         </div>

//                         {proposals.map((item, index) => (
//                             <div className="table-row" key={index}>
//                                 <span data-label="Proposal">{item.title}</span>
//                                 <span data-label="Result">{item.result}</span>
//                                 <span data-label="Date">{item.date}</span>
//                                 <span data-label="Status">{item.status}</span>
//                                 <span data-label="Quorum">{item.quorum}</span>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* LEADERBOARD TABLE */}
//                 {activeTab === "leaderboard" && (
//                     <div className="dao-table">
//                         <div className="table-header">
//                             <span>RANK</span>
//                             <span>WALLET</span>
//                             <span>VOTES</span>
//                             <span>PROPOSALS</span>
//                             <span>PARTICIPATION</span>
//                         </div>

//                         {leaderboard.map((item, index) => (
//                             <div className="table-row" key={index}>
//                                 <span data-label="Rank">{item.rank}</span>
//                                 <span data-label="Wallet">{item.address}</span>
//                                 <span data-label="Votes">{item.votes}</span>
//                                 <span data-label="Proposals">{item.proposals}</span>
//                                 <span data-label="Participation">{item.participation}</span>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//             </div>

//             {/* ===== TABLE ===== */}
//             {/* {activeTab === "proposals" && (
//                 <div className="dao-table-wrapper">
//                     <div className="dao-table">
//                         <div className="table-header">
//                             <span>PROPOSAL</span>
//                             <span>RESULT</span>
//                             <span>DATE</span>
//                             <span>STATUS</span>
//                             <span>QUORUM</span>
//                         </div>

//                         {proposals.map((item, index) => (
//                             <div className="table-row" key={index}>
//                                 <span data-label="Proposal">{item.title}</span>
//                                 <span data-label="Result">{item.result}</span>
//                                 <span data-label="Date">{item.date}</span>
//                                 <span data-label="Status">{item.status}</span>
//                                 <span data-label="Quorum">{item.quorum}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )} */}
//         </div>
//     );
// };

// export default DaoGovernance;