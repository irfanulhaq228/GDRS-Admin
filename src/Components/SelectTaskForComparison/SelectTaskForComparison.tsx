import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TaskComparisonGraph from "../TaskComparisonGraph/TaskComparisonGraph";

const SelectTaskForComparison = () => {
  const [box1show, setBox1Show] = useState(false);
  const [box2show, setBox2Show] = useState(false);
  return (
    <div className="mt-5 px-1 xl:px-16">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
        <p className="text-[13px] font-[600] text-[--main-dark-color] capitalize">
          Select Task For comparison
        </p>
        <button
          className="rounded-[5px] h-[31px] px-2 border border-[#00004B] text-[11px] font-[500] text-white w-full sm:w-[112px]"
          style={{
            backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
          }}
        >
          Reset Data
        </button>
      </div>
      <div className="mt-4 flex flex-col xl:flex-row xl:gap-10 gap-5">
        {/* box-1 */}
        <div
          className={`flex-1 bg-white rounded-[4px] flex flex-col outline outline-1 outline-gray-200 ${
            box1show ? "h-full" : "h-[max-content]"
          }`}
        >
          <div
            className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3 sm:px-4 text-white text-[14px] cursor-pointer font-[500]"
            onClick={() => setBox1Show(!box1show)}
          >
            <p>Task 1 Selected</p>
            <IoIosArrowDown
              className={`text-[20px] transition-transform duration-500 ${
                box1show ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`${
              !box1show ? "max-h-0" : "max-h-[400px] my-3"
            } px-2 sm:px-3  flex flex-col gap-2 flex-1 transition-all duration-500 overflow-hidden`}
          >
            <BoxData
              label={"Do your house chores before 4PM"}
              value={"30 Pts"}
            />
          </div>
        </div>
        {/* box-2 */}
        <div
          className={`flex-1 bg-white rounded-[4px] flex flex-col outline outline-1 outline-gray-200 ${
            box2show ? "h-full" : "h-[max-content]"
          }`}
        >
          <div
            className="bg-[#6C82FF] rounded-[4px] h-[40px] flex items-center justify-between px-3 sm:px-4 text-white text-[14px] cursor-pointer font-[500]"
            onClick={() => setBox2Show(!box2show)}
          >
            <p>Task 5 Selected</p>
            <IoIosArrowDown
              className={`text-[20px] transition-transform duration-500 ${
                box2show ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`${
              !box2show ? "max-h-0" : "max-h-[400px] my-3"
            } px-2 sm:px-3  flex flex-col gap-2 flex-1 transition-all duration-500 overflow-hidden`}
          >
            <BoxData label={"Do your Homework before 9PM"} value={"30 Pts"} />
          </div>
        </div>
      </div>
      <TaskComparisonGraph />
      <div className="mt-6 flex flex-col xl:flex-row xl:gap-10 gap-5">
        <div className="flex-1 flex flex-col gap-1">
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-[var(--main-bg-color)]">
            <span>Points Earned in selected period</span>
            <span>10,234 pts</span>
          </p>
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-white">
            <span>Task Count in selected period</span>
            <span>799 times</span>
          </p>
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-[var(--main-bg-color)]">
            <span>Average Task Completion Rate</span>
            <span>60.5%</span>
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-[var(--main-bg-color)]">
            <span>Points Earned in selected period</span>
            <span>10,234 pts</span>
          </p>
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-white">
            <span>Task Count in selected period</span>
            <span>902 times</span>
          </p>
          <p className="h-[52px] rounded-[5px] text-[12px] px-2 sm:px-4 flex justify-between items-center font-[500] bg-[var(--main-bg-color)]">
            <span>Average Task Completion Rate</span>
            <span>83.9%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectTaskForComparison;

const BoxData = ({ label, value }: { label: string; value: string }) => {
  return (
    <p className="text-[12px] font-[500] flex items-center justify-between hover:bg-gray-100 p-1 rounded-[4px] cursor-default">
      <span>{label}</span>
      <span>{value}</span>
    </p>
  );
};
