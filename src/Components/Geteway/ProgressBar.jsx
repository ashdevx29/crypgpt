export default function ProgressBar({ label, percentage }) {
  return (
    <div className="mb-6 w-full">
      
      {/* Label Top */}
      <p className="text-white text-[15px] md:text-2xl text-left  mb-1">
        {label}
      </p>

      {/* Bar + Percentage Row */}
      <div className="flex items-center gap-1 md:gap-12">
        
        {/* Progress Bar */}
        <div className="flex-1 h-[4px] w-[70%] bg-white rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${percentage}%`,
              background:
                "linear-gradient(180deg, #FDF803 0%, #E5AB24 100%)",
            }}
          />
        </div>

        {/* Percentage Right Side */}
        <span className="text-white text-m md:text-2xl  min-w-[50px] text-right">
          {percentage}%
        </span>

      </div>

    </div>
  );
}