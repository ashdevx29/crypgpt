import React from "react";
import "../../Styles/StakingPage.css";
import logoImg from "../../assets/StakingPage/logo.png";
import coinImg from "../../assets/StakingPage/stake.png";
import { FiInfo } from "react-icons/fi";
import logo from "../../assets/logo.png";
import chainIcon from "../../assets/StakingPage/chain.png";

const StakingPage = () => {
  return (
    <div className="staking-page">

      {/* ================= HEADER ================= */}
      <div className="staking-banner">
        <div className="staking-left">

          {/* LOGO SECTION */}
          <div className="logo-section">
            <img src={logoImg} alt="CrypGPT Logo" className="staking-logo" />
          </div>

          <div className="divider"></div>

          <div className="staking-content">
            <h4 className="staking-title">
              COMMUNITY <span>STAKING</span> POOL
            </h4>

            <div className="apy-row">
              <h1 className="apy">30% APY</h1>
              <button className="limited-btn">Limited Space</button>
            </div>
          </div>
        </div>

        <div className="staking-right">
          <img src={coinImg} alt="staking-coin" />
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="staking-stats">

        <div className="stat-item">
          <h3>188,451,024.16 CRYPGPT</h3>
          <p>TOTAL CRYPGPT STAKED</p>
        </div>

        <div className="stat-item">
          <h3>~ $1,048,739.10</h3>
          <p>TOTAL VALUE LOCKED</p>
        </div>

        <div className="stat-item">
          <h3>~ $0.00</h3>
          <p>YOUR STAKE</p>
        </div>

        <div className="stat-item">
          <h3>~ $0.00</h3>
          <p>YOUR TOTAL REWARDS</p>
        </div>

      </div>

      {/* ================= YOUR STAKED POOLS ================= */}
      <div className="staked-section">

        <h2 className="section-title">Your Staked Pools</h2>

        {/* Table Header */}
        <div className="table-wrapper">
          <table className="staking-table staked-header-table">
            <thead>
              <tr>
                <th>POOLS</th>
                <th>CHAIN</th>
                <th>
                  <span className="th-content">
                    REWARD <FiInfo className="info-icon" />
                  </span>
                </th>
                <th>
                  <span className="th-content">
                    NFT BOOST <FiInfo className="info-icon" />
                  </span>
                </th>
                <th>LOCK TERM</th>
                <th>CAPACITY</th>
                <th>YOUR STAKE</th>
              </tr>
            </thead>
          </table>
        </div>
        {/* <div className="staked-table-header">
          <div>POOLS</div>
          <div>CHAIN</div>
          <div className="info-col">
            REWARD <FiInfo className="info-icon" />
          </div>
          <div className="info-col">
            NFT BOOST <FiInfo className="info-icon" />
          </div>
          <div>LOCK TERM</div>
          <div>CAPACITY</div>
          <div>YOUR STAKE</div>
        </div> */}

        {/* Empty Wallet Row */}
        <div className="wallet-box">
          <p>Connect your wallet to view your active stakes</p>
          <button className="connect-btn">Connect Wallet</button>
        </div>

      </div>

      {/* ================= ACTIVE STAKING POOLS ================= */}

      <div className="active-section">
        <h2 className="section-title">Active Staking Pools</h2>

        <div className="table-wrapper">
          <table className="staking-table">
            <thead>
              <tr>
                <th>POOLS</th>
                <th>CHAIN</th>
                <th>
                  <span className="th-content">
                    REWARD
                    <FiInfo className="info-icon" />
                  </span>
                </th>

                <th>
                  <span className="th-content">
                    NFT BOOST
                    <FiInfo className="info-icon" />
                  </span>
                </th>
                <th>LOCK TERM</th>
                <th>CAPACITY</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item}>

                  {/* POOLS */}
                  <td>
                    <div className="pool-boxes">
                      <div className="pool-card">
                        <img src={logo} alt="logo" className="mini-logo" />
                        <span>STAKE</span>
                      </div>

                      <div className="pool-card">
                        <img src={logo} alt="logo" className="mini-logo" />
                        <span>EARN</span>
                      </div>
                    </div>
                  </td>

                  {/* CHAIN */}
                  <td>
                    <div className="chain-icon"><img src={chainIcon} alt="chain-icon" /></div>
                  </td>

                  {/* REWARD */}
                  <td>
                    <div className="reward">
                      <strong>30.07%</strong>
                      <span>Compounding</span>
                    </div>
                  </td>

                  {/* NFT BOOST */}
                  <td>
                    <div className="nft">
                      <div className="nft-box"></div>
                      <span>+0%</span>
                    </div>
                  </td>

                  {/* LOCK TERM */}
                  <td>180 days</td>

                  {/* CAPACITY */}
                  <td>
                    <div className="capacity">
                      <p>106.56M / 110.00M <br />CRYPGPT</p>
                      <div className="prog-wrap">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <span className="percent">97%</span>
                      </div>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default StakingPage;