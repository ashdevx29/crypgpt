import smallImg from "../../assets/SectionThree/small-card-img.png";
import mediumImg from "../../assets/SectionThree/medium-card-img.png";

export default function SectionThree() {
  return (
    <section className="relative bg-[#0A0A0A] text-white py-4 md:py-15  overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-16 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col text-center lg:text-left z-10">
           <h2 className="font-kanit leading-[1.4] mb-4 text-[clamp(32px,5vw,60px)]">
  Empowering <span className="text-yellow-400">Business</span>{" "}
  with Blockchain
</h2>

           <p className="text-[#FFFFFFA1] font-[300] mb-10 pl-[20px] text-[clamp(16px,1.2vw,20px)] max-w-lg mx-auto lg:mx-0">
  We help businesses unlock growth, security, and efficiency
  through advanced crypto and blockchain technologies that
  redefine how value is exchanged.
</p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 px-4">
              <StatCard title="12.8%" label="Market Growth" />
              <StatCard title="420M" label="Users worldwide" />
              <StatCard title="$1 T" label="Crypto assets" className="col-span-2 sm:col-span-1" />
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-yellow-400 text-[#0A0A0A] px-4 md:px-20 py-2 md:py-4 rounded-full  hover:bg-yellow-300 transition-colors duration-300 shadow-lg shadow-yellow-400/10 text-[18px] ">
                Unlock Your Future with Cryptocurrency Today
              </button>
            </div>
          </div>

          {/* ================= RIGHT DASHBOARD ================= */}
<div className="w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
  <div className="relative w-full max-w-[640px] lg:h-[500px] flex flex-col gap-6 lg:block">

    {/* 1️⃣ Small Card */}
    <div className="
      w-full 
      lg:absolute lg:top-[15%] lg:left-[5%] lg:w-[60%]
      bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl p-6 
      border border-white/10 z-30 shadow-2xl
    ">
      <div className="h-28 flex items-center justify-center overflow-hidden rounded-lg">
        <img src={smallImg} alt="Chart" className="max-w-full max-h-full object-contain" />
      </div>

      <p className="text-white text-[17px] font-[300] mt-4">
        Whether you're a startup looking for company aiming support
      </p>
    </div>

    {/* 2️⃣ Medium Card */}
    <div className="
      w-full
      lg:absolute lg:bottom-[-4%] lg:left-[-3%] lg:w-[50%]
      bg-[#1e1e1e] rounded-2xl p-6 border border-white/10 
      z-30 shadow-2xl
    ">
      <p className="text-[#A9A9A9] text-[17px] font-[300]">
        Blockchain Transactions (6 Month)
      </p>

      <h3 className="text-5xl font-[300] mt-1 text-white">1 million</h3>

      <div className="h-20 mt-4">
        <img src={mediumImg} alt="Medium Chart" className="w-full h-full object-contain" />
      </div>
    </div>

    {/* 3️⃣ Right Large Card */}
   <div className="
  w-full
  lg:absolute lg:top-[18%] lg:right-[5%] lg:w-[40%]
  z-40
">

  {/* Card */}
  <div className="bg-[#1e1e1e] rounded-2xl p-7 border border-white/10 shadow-2xl">
    <h4 className="text-white text-[19px] font-[300] mb-4">
      Faster Cryptocurrency Transactions
    </h4>

    <div className="space-y-3 mb-6">
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-yellow-400 w-[65%]" />
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-yellow-400 w-[92%]" />
      </div>
    </div>

    <p className="text-[#A9A9A9] text-[18px] font-[300] uppercase">OVER</p>
    <h3 className="text-6xl font-[300] text-white">65K</h3>
    <p className="text-[#A9A9A9] font-[300] text-[18px] mt-1">
      Transactions per second
    </p>
  </div>

  {/* 👇 Paragraph Below Card */}
  <p className="text-[#A9A9A9] text-[16px] font-[300] mt-6 ">
    Our platform offers cutting-edge tools and technologies that empower users.
  </p>

</div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ title, label, className = "" }) {
  return (
    <div className={`bg-[#111] border border-[#FFFFFF2B] px-4 py-4 rounded-2xl text-center lg:text-left ${className}`}>
      <p className="text-gray-500 text-[17px]  uppercase ">OVER</p>
      <h3 className=" mt-1 text-[clamp(20px,2vw,26px)] text-white">
        {title}
      </h3>
      <p className="text-[#A9A9A9] mt-1 text-[clamp(15px,1.7vw,19px)]">
        {label}
      </p>
    </div>
  );
}