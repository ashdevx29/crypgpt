import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import S1Hero from "../Components/HomeComponents/S1Hero";
import Ecosystem from "../Components/HomeComponents/Ecosystem";
// import Future from "../Components/HomeComponents/Future";
import AboutSection from "../Components/HomeComponents/AboutSection"
import Discover from "../Components/HomeComponents/Discover";
import Roadmap from "../Components/HomeComponents/Roadmap";
import PartnersSection from "../Components/HomeComponents/Partners";
// import Footer from "../Components/Directives/Footer";
import StakingDashboard from "../Components/HomeComponents/Staking";
import StakingSection from "../Components/HomeComponents/Staking";
import Partnersmarquee from "../Components/HomeComponents/Partnersmarquee";
import MovementSection from "../Components/HomeComponents/MovementSection";
import SmartRevolution from "../Components/HomeComponents/SmartCrypto";
// import LockInformation from "../Components/HomeComponents/LockInformation";
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
        <Partnersmarquee />
      </section>

      <section id="movementsection">
        <MovementSection />
      </section>

      <AboutSection />

      {/* <section id="future">
        <Future />
      </section> */}

      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="discover">
        <Discover />
      </section>


      <section id="staking">


        <StakingSection />

      </section>

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="Smartcrypto">
        <SmartRevolution />
      </section>

      {/* <LockInformation /> */}

      {/* <section id="footer">
        <Footer/>
      </section> */}
    </>
  );
}

export default HomePage;