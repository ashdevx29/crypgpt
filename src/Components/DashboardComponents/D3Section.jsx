import { MdOutlineLocalFireDepartment } from "react-icons/md";
import {
  RiRobot2Line,
  RiBrainLine,
  RiCpuLine,
  RiBankCardLine,
  RiTelegram2Line,
} from "react-icons/ri";
import { LuEarthLock } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";

const features = [
  {
    icon: <RiRobot2Line size={22} />,
    percent: "5-10%",
    title: "Agent Forge",
    desc: "AI Agent Marketplace",
  },
  {
    icon: <RiBrainLine size={22} />,
    percent: "5-10%",
    title: "AI Marketplace",
    desc: "AI Ecosystem",
  },
  {
    icon: <RiCpuLine size={22} />,
    percent: "5-10%",
    title: "Compute Marketplace",
    desc: "Cloud Solutions",
  },
  {
    icon: <MdOutlineRocketLaunch size={22} />,
    percent: "10%",
    title: "CRYPGPT PAD",
    desc: "AI Launchpad",
  },
  {
    icon: <RiTelegram2Line size={22} />,
    percent: "100%",
    title: "AI Agent TapHub",
    desc: "AI Agent Game",
    highlight: true,
  },
  {
    icon: <LuEarthLock size={22} />,
    percent: "25%",
    title: "VPN Subscriptions",
    desc: "Privacy Tools",
  },
  {
    icon: <RiBankCardLine size={22} />,
    percent: "100%",
    title: "CRYPGPT DEBIT CARD",
    desc: "Decentralized Transactions",
    highlight: true,
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full bg-black py-10 ">
      <div className="max-w-[1400px] mx-auto">
        
        <div
          className="
          grid
          xs:grid-cols-1
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-7
          gap-4
          sm:gap-5
          lg:gap-6
        "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className={`
              relative
              rounded-2xl
              p-4 sm:p-5 lg:p-6
              min-h-[160px]
              border
              transition-all
              duration-300
              cursor-pointer
              group
              ${
                item.highlight
                  ? "bg-gradient-to-b from-[#FDF80333] to-[#121214] border-[#FDF803] border-b-4"
                  : "bg-[#121214] border-[#FFFFFF0D] hover:border-yellow-500"
              }
            `}
            >
              {/* Percent */}
              <div className="absolute top-7 right-6 flex items-center gap-1 text-sm font-semibold">
                <span className="text-white">{item.percent}</span>
                <MdOutlineLocalFireDepartment
                  size={16}
                  className="text-[#FDF803]"
                />
              </div>

              {/* Icon */}
              <div className="mb-5 text-[#FDF803]">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-white font-semibold text-sm leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-xs mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}