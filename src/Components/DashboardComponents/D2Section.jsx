import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { MdInfoOutline } from "react-icons/md";
import { useState } from "react";

/* =========================
   DATA SETS
========================= */

const yearlyData = [
  { name: "2021", value: 400000 },
  { name: "2022", value: 800000 },
  { name: "2023", value: 1200000 },
  { name: "2024", value: 900000 },
];

const monthlyData = [
  { name: "Jan", value: 200000 },
  { name: "Feb", value: 350000 },
  { name: "Mar", value: 500000 },
  { name: "Apr", value: 400000 },
  { name: "May", value: 650000 },
  { name: "Jun", value: 700000 },
];

const weeklyData = [
  { name: "W1", value: 150000 },
  { name: "W2", value: 300000 },
  { name: "W3", value: 200000 },
  { name: "W4", value: 450000 },
];

const dailyData = [
  { name: "Mon", value: 40000 },
  { name: "Tue", value: 90000 },
  { name: "Wed", value: 70000 },
  { name: "Thu", value: 120000 },
  { name: "Fri", value: 100000 },
  { name: "Sat", value: 60000 },
  { name: "Sun", value: 150000 },
];

/* =========================
   NUMBER FORMATTER
========================= */

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

function SegmentedCircle({ percent = 0.69, color = "#FDF803", label = "$/YEAR" }) {
  const radius = 44;
  const stroke = 8;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;

  // 4 segments
  const segments = 4;

  // Total space per segment
  const segmentLength = circumference / segments;

  // Make arc 65% of each segment, gap 35%
  const dashLength = segmentLength * 0.65;
  const gapLength = segmentLength * 0.35;

  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-[100px] h-[100px] flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >
        {/* Base Ring */}
        <circle
          stroke="#2A2F3A"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* 4 Big Segments */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.6s ease",
          }}
        />
      </svg>

      {/* Center Text */}
      <div className="absolute flex flex-col items-center">
        <span className="text-base font-bold text-[#F1F5F9]">
          {percent}%
        </span>
        <span className="text-[8px] text-[#64748B] tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}

// function SegmentedCircle({ percent = 0.69, color = "#FDF803", label = "$/YEAR" }) {
//   const radius = 44;
//   const stroke = 8;
//   const normalizedRadius = radius - stroke;
//   const circumference = 2 * Math.PI * normalizedRadius;

//   const progress = percent;
//   const strokeDashoffset =
//     circumference - (progress / 100) * circumference;

//   return (
//     <div className="relative w-[100px] h-[100px] flex items-center justify-center">
//       <svg
//         height={radius * 2}
//         width={radius * 2}
//         className="rotate-[-90deg]"
//       >
//         {/* Base Ring */}
//         <circle
//           stroke="#2A2F3A"
//           fill="transparent"
//           strokeWidth={stroke}
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />

//         {/* Segmented Progress */}
//         <circle
//           stroke={color}
//           fill="transparent"
//           strokeWidth={stroke}
//           strokeDasharray="14 20"
//           strokeLinecap="round"
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//           strokeDashoffset={strokeDashoffset}
//           style={{
//             transition: "stroke-dashoffset 0.6s ease",
//           }}
//         />
//       </svg>

//       {/* Center Text */}
//       <div className="absolute flex flex-col items-center">
//         <span className="text-base font-bold text-[#F1F5F9]">
//           {percent}%
//         </span>
//         <span className="text-[8px] text-[#64748B] tracking-wide">
//           {label}
//         </span>
//       </div>
//     </div>
//   );
// }

/* =========================
   MAIN COMPONENT
========================= */

export default function BurnDashboard() {
  const [filter, setFilter] = useState("YEAR");

  const getData = () => {
    switch (filter) {
      case "MONTH":
        return monthlyData;
      case "WEEK":
        return weeklyData;
      case "DAY":
        return dailyData;
      default:
        return yearlyData;
    }
  };

  return (
    <section className="w-full text-white py-4 sm:py-10">
      <div className="max-w-[1600px] mx-auto">

        <div className="flex flex-col xl:flex-row gap-6">

          {/* ================= LEFT ================= */}
          <div className="w-full xl:w-1/2 bg-[#121214] rounded-3xl p-2 sm:p-6 border border-[#FFFFFF0D] overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg inter text-[#F1F5F9] font-bold">All Time Burn</h3>
                <MdInfoOutline className="text-[#64748B]" size={20} />
              </div>

              <div className="flex bg-[#00000066] p-1 rounded-xl text-xs">
                {["YEAR", "MONTH", "WEEK", "DAY"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`px-4 py-1.5 rounded-lg transition-all duration-300 ${filter === item
                      ? "bg-[#3F3F46] text-white"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CHART */}
            <div className="w-full h-[250px] sm:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={getData()}
                  margin={{ top: 10, right: 5, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="burnGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FDF8034D" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#00000000" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#FFFFFF0D"
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    stroke="#6B7280"
                    tickFormatter={formatNumber}
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip
                    formatter={(value) => formatNumber(value)}
                    contentStyle={{
                      backgroundColor: "#111827",
                      border: "1px solid #FFFFFF0D",
                      borderRadius: "12px",
                      color: "white",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FDF803"
                    strokeWidth={3}
                    fill="url(#burnGradient)"
                    dot={false}
                    activeDot={{ r: 6 }}
                    isAnimationActive
                    animationDuration={600}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full xl:w-1/2 flex flex-col lg:flex-row gap-6">

            {/* MIDDLE */}
            <div className="w-full lg:w-1/2 xl:w-[50%] flex flex-col gap-6">

              {/* ================= TOTAL BURNED ================= */}
              <div className="bg-[#121214] rounded-3xl p-8 border border-[#FFFFFF0D]">

                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-lg  inter text-white">
                    Total Time Burned
                  </h4>
                  <MdInfoOutline className="text-[#475569]" size={20} />
                </div>

                <div className="flex items-center gap-10">

                  <SegmentedCircle percent={0.69} color="#FDF803" />

                  <div>
                    <h2 className="text-2xl font-bold inter text-[#F1F5F9]">
                      150M
                    </h2>
                    <p className="text-base  text-[#FFFFFF] mt-1">
                      CrypGPT
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-1">
                      0.0934% OF SUPPLY
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= LAST MONTH ================= */}
              <div className="bg-[#121214] rounded-3xl p-8 border border-[#FFFFFF0D]">

                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-sm font-medium text-[#FFFFFF]">
                    Burned Last Month
                  </h4>
                  <MdInfoOutline className="text-[#475569]" size={20} />
                </div>

                <div className="flex items-center gap-10">

                  <SegmentedCircle percent={0.01} color="#64748B" />

                  <div>
                    <h2 className="text-2xl font-bold text-[#F1F5F9]">
                      50M
                    </h2>
                    <p className="text-base  text-[#FFFFFF] mt-1">
                      CrypGPT
                    </p>
                    <p className="text-[10px] text-[#64748B] inter mt-1">
                      0.0092% OF SUPPLY
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 xl:w-[50%] bg-[#121214] rounded-3xl p-6 border border-[#FFFFFF0D]">
              <div className="flex justify-between mb-6">
                <h3 className="text-lg text-[#F1F5F9] font-bold inter">Main Burners</h3>
                <MdInfoOutline size={16} />
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "0x6406a958...9f02d630be",
                  "0x9d65b2c0...c6b7f83ece",
                  "0x338d57a3...30c37400b9",
                ].map((addr, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#1C1C1F99] p-4 rounded-xl hover:bg-[#1C1C1F] transition"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#8B5CF633] text-[#FDF803] text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-{#CBD5E1} jet truncate">
                      {addr}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}