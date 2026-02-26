import { motion } from "framer-motion";

export default function ProgressBar({ label, percentage }) {
  return (
    <div className="mb-6 max-[300px]:text-sm">
      <div className="flex justify-between text-gray-400 mb-2 text-[20px] sm:text-[24px] leading-[120%] font-kanit">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)]"
        />
      </div>
    </div>
  );
}