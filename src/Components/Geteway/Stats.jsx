export default function Stats({ className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-6 sm:gap-40 mt-8  max-[300px]:gap-4 ${className}`}> 
      <div>
        <h2 className="text-[25px] md:text-[40px] sm:text-[40px] mb-8 ">17.0K+</h2>
        <p className="text-[#FFFFFF] text-[18px] sm:text-[20px] mt-5">smart Innovation</p>
      </div>

      <div>
        <h2 className="text-[25px] md:text-[40px] mb-8">47.0K+</h2>
        <p className="text-[#FFFFFF] text-[18px] sm:text-[20px] mt-5">startup looking</p>
      </div>
    </div>
  );
}