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

const data = [
  { name: "2/23", value: 50000 },
  { name: "4/23", value: 400000 },
  { name: "6/23", value: 350000 },
  { name: "8/23", value: 1200000 },
  { name: "10/23", value: 700000 },
  { name: "12/23", value: 400000 },
  { name: "2/24", value: 350000 },
];

function ProgressCircle({ percent, color }) {
  const radius = 36;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#FFFFFF0D"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="12"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function BurnDashboard() {
  return (
    <section className="w-full text-white py-10 ">
      <div className="max-w-[1600px] mx-auto">
        
        {/* 50 / 25 / 25 Layout */}
        <div className="flex flex-col xl:flex-row gap-6">

          {/* LEFT 50% */}
          <div className="xl:w-1/2 bg-[#121214] rounded-3xl p-6 border border-[#FFFFFF0D]">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  All Time Burn
                </h3>
                <MdInfoOutline className="text-gray-400" size={18} />
              </div>

              <div className="flex bg-[#0B0F17] p-1 rounded-xl text-xs">
                <button className="px-4 py-1 rounded-lg bg-[#FFFFFF0D]">
                  YEAR
                </button>
                <button className="px-4 py-1 text-gray-400">
                  MONTH
                </button>
                <button className="px-4 py-1 text-gray-400">
                  WEEK
                </button>
                <button className="px-4 py-1 text-gray-400">
                  DAY
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient
                      id="burnGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#FDF803"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="100%"
                        stopColor="#FDF803"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#FFFFFF0D"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />

                  <YAxis
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111827",
                      border: "1px solid #FFFFFF0D",
                      borderRadius: "12px",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FDF803"
                    strokeWidth={3}
                    fill="url(#burnGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* MIDDLE 25% */}
          <div className="xl:w-1/4 flex flex-col gap-6">

            {/* Total Burned */}
            <div className="bg-[#121214] rounded-3xl p-6 border border-[#FFFFFF0D]">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm text-gray-300">
                  Total Time Burned
                </h4>
                <MdInfoOutline className="text-gray-400" size={16} />
              </div>

              <div className="flex items-center gap-6">
                <ProgressCircle percent={69} color="#FDF803" />

                <div>
                  <h2 className="text-2xl font-bold">
                    150M
                  </h2>
                  <p className="text-sm text-gray-400">
                    CrypGPT
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    0.0934% OF SUPPLY
                  </p>
                </div>
              </div>
            </div>

            {/* Burned Last Month */}
            <div className="bg-[#121214] rounded-3xl p-6 border border-[#FFFFFF0D]">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm text-gray-300">
                  Burned Last Month
                </h4>
                <MdInfoOutline className="text-gray-400" size={16} />
              </div>

              <div className="flex items-center gap-6">
                <ProgressCircle percent={1} color="#6B7280" />

                <div>
                  <h2 className="text-2xl font-bold">
                    50M
                  </h2>
                  <p className="text-sm text-gray-400">
                    CrypGPT
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    0.0092% OF SUPPLY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 25% */}
          <div className="xl:w-1/4 bg-[#121214] rounded-3xl p-6 border border-[#FFFFFF0D]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold">
                Main Burners
              </h3>
              <MdInfoOutline className="text-gray-400" size={16} />
            </div>

            <div className="flex flex-col gap-4">
              {[
                "0x6406a958...9f02d630be",
                "0x9d65b2c0...c6b7f83ece",
                "0x338d57a3...30c37400b9",
              ].map((addr, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#111827] p-4 rounded-xl hover:bg-[#FFFFFF0D] transition"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF0D] text-yellow-400 text-sm font-bold">
                    {i + 1}
                  </div>
                  <p className="text-xs text-gray-300 truncate">
                    {addr}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}