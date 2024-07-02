import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TeamPerformanceComparison = () => {
  const [box1show, setBox1Show] = useState(false);
  const [box2show, setBox2Show] = useState(false);
  const [box3show, setBox3Show] = useState(false);
  return (
    <div className="mt-4 flex flex-col xl:flex-row xl:gap-10 gap-5">
      {/* box-1 */}
      <div
        className={`flex-1 bg-white rounded-[4px] flex flex-col ${
          box1show ? "h-full" : "h-[max-content]"
        }`}
      >
        <div
          className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3 sm:px-4 text-white text-[14px] cursor-pointer font-[500]"
          onClick={() => setBox1Show(!box1show)}
        >
          <p>Awesome 4 Squad</p>
          <IoIosArrowDown
            className={`text-[20px] transition-transform duration-500 ${
              box1show ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`${
            !box1show ? "max-h-0" : "max-h-[400px] my-4"
          } px-2 sm:px-3  flex flex-col gap-2 flex-1 transition-all duration-500 overflow-hidden`}
        >
          <BoxData label={"Daily Points"} value={"120 Pts"} />
          <BoxData label={"Task Priority"} value={"High"} />
          <BoxData label={"Task Completion Ratio"} value={"80.5%"} />
          <BoxData label={"Team Ranking"} value={"#6"} />
          <BoxData label={"Total Points"} value={"5638"} />
          <BoxData label={"Average pts per task"} value={"30 Pts"} />
        </div>
      </div>
      {/* box-2 */}
      <div
        className={`flex-1 bg-white rounded-[4px] flex flex-col ${
          box2show ? "h-full" : "h-[max-content]"
        }`}
      >
        <div
          className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3 sm:px-4 text-white text-[14px] cursor-pointer font-[500]"
          onClick={() => setBox2Show(!box2show)}
        >
          <p>Dreamers Squad</p>
          <IoIosArrowDown
            className={`text-[20px] transition-transform duration-500 ${
              box2show ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`${
            !box2show ? "max-h-0" : "max-h-[400px] my-4"
          } px-2 sm:px-3  flex flex-col gap-2 flex-1 transition-all duration-500 overflow-hidden`}
        >
          <BoxData label={"Daily Points"} value={"60 Pts"} />
          <BoxData label={"Task Priority"} value={"Medium"} />
          <BoxData label={"Task Completion Ratio"} value={"60.5%"} />
          <BoxData label={"Team Ranking"} value={"#10"} />
          <BoxData label={"Total Points"} value={"4258"} />
          <BoxData label={"Average pts per task"} value={"30 Pts"} />
        </div>
      </div>
      {/* box-3 */}
      <div
        className={`flex-1 bg-white rounded-[4px] flex flex-col ${
          box3show ? "h-auto" : "h-[max-content]"
        }`}
      >
        <div
          className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3 sm:px-4 text-white text-[14px] cursor-pointer font-[500]"
          onClick={() => setBox3Show(!box3show)}
        >
          <p>Select Team</p>
          <IoIosArrowDown
            className={`text-[20px] transition-transform duration-500 ${
              box3show ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`${
            !box3show ? "max-h-0" : "max-h-[400px] my-4"
          } px-2 sm:px-3 flex-1 flex items-center justify-center transition-all duration-500 overflow-hidden`}
        >
          <p className="text-[#BDBDBD] text-[15px] font-[500] py-4">
            No Team Selected
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformanceComparison;

const BoxData = ({ label, value }: { label: string; value: string }) => {
  return (
    <p className="text-[12px] font-[500] flex items-center justify-between hover:bg-gray-100 p-1 rounded-[4px] cursor-default">
      <span>{label}</span>
      <span>{value}</span>
    </p>
  );
};
