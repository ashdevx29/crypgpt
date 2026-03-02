import React from "react";
import "../../Styles/AboutSection.css";
import right from "../../assets/about/about.mp4"; 

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">

        {/* LEFT SIDE – HUD FRAME */}
        <div className="about-left">
          <div className="cgpt-full-hud__relative">
            <svg
              width="729"
              height="393"
              viewBox="0 0 729 393"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cgpt-hud-svg-main"
            >
              {/* Main Background Shape */}
              <path
                d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z"
                fill="#000"
              />

              {/* Video Viewport */}
              <foreignObject x="30" y="30" width="670" height="330">
                <div className="hud-video-container" xmlns="http://www.w3.org/1999/xhtml">
                  <video autoPlay muted loop playsInline className="hud-video">
                    <source src={right} type="video/mp4" />
                  </video>
                </div>
              </foreignObject>

              {/* Border */}
              <path d="M465.25 15.2946L505.571 15.2946L522.286 1L702.639 1L728.001 36.4899V108.456" stroke="url(#paint0_linear_2_3)" strokeWidth="2" />
              <path d="M190.24 11.4694L204.042 25.8014L204.189 25.9547L512.808 25.9547L512.948 25.8327L529.599 11.4694L694.238 11.4694L715.707 41.36L715.707 353.712L694.064 380.156H628.762L610.013 364.528L609.873 364.412L115.414 364.412L115.264 364.595L102.59 380.156H37.3223L15.7012 357.35L15.7012 42.6354L40.8389 11.4694L190.24 11.4694Z" stroke="white" strokeOpacity="0.2" />
              <path d="M1 196.805L1 361.358L28.9443 391.999H103.463" stroke="url(#paint1_linear_2_3)" strokeWidth="2" />

              {/* <path d="M196.791 11.4686L203.385 11.4686L214.037 23.2986L207.443 23.2986L196.791 11.4686Z" fill="url(#paint2_linear_2_3)" /> */}
              {/* SLASH 1 */}
              <path d="M196.791 11.4686L203.385 11.4686L214.037 23.2986L207.443 23.2986L196.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 2 */}
              <path d="M210.791 11.4686L217.385 11.4686L228.037 23.2986L221.443 23.2986L210.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 3 */}
              <path d="M224.791 11.4686L231.385 11.4686L242.037 23.2986L235.443 23.2986L224.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 4 */}
              <path d="M238.791 11.4686L245.385 11.4686L256.037 23.2986L249.443 23.2986L238.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 5 */}
              <path d="M252.791 11.4686L259.385 11.4686L270.037 23.2986L263.443 23.2986L252.791 11.4686Z" fill="url(#paint2_linear_2_3)" />

              {/* SLASH 1 */}
              <path d="M558.844 370.515H565.235L575.558 380.667H569.167L558.844 370.515Z" fill="url(#paint3_linear_2_3)" />
              {/* SLASH 2 */}
              <path d="M572.844 370.515H579.235L589.558 380.667H583.167L572.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 3 */}
              <path d="M586.844 370.515H593.235L603.558 380.667H597.167L586.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 4 */}
              <path d="M600.844 370.515H607.235L617.558 380.667H611.167L600.844 370.515Z" fill="url(#paint3_linear_2_3)" />

              {/* SLASH 5 */}
              <path d="M544.844 370.515H551.235L561.558 380.667H555.167L544.844 370.515Z" fill="url(#paint3_linear_2_3)" />
              {/* <path d="M614.844 370.515H621.235L631.558 380.667H625.167L614.844 370.515Z" fill="url(#paint3_linear_2_3)" /> */}

              <defs>
                <linearGradient id="paint0_linear_2_3" x1="596.625" y1="1" x2="596.625" y2="108.456" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint1_linear_2_3" x1="52.2313" y1="196.805" x2="52.2313" y2="391.999" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint2_linear_2_3" x1="205.414" y1="11.4686" x2="205.414" y2="23.2986" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
                <linearGradient id="paint3_linear_2_3" x1="567.201" y1="370.515" x2="567.201" y2="380.667" gradientUnits="userSpaceOnUse"><stop stopColor="#FDF803" /><stop offset="1" stopColor="#E5AB24" /></linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="about-right">
          <span className="about-tag">About Us</span>

          <h2 className="about-heading">
            The Future Of AI <span> Crypto</span>
          </h2>

          <p className="about-text">
            CrypGPT is more than a token — it is a complete AI-powered crypto ecosystem built to simplify Web3. With the advanced CrypGPT AI Bot, intelligent trading becomes smarter and more efficient. Upcoming AI-driven staking platforms will deliver optimized rewards, while strategic exchange listings expand global access and liquidity. 
          </p>
        </div>

      </div>
    </section>
  );
}