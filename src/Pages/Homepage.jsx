// // import { useState } from 'react'
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import S1Hero from '../Components/HomeComponents/S1Hero';




// function HomePage() {

//   const location1 = useLocation();
//   useEffect(() => {
//     const scrollToElement = () => {
//       const { search } = location1;
//       const params = new URLSearchParams(search);
//       const scrollToId = params.get('');

//       if (scrollToId) {
//         const element = document.getElementById(scrollToId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };

//     scrollToElement();
//   }, [location1]);

//   return (
//     <>
//       <S1Hero />
//     </>
//   )
// }

// export default HomePage;





import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import S1Hero from "../Components/HomeComponents/S1Hero";
import Ecosystem from "../Components/HomeComponents/Ecosystem";
import Future from "../Components/HomeComponents/Future";
import Discover from "../Components/HomeComponents/Discover";
import Roadmap from "../Components/HomeComponents/Roadmap";
import PartnersSection from "../Components/HomeComponents/Partners";
// import Footer from "../Components/Directives/Footer";
import StakingDashboard from "../Components/HomeComponents/Staking";
import StakingSection from "../Components/HomeComponents/Staking";
import Partnersmarquee from "../Components/HomeComponents/Partnersmarquee";
import MovementSection from "../Components/HomeComponents/MovementSection";
import SmartRevolution from "../Components/HomeComponents/SmartCrypto";
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);
    const scrollToId = params.get("section");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <S1Hero />
      </section>

      {/* <section id="ecosystem">
        <Ecosystem />
      </section> */}

<section id="partnersmarquee">
  <Partnersmarquee/>
</section>

<section id="movementsection">
  <MovementSection/>
</section>

      <section id="future">
        <Future />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="discover">
        <Discover />
      </section>


<section id="staking">


        <StakingSection/>

</section>

      <section id="partners">
        <PartnersSection />
      </section>

<section id="Smartcrypto">
  <SmartRevolution/>
</section>

      {/* <section id="footer">
        <Footer/>
      </section> */}
    </>
  );
}

export default HomePage;