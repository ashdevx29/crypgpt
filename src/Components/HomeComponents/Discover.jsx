import React from 'react';
import '../../Styles/Discover.css';
import left from '../../assets/discover/left.jpg';
import right from '../../assets/discover/right.jpg';
import top from '../../assets/discover/top.jpg';
import bottom from '../../assets/discover/lower.jpg';
import action from '../../assets/discover/action.png'

const Visionaries = () => {
  const team = [
    {
      name: "Arjun Mehta",
      role: "Chief AI Architect",
      img: top,
      className:"card-first"
    },
    {
      name: "Elena Kovacs",
      role: "Head of Blockchain Strategy",
      img: bottom,
      className:"card-second"
    }
  ];

  return (
    <section className="cgpt-hero-wrapper">
      <div className="cgpt-top-bar">
        <div className="cgpt-description-box">
          <p>
            CrypGPT partners with leading blockchain networks, AI technology providers, liquidity partners, and digital infrastructure platforms to strengthen and scale our intelligent crypto ecosystem. 
          </p>
        </div>
        <h2 className="cgpt-main-title">Strategic Partners & <span>Alliances</span></h2>
      </div>

      <div className="cgpt-content-grid">
        <div className="cgpt-side-art">
          {/* <img src={left} alt="AI Side Profile" className="cgpt-feature-img" /> */}
       {/* <video 
            className="cgpt-feature-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={left} type="img" className='video-left'/>
          </video> */}
          <img src={left} alt='' className='cgpt-feature-img'/>
        </div>

        <div className="cgpt-visionaries-center">
          <h3 className="cgpt-section-label">Meet the Visionaries</h3>
          <div className="cgpt-team-stack">
            {team.map((member, index) => (
              <div key={index} className={`cgpt-member-card ${member.className}`}>
                <div className="cgpt-avatar-wrapper">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="cgpt-member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <button className="cgpt-action-btn">
                  <span><img src={action} alt=''></img></span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cgpt-side-art">
          <img src={right} alt="AI Front View" className="cgpt-feature-img" />
        </div>
      </div>
    </section>
  );
};

export default Visionaries;