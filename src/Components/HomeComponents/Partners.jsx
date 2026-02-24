import React, { useState } from 'react';
import '../../Styles/Partners.css';
import one from "../../assets/partners/one.png"
import two from "../../assets/partners/two.png"
import three from "../../assets/partners/three.png"
import four from "../../assets/partners/four.png"


const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState('EXCHANGES');

  // Yahan aap apne images ke path daal sakti hain
  const partnersData = {
    EXCHANGES: [
      { id: 1, img: one },
      { id: 2, img: two },
      { id: 3, img: four },
      { id: 4, img: three },
      { id: 5, img: one },
      { id: 6, img: two },
      { id: 7, img: four },
      { id: 8, img: three },
    ],
    "PARTNERS + BACKERS": [
  { id: 1, img: one },
      { id: 2, img: two },
      { id: 3, img: four },
    ],
    MEDIA: [
      { id: 4, img: three },
    ]
  };

  const tabs = ["EXCHANGES", "PARTNERS + BACKERS", "MEDIA"];

  return (
    <div className="container">
      <div className="header-wrapper">
        {/* Left SVG */}
        <div className="svg-line">
          <svg width="274" height="93" viewBox="0 0 274 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H91.8727L166.055 92H273" stroke="url(#paint0_linear_482_1630)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear_482_1630" x1="273" y1="92.6842" x2="-2.50366" y2="24.7978" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF803"/>
                <stop offset="1" stopColor="#110E0D"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tabs Filter */}
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button 
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right SVG */}
        <div className="svg-line">
          <svg width="278" height="93" viewBox="0 0 278 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M277 1H184.791L109.518 92H1" stroke="url(#paint0_linear_482_1631)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear_482_1631" x1="0.999987" y1="92.6842" x2="280.082" y2="22.9048" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF803"/>
                <stop offset="1" stopColor="#110E0D"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid-container">
        {partnersData[activeTab].map((item) => (
          <div key={item.id} className="exchange-card">
            <img src={item.img} alt="partner" className="partner-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;