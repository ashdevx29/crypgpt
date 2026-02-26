export default function Stats({ className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-10 sm:gap-40 mt-20 max-[300px]:gap-4 ${className}`}> 
      <div>
        <h2 className="text-[32px] sm:text-[40px] font-bold">17.0K+</h2>
        <p className="text-gray-500 text-[18px] sm:text-[20px] mt-5">smart Innovation</p>
      </div>

      <div>
        <h2 className="text-[40px] font-bold">47.0K+</h2>
        <p className="text-gray-500 text-[20px] mt-5">startup looking</p>
      </div>
    </div>
  );
}