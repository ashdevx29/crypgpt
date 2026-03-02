import React from 'react';
import '../../Styles/SmartCrypto.css';
import CenterVideo from '../../assets/smartcrypto/video.mp4'; 

const SmartRevolution = () => {
  const leftFeatures = [
    { title: "AI Chat Bot", desc: "An intelligent CrypGPT AI assistant providing real-time market insights, automated trading signals, and smart decision support 24/7." },
    { title: "Upcoming Listings", desc: "Strategic listings on leading crypto exchanges to enhance liquidity, strengthen market presence, and expand global access." },
    { title: "", desc: "CrypGPT is already listed on 4 major crypto exchanges. Ensuring strong liquidity, global accessibility, and market trust. Expanding steadily toward broader worldwide adoption." }
  ];

  const rightFeatures = [
    { title: "AI Staking Platform", desc: "Next-generation staking powered by AI algorithms, designed to optimize rewards and maximize long-term earning potential." },
    { title: "CrypGPT Gateways", desc: "Secure payment and crypto gateway solutions enabling seamless Web3 transactions, integrations, and ecosystem connectivity." },
    { title: "", desc: "CrypGPT is preparing for upcoming major exchange listings. Designed to boost liquidity, visibility, and global adoption. Expanding access to power the next phase of growth" }
  ];

  return (
    <section className="scr-root-container">
      <div className="scr-header-flex">
        <h2 className="scr-main-title">
          Why CrypGPT Leads the <span className="scr-title-white">Future</span>
        </h2>
        <div className="scr-top-desc-box">
          <p>
            Innovation driven by artificial intelligence.
Performance optimized through automation.
Security and scalability built for the future
          </p>
        </div>
      </div>

      <div className="scr-content-grid">

        {/* Left Feature Column */}
        <div className="scr-feature-col">
          {leftFeatures.map((item, index) => (
            <div
              className={`scr-feature-card ${
                item.title === "Global Adoption" ? "scr-global-card" : ""
              }`}
              key={index}
            >
              <h3 className="scr-feature-title">{item.title}</h3>
              <p className="scr-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Video */}
        <div className="scr-video-portal">
          <div className="scr-video-frame-inner">
            <video autoPlay loop muted playsInline className="scr-main-video">
              <source src={CenterVideo} type="video/mp4" />
            </video>
            <div className="scr-video-ambient-light"></div>
          </div>
        </div>

        {/* Right Feature Column */}
        <div className="scr-feature-col">
          {rightFeatures.map((item, index) => (
            <div
              className={`scr-feature-card ${
                item.title === "Secure & Transparent" ? "scr-secure-card" : ""
              }`}
              key={index}
            >
              <h3 className="scr-feature-title">{item.title}</h3>
              <p className="scr-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartRevolution;















// import React from 'react';
// import '../../Styles/SmartCrypto.css';
// // Import your center video
// import CenterVideo from '../../assets/smartcrypto/why section.mp4'; 

// const SmartRevolution = () => {
//   const leftFeatures = [
//     { title: "Fusion of AI + Blockchain", desc: "Combining AI intelligence with blockchain security for the smartest, safest, and most efficient crypto ecosystem ever." },
//     { title: "Global Adoption", desc: "CrypGPT drives adoption across industries—finance, trading, payments, and communities—bridging Web2 and Web3 seamlessly." },
//     { title: "Earning for Everyone", desc: "Multiple income streams including staking, trading, move-to-earn, and chat-to-earn models for users worldwide." }
//   ];

//   const rightFeatures = [
//     { title: "Strong Roadmap", desc: "Backed by powerful partnerships and a strategic roadmap designed to scale adoption and deliver long-term growth." },
//     { title: "Secure & Transparent", desc: "Blockchain-powered transparency with AI-powered fraud detection ensures a safe and decentralized ecosystem." },
//     { title: "Earning for Everyone", desc: "Multiple income streams including staking, trading, move-to-earn, and chat-to-earn models for users worldwide." }
//   ];

//   return (
//     <section className="scr-root-container">
//       <div className="scr-header-flex">
//         <h1 className="scr-main-title">
//           SMART CRYPTO  <span className="scr-title-white">REVOLUTION</span>
//         </h1>
//         <div className="scr-top-desc-box">
//           <p>
//             Discover the power of CrypGPT AI, where advanced intelligence meets real-time crypto strategy. 
//             Unlock smarter decisions, automated execution, and next-level trading performance.
//           </p>
//         </div>
//       </div>

//       <div className="scr-content-grid">
//         {/* Left Feature Column */}
//         <div className="scr-feature-col">
//           {leftFeatures.map((item, index) => (
//             <div className="scr-feature-card" key={index}>
//               <h3 className="scr-feature-title">{item.title}</h3>
//               <p className="scr-feature-desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Center Frame: Video Only */}
//         <div className="scr-video-portal">
//           <div className="scr-video-frame-inner">
//              <video autoPlay loop muted playsInline className="scr-main-video">
//               <source src={CenterVideo} type="video/mp4" />
//             </video>
//             {/* Ambient Glow behind video */}
//             <div className="scr-video-ambient-light"></div>
//           </div>
//         </div>

//         {/* Right Feature Column */}
//         <div className="scr-feature-col">
//           {rightFeatures.map((item, index) => (
//             <div className="scr-feature-card" key={index}>
//               <h3 className="scr-feature-title">{item.title}</h3>
//               <p className="scr-feature-desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SmartRevolution;







