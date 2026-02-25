import React from "react";
import img1 from "../../assets/Dashboard/dash1.png";
import img2 from "../../assets/Dashboard/dash2.png";
import img3 from "../../assets/Dashboard/dash3.png";
import img4 from "../../assets/Dashboard/dash4.png";
import { IoMdInformationCircleOutline } from "react-icons/io";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

/* ================= SPARK DATA ================= */

const sparkUp = [
  { value: 10 },
  { value: 20 },
  { value: 15 },
  { value: 30 },
  { value: 25 },
  { value: 40 },
];

const sparkDown = [
  { value: 40 },
  { value: 30 },
  { value: 35 },
  { value: 20 },
  { value: 25 },
  { value: 15 },
];

/* ================= MAIN CHART DATA ================= */

const chartData = [
  { name: "2/23", value: 200 },
  { name: "4/23", value: 400 },
  { name: "6/23", value: 300 },
  { name: "8/23", value: 1200 },
  { name: "10/23", value: 800 },
  { name: "12/23", value: 600 },
  { name: "2/24", value: 700 },
];

/* ================= STAT CARD ================= */

function StatCard({ img, symbol, name, price, change, data }) {
  const isPositive = change > 0;

  return (
    <div className="bg-[#121214] h-28 border border-gray-600 rounded-2xl p-4 hover:border-yellow-500 transition flex justify-between items-center">
      {/* Left */}
      <div className="flex items-center gap-3">
        <img src={img} alt={symbol} className="w-10 h-10 rounded-full" />

        <div>
          <div className="text-s text-gray-400 ">{symbol}</div>
          <div className="text-white text-lg max-w-[100px] ">{name}</div>

          
        </div>

      </div>
      <div className="flex flex-col gap-1 mt-1">
  {/* PRICE */}
  <span className="text-white font-bold text-m jetbrains">
    {price}
  </span>

  {/* CHANGE */}
  <span
    className={`text-s font-medium inter ${
      isPositive ? "text-green-400" : "text-red-400"
    }`}
  >
    {isPositive ? "+" : ""}
    {change}%
  </span>
  
</div>

      {/* Right Mini Graph */}
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? "#22c55e" : "#ef4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ title, desc, highlight }) {
  return (
    <div
      className={`rounded-xl p-5 border transition cursor-pointer ${
        highlight
          ? "bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 border-yellow-500"
          : "bg-[#111] border-gray-800 hover:border-yellow-500"
      }`}
    >
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>
    </div>
  );
}

/* ================= DASHBOARD ================= */

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6 ">
      {/* ================= TOP CRYPTO CARDS ================= */}
      <div className="stat-cards-marquee-container mb-8">
        <div className="stat-cards-marquee">
          <StatCard
            img={img3}
            symbol="NEAR"
            name="Near Protocol"
            price="1.01"
            change={-4.33}
            data={sparkDown}
          />

          <StatCard
            img={img4}
            symbol="CrypGPT"
            name="CrypGPT AI"
            price="0.01"
            change={6.27}
            data={sparkUp}
          />

          <StatCard
            img={img4}
            symbol="RNDR"
            name="Render"
            price="1.42 "
            change={-3.55}
            data={sparkDown}
          />

          <StatCard
            img={img2}
            symbol="ETH"
            name="Ethereum"
            price="2450.11"
            change={1.22}
            data={sparkUp}
          />

          {/* Duplicate cards for seamless loop */}
          <StatCard
            img={img3}
            symbol="NEAR"
            name="Near Protocol"
            price="1.01"
            change={-4.33}
            data={sparkDown}
          />

          <StatCard
            img={img4}
            symbol="CrypGPT"
            name="CrypGPT AI"
            price="0.01"
            change={6.27}
            data={sparkUp}
          />

          <StatCard
            img={img4}
            symbol="RNDR"
            name="Render"
            price="1.42 USDT"
            change={-3.55}
            data={sparkDown}
          />

          <StatCard
            img={img2}
            symbol="ETH"
            name="Ethereum"
            price="2450.11"
            change={1.22}
            data={sparkUp}
          />
        </div>
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-xl p-6">
       <div className="flex items-center justify-between mb-4">
  
  {/* Left Side */}
  <h3 className="text-lg inter font-semibold flex items-center gap-2">
    All Time Burn
    <IoMdInformationCircleOutline className="text-gray-400 cursor-pointer text-[22px]" />
  </h3>

  {/* Right Side Buttons */}
  <div className="flex bg-black rounded-xl p-1">
    {["YEAR", "MONTH", "WEEK", "DAY"].map((item, index) => (
      <button
        key={index}
        className="px-4 py-1 text-sm text-gray-300 rounded-lg hover:bg-[#3F3F46] transition-all duration-200"
      >
        {item}
      </button>
    ))}
  </div>

</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="150%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#eab308"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <h4 className="text-gray-400 text-sm">Total Time Burned</h4>
            <div className="text-3xl font-bold text-yellow-400 mt-2">
              150M
            </div>
            <p className="text-gray-500 text-sm mt-1">
              0.00345% of supply
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <h4 className="text-gray-400 text-sm">Burned Last Month</h4>
            <div className="text-3xl font-bold text-yellow-400 mt-2">
              50M
            </div>
            <p className="text-gray-500 text-sm mt-1">
              0.00092% of supply
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <h4 className="text-gray-400 text-sm mb-3">
              Main Burners
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>1. 0x64a6a...963db</li>
              <li>2. 0x9d65c...f83ce</li>
              <li>3. 0x338d57...400b9</li>
            </ul>
          </div>
        </div>



        
      </div>

      {/* ================= BOTTOM FEATURES ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <FeatureCard title="Agent Forge" desc="AI Agent Marketplace" />
        <FeatureCard title="AI Marketplace" desc="AI Ecosystem" />
        <FeatureCard title="Compute Marketplace" desc="Cloud Solutions" />
        <FeatureCard title="CrypGPT PAD" desc="AI Launchpad" />
        <FeatureCard
          title="AI Agent TapHub"
          desc="AI Agent Game"
          highlight
        />
        <FeatureCard title="VPN Subscriptions" desc="Privacy Tools" />
        <FeatureCard
          title="CrypGPT Debit Card"
          desc="Decentralized Transactions"
        />
      </div>
    </div>
  );
}