import React from "react";
import closeupImg from "../../assets/SectionFour/closeupImg.png";
import sectionFourImg from "../../assets/SectionFour/sectionFour-img.png";
import arrowImg from "../../assets/SectionFour/card-arrow.png";

// 🔹 Add your arrow placeholder image here later
// import arrowImg from "../assets/SectionFour/arrow-placeholder.png";

function SectionFour() {
  const cards = [
    {
      title: "Tailored solutions to meet your business needs",
      description:
        "Whether you're a startup looking for company aiming for expansion,"
    },
    {
      title: "Creating opportunities for businesses to shine",
      description:
        "Whether you're a startup looking for company aiming for expansion,"
    },
    {
      title: "Where businesses come to grow and thrive",
      description:
        "Whether you're a startup looking for company aiming for expansion,"
    }
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 overflow-hidden min-w-[300px]">

      {/* Centered Container (Matches Other Sections) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

        {/* 1. TOP LEFT GLOW IMAGE */}
        <div className="absolute top-0 left-0 w-full max-w-2xl pointer-events-none z-0">
          <img
            src={sectionFourImg}
            alt=""
            className="w-full opacity-60 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-6 md:mb-12">
            <p className="text-gray-400 text-medium max-w-[280px] leading-relaxed font-lato">
              Whether you're a startup looking for company aiming for expansion,<br/>
              we are here to support
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold font-kanit tracking-tight">
              <span className="text-[#facc15]">Security</span> & Compliance
            </h1>
          </div>

          {/* 2. CENTRAL GRAPHIC IMAGE */}
          <div className="w-full mb-6 md:mb-8">
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
                <img
                src={closeupImg}
                alt="Security Icons Graphic"
                className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* 3. RESPONSIVE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-[#161616] border border-zinc-800/40 rounded-3xl p-6 md:p-8 flex flex-col hover:bg-[#1c1c1c] transition-all duration-300 min-h-[220px] md:min-h-[260px]"
              >
                <div className="flex justify-between items-start mb-4 md:mb-16">

                  <h3 className="text-lg md:text-xl font-medium font-lato leading-tight max-w-[80%] text-zinc-200">
                    {card.title}
                  </h3>

                  {/* Image Placeholder (Responsive) */}
                  <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">

                    {/* Replace src with your image later */}
                    <img
                      src={arrowImg}
                      alt="Arrow"
                      className="w-full h-full md:w-full md:h-full object-contain"
                    />

                  </div>
                </div>

                <p className="text-white text-sm font-lato justify-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default SectionFour;