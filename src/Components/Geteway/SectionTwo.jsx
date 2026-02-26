import cubeImg from "../../assets/sectionTwo/gold_cube.png";

import immutableIcon from "../../assets/sectionTwo/immutable.png";
import securityIcon from "../../assets/sectionTwo/security.png";
import scalabilityIcon from "../../assets/sectionTwo/scalability.png";

export default function SectionTwo() {
  return (
    <section className="relative bg-black text-white px-6 lg:px-20 py-16">

      {/* ===== HEADING ===== */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-lato leading-tight">
          Powering Trust with{" "}
          <span className="text-yellow-400">Blockchain</span>
          <br />
          Technology
        </h2>
      </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-center">
          <img
            src={cubeImg}
            alt="Blockchain Cube"
            className="w-[80%] md:w-full max-w-[650px] drop-shadow-[0_0_40px_rgba(250,204,21,0.4)]"
          />
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-12">

          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-32 h-20 md:w-[200px] md:h-[100px] flex items-center justify-center">
              <img
                src={immutableIcon}
                alt="Immutable"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-kanit font-normal leading-[100%] mb-2 text-[clamp(20px,2.5vw,35px)]">
                Immutable & Decentralized
              </h3>
              <p className="font-poppins text-gray-400 leading-[120%] text-[clamp(16px,1.8vw,24px)]">
                Every transaction is recorded on a public ledger,
                eliminating single points of failure and ensuring
                transparent, tamper-proof operations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-32 h-20 md:w-[200px] md:h-[100px] flex items-center justify-center">
              <img
                src={securityIcon}
                alt="Security"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-kanit font-normal leading-[100%] mb-2 text-[clamp(20px,2.5vw,35px)]">
                Built-In Security
              </h3>
              <p className="font-poppins text-gray-400 leading-[120%] text-[clamp(16px,1.8vw,24px)]">
                Leveraging advanced cryptographic protocols,
                blockchain secures your data and digital assets—
                protecting every interaction across the network.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-32 h-20 md:w-[200px] md:h-[100px] flex items-center justify-center">
              <img
                src={scalabilityIcon}
                alt="Scalability"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-kanit font-normal leading-[100%] mb-2 text-[clamp(20px,2.5vw,35px)]">
                Future-Ready Scalability
              </h3>
              <p className="font-poppins text-gray-400 leading-[120%] text-[clamp(16px,1.8vw,24px)]">
                Designed to grow with demand, our blockchain
                infrastructure supports everything from micro-
                transactions to enterprise-grade systems—
                efficiently and reliably.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}