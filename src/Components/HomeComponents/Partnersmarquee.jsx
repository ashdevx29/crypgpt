import React from 'react';
import '../../Styles/Partnersmarquee.css';
import one from "../../assets/partners/one.png";
import two from "../../assets/partners/two.png";
import three from "../../assets/partners/three.png";
import four from "../../assets/partners/four.png";

const Partnersmarquee = () => {
  // Define the base set once
  const baseLogos = [one, two, three, four];
  
  // Combine them into one array for the track
  const logoSources = [...baseLogos, ...baseLogos];

  return (
    <section className="gx-pure-image-marquee">
      <div className="gx-marquee-viewport">
        <div className="gx-marquee-track">
          {/* We render the full array twice to create the infinite loop effect */}
          {[...logoSources, ...logoSources].map((src, index) => (
            <div className="gx-marquee-slot" key={index}>
              <img src={src} alt="Partner Logo" className="gx-partner-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnersmarquee;