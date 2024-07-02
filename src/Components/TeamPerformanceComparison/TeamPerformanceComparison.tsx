import { IoIosArrowDown } from "react-icons/io";

const TeamPerformanceComparison = () => {
  return (
    <div className="mt-4 flex flex-col xl:flex-row xl:gap-10 gap-5">
      <div className="flex-1 bg-white rounded-[4px]">
        <div className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-4 text-white text-[14px] cursor-pointer font-[500]">
          <p>Awesome 4 Squad</p>
          <IoIosArrowDown />
        </div>
        <div className="px-4 my-5 flex flex-col gap-4">
            <p className="text-[12px] font-[500] flex items-center justify-between">
                <span>Average Daily Points</span>
                <span>120 Pts</span>
            </p>
            <p className="text-[12px] font-[500] flex items-center justify-between">
                <span>Average Daily Points</span>
                <span>120 Pts</span>
            </p>
            <p className="text-[12px] font-[500] flex items-center justify-between">
                <span>Average Daily Points</span>
                <span>120 Pts</span>
            </p>
            <p className="text-[12px] font-[500] flex items-center justify-between">
                <span>Average Daily Points</span>
                <span>120 Pts</span>
            </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3.5 text-white text-[14px] cursor-pointer font-[500]">
          <p>Dreamers Squad</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3.5 text-white text-[14px] cursor-pointer font-[500]">
          <p>Select Team</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default TeamPerformanceComparison;
