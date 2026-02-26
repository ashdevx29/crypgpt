import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar.jsx";
import Stats from "./Stats.jsx";
import robo_img from "../../assets/heroSection/hero_section_robo.png";

import cmc from "../../assets/herologos/cmc.png";
import coingecko from "../../assets/herologos/coingecko.png";
import pancake from "../../assets/herologos/pancake.png";
import mexc from "../../assets/herologos/mexc.png";

export default function HeroSection() {
  const logos = [cmc, coingecko, pancake, mexc];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 lg:px-20 pt-8 sm:pt-28 lg:pt-32">

      {/* ===== Background Text===== */}
      <h1
        className="hidden md:block absolute top-0 left-[20px] lg:left-[80px] select-none pointer-events-none uppercase whitespace-nowrap"
        style={{
          fontFamily: "Kanit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(140px, 22vw, 325px)",
          lineHeight: "100%",
          background:
            "linear-gradient(90deg, #110E0D 0%, #423531 49.5%, #110E0D 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CRYPGPT
      </h1>

      {/* ===== Content Wrapper ===== */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full pt-[10px] gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-xl mx-auto md:mx-0 text-center md:text-left"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
          }}
        >
          <p className="text-gray-400 leading-relaxed">
            CrypGPT is trusted by a growing global community of businesses and
            innovators. We deliver secure, AI-powered crypto transactions that
            are fast, seamless, and reliable — built for the future of Web3.
          </p>

          {/* Progress Bars — FULL SAFE WIDTH */}
          <div className="mt-10 w-full">
            <ProgressBar
              label="Challenges in the Crypto Space"
              percentage={75}
            />
            <ProgressBar
              label="Future Trends in Cryptocurrency"
              percentage={85}
            />
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <Stats />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-12 md:mt-20 w-full"
        >
          <div className="relative w-full flex justify-center bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
            <motion.img
              src={robo_img}
              alt="AI Robot"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative w-[80%] md:w-full max-w-[480px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 20%, black 100%)",
                maskImage:
                  "linear-gradient(to top, transparent 0%, black 20%, black 100%)",
              }}
            />          
          </div>
        </motion.div>
      </div>

      {/* ===== LOGO MARQUEE ===== */}
      <div className="relative w-full overflow-hidden mt-10 md:mt-16 py-6">
        <motion.div
          className="flex gap-10 md:gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              className="h-6 md:h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}