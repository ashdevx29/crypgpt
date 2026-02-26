import smallImg from "../../assets/SectionThree/small-card-img.png";
import mediumImg from "../../assets/SectionThree/medium-card-img.png";

export default function SectionThree() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col text-center lg:text-left z-10">
            <h2 className="font-kanit leading-[1.1] mb-6 text-[clamp(32px,5vw,60px)] font-semibold">
              Empowering <span className="text-yellow-400">Business</span>
              <br />
              with Blockchain
            </h2>

            <p className="text-gray-400 mb-10 text-[clamp(16px,1.2vw,18px)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help businesses unlock growth, security, and efficiency
              through advanced crypto and blockchain technologies that
              redefine how value is exchanged.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <StatCard title="12.8%" label="Market Growth" />
              <StatCard title="420M" label="Users worldwide" />
              <StatCard title="$1 T" label="Crypto assets" className="col-span-2 sm:col-span-1" />
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300 shadow-lg shadow-yellow-400/10">
                Unlock Your Future with Cryptocurrency Today
              </button>
            </div>
          </div>

          {/* ================= RIGHT DASHBOARD ================= */}
          <div className="w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* RESPONSIVE LOGIC:
                1. LG+ (>=1024px): Relative container with absolute overlapping cards.
                2. MD to LG (768px - 1023px): Flex row, no overlap.
                3. Below MD (<768px): Flex column stack.
            */}
            <div className="relative w-full flex flex-col md:flex-row lg:block gap-6 md:items-stretch lg:h-[550px] max-w-[1000px] lg:max-w-[580px]">
              
              {/* 1. Small Card */}
              <div className="md:flex-1 lg:absolute lg:top-0 lg:left-[5%] lg:w-[50%] bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 z-30 shadow-2xl">
                  <div className="h-28 sm:h-32 flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={smallImg} alt="Chart" className="max-w-full max-h-full object-contain" />
                  </div>
                  <p className="text-gray-300 text-xs mt-4 leading-relaxed text-center lg:text-left">
                    Whether you're a startup looking for company aimingo support
                  </p>
              </div>

              {/* 2. Medium Card */}
              <div className="md:flex-1 lg:absolute lg:bottom-0 lg:left-0 lg:w-[60%] bg-[#1e1e1e] rounded-2xl p-6 border border-white/10 z-20 shadow-2xl">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                  Blockchain Transactions (6 Month)
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">1 million</h3>
                <div className="h-20 mt-4 flex items-center justify-center">
                  <img src={mediumImg} alt="Medium Chart" className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-between mt-3 text-[9px] text-gray-500 font-bold uppercase">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>

              {/* 3. Large Card Group (Card + Text) */}
              <div className="md:flex-1 lg:absolute lg:top-[10%] lg:right-0 lg:w-[36%] flex flex-col z-40 lg:items-end">
                <div className="bg-[#1e1e1e] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-2xl mb-6 flex-1">
                  <h4 className="text-gray-300 text-xs mb-4 font-medium leading-tight">
                    Faster Cryptocurrency Transactions
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 w-[65%] rounded-full" />
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 w-[92%] rounded-full" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">OVER</p>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 tracking-tighter text-white">65K</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                    Transactions per second
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed md:hidden lg:block relative z-50 ml-4 lg:ml-6 text-right">
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
    <div className={`bg-[#111] border border-white/5 px-4 py-6 rounded-2xl text-center lg:text-left ${className}`}>
      <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em]">OVER</p>
      <h3 className="font-bold mt-1 text-[clamp(20px,2vw,26px)] text-white">
        {title}
      </h3>
      <p className="text-gray-400 mt-1 text-[clamp(11px,1.5vw,13px)]">
        {label}
      </p>
    </div>
  );
}