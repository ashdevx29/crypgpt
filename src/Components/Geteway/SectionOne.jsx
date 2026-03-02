import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar.jsx";
import Stats from "./Stats.jsx";
import robo_img from "../../assets/heroSection/gateway.png";
import one from "../../assets/partners/svg-partner/cmc.svg";
import two from "../../assets/partners/svg-partner/coingecko.svg";
import three from "../../assets/partners/svg-partner/mexc.svg";
import four from "../../assets/partners/svg-partner/pancakeswap.svg";
import five from "../../assets/partners/svg-partner/phantom.svg";
import blofin from "../../assets/partners/partner/BloFin 1.png";
import coinscope from "../../assets/partners/partner//Coinscope 1.png";
import blockspot from "../../assets/partners/partner/cropped-blockspot-logo-white.png 1.png";


export default function HeroSection() {
  // const logos = [cmc, coingecko, pancake, mexc];
  const logos = [
    { img: one, link: "https://dex.coinmarketcap.com/token/bsc/0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb/" },
        { img: two, link: "https://www.coingecko.com/en/coins/crypgpt" },
        { img: three, link: "https://www.mexc.com/exchange/CRYPGPT_USDT" },
        { img: four, link: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xe0Ae52E75b38B605E9c879a570ee1E7bCC66254B&chain=bsc" },
        { img: five, link: "https://phantom.com/tokens/base/0xd04519aee0128f2c1407b88096e6c8b0d5980f84" },
        { img: blofin, link: "https://blofin.com/spot/en/CRYPGPT-USDT" },
        { img: coinscope, link: "https://www.coinscope.co/coin/crypgpt" },
        { img: blockspot, link: "https://blockspot.io/coin/crypgpt-token/" },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-3 lg:px-20 pt-8 sm:pt-10 lg:pt-32">

      {/* ===== Background Text===== */}
      <h1
        className="hidden md:block absolute top-0 left-[20px] lg:left-[40px] select-none pointer-events-none uppercase whitespace-nowrap"
        style={{
          fontFamily: "Kanit, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(145px, 23vw, 340px)",
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
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full  gap-10">

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
          <p className="text-[15px] md:text-[18px] text-[#FFFFFFA1] leading-relaxed">
            CrypGPT is trusted by a growing global community of businesses and
            innovators. <br /> We deliver secure, AI-powered crypto transactions that
            are fast, seamless, and reliable — built for the future of Web3.
          </p>

          {/* Progress Bars — FULL SAFE WIDTH */}
          <div className="mt-5  md:mt-10 w-full md:w-[70%] !text-[#FFFFFF]">
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
          transition={{ duration: 3 }}
          className="relative flex justify-center mt-12 md:mt-20 w-full"
        >
          <div className="relative w-full flex justify-center bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
            <motion.img
              src={robo_img}
              alt="AI Robot"
              animate={{ y: [0, -85, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative w-[80%] md:w-full max-w-[520px]"
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
      <div className="relative w-full overflow-hidden mt-3 md:mt-1 py-6">
        <motion.div
          className="flex gap-10 md:gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={item.img}
                alt="brand"
                className="h-6 md:h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
      </div>

    </section>
  );
}