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
            Discover the power of CrypGPT AI, where advanced intelligence meets 
            real-time crypto strategy. Unlock smarter decisions, automated execution, 
            and next-level trading performance.
          </p>
        </div>
        <h1 className="cgpt-main-title">DISCOVER THE POWER OF CRYPGPT AI</h1>
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
          <h2 className="cgpt-section-label">Meet the Visionaries</h2>
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