// src/components/EcosystemPop.jsx

import React from "react";
import one from "../../../assets/header-eco/one.png";
import two from "../../../assets/header-eco/two.png";
import three from "../../../assets/header-eco/three.png";
import four from "../../../assets/header-eco/four.png";
import five from "../../../assets/header-eco/five.png";
import six from "../../../assets/header-eco/six.png";
import seven from "../../../assets/header-eco/seven.png";

function EcosystemPop({ onClose }) {
  return (
    <>
      <div className="eco-overlay" onClick={onClose}></div>
      <div className="eco-close" onClick={onClose}>✕</div>

      <div className="ecosystem-mega-menu">
        <div className="mega-menu-content">
          <div className="ecosystem-section">

            {/* LEFT SIDE */}
            <div className="ecosystem-left">
              <h1 className="ecosystem-title">Ecosystem</h1>
              <p className="ecosystem-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="mega-right">

              <div className="mega-item">
                <div className="mega-icon"><img src={one} alt="Use Case" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/use-case" aria-label="Use Case Page">Use Case</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={five} alt="AI ChatBot" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/ai-chatbot" aria-label="AI ChatBot Page">AI ChatBot</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={two} alt="Staking" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/staking" aria-label="Staking Page">Staking</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={six} alt="GPT Exchange" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/gpt-exchange" aria-label="GPT Exchange Page">GPT Exchange</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={three} alt="CrypGateWays" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/crypgateways" aria-label="CrypGateWays Page">CrypGateWays</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={seven} alt="Burn Dashboard" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/burn-dashboard" aria-label="Burn Dashboard Page">Burn Dashboard</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <div className="mega-item">
                <div className="mega-icon"><img src={four} alt="DAO Governance" /></div>
                <div className="mega-text">
                  <h4>
                    <a href="/dao-governance" aria-label="DAO Governance Page">DAO Governance</a>
                  </h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcosystemPop;







// // src/components/EcosystemPop.jsx

// import React from "react";
// import one from "../../../assets/header-eco/one.png";
// import two from "../../../assets/header-eco/two.png";
// import three from "../../../assets/header-eco/three.png";
// import four from "../../../assets/header-eco/four.png";
// import five from "../../../assets/header-eco/five.png";
// import six from "../../../assets/header-eco/six.png";
// import seven from "../../../assets/header-eco/seven.png";

// function EcosystemPop({ onClose }) {
//   return (
//     <>
//       {/* Background Overlay */}
//       <div className="eco-overlay" onClick={onClose}></div>
//       <div className="eco-close" onClick={onClose}>✕</div>

//       <div className="ecosystem-mega-menu">
//         <div className="mega-menu-content">

//           <div className="ecosystem-section">
            
//             {/* LEFT SIDE */}
//             <div className="ecosystem-left">
//               <h1 className="ecosystem-title">Ecosystem</h1>
//               <p className="ecosystem-desc">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//               </p>

//               <div className="pill-container">

//                 <div className="pill-row row-1">
//                   <div className="one-pill pill-lg">Lorem Ipsum</div>
//                 </div>

//                 <div className="pill-row row-2">
//                   <div className="one-pill">Lorem Ipsum</div>
//                   <div className="one-pill">Lorem Ipsum</div>
//                 </div>

//                 <div className="pill-row row-3">
//                   <div className="one-pill">Lorem Ipsum</div>
//                   <div className="one-pill pill-sm">Lorem</div>
//                   <div className="one-pill pill-sm">Lorem</div>
//                 </div>

//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="mega-right">

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={one} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>Use Case</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={five} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>AI ChatBot</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={two} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>Staking</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={six} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>GPT Exchange</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={three} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>CrypGateWays</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={seven} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>Burn Dashboard</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//               <div className="mega-item">
//                 <div className="mega-icon"><img src={four} alt="" /></div>
//                 <div className="mega-text">
//                   <h4>DAO Governance</h4>
//                   <p>Lorem Ipsum</p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default EcosystemPop;