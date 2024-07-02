import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePageNavigation, updateSidebar } from "../../Features/Features";
import BarGraphAndAnalyticsPeriod from "../../Components/TeamAnalyticsComponents/BarGraphAndAnalyticsPeriod";
import AnalyticalPeriodSelection from "../../Components/AnalyticalPeriodSelection/AnalyticalPeriodSelection";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

const TeamAnalytics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("teamAnalytics"));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className="flex-1 bg-[var(--main-bg-color)] min-h-screen py-7 px-[15px] sm:px-[30px] pt-[48px]">
      <button
        className="absolute top-5 left-[18px] text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      {/* header */}
      <div className="h-[45px] border-b-[2px] flex items-center">
        <p className="flex gap-1 items-center text-[12px] text-gray-500 font-[600]">
          <span>Team Analytics</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span className="text-[--main-dark-color]">Awesome 4</span>
        </p>
      </div>
      {/* team data */}
      <div className="px-3 sm:px-4 py-6 bg-white rounded-[4px] mt-6">
        <p className="font-[600] text-[--main-dark-color] text-[15px]">
          Team Analytical Data
        </p>
        {/* Team Performance Analytics */}
        <div className="bg-[--main-bg-color] px-2 sm:px-5 py-2 rounded-[4px] mt-3 flex flex-col sm:flex-row gap-1.5 justify-between items-center">
          <p className="text-[13px] text-[var(--main-dark-color)] font-[600] text-center sm:text-start">
            Team Performance Analytics
          </p>
          <select className="bg-transparent border-[2px] border-[var(--main-dark-color)] rounded-[4px] text-[13px] py-0.5 px-1 text-[var(--main-dark-color)] font-[600] cursor-pointer">
            <option disabled>Select</option>
            <option selected>Awesome 4</option>
            <option selected>Awesome 3</option>
          </select>
        </div>
        {/* Points Boxes */}
        <div className="flex flex-col xl:flex-row justify-between mt-6 gap-2">
          <div className="rounded-[4px] bg-[--main-bg-color] h-[85px] px-3 xl:px-9 xl:w-[max-content] flex items-center flex-col justify-center text-[14px] font-[600] gap-0.5">
            <p className="text-center text-[var(--main-dark-color)]">
              Team Rank
            </p>
            <p className="text-center">#6</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 justify-between gap-2">
            <div className="rounded-[4px] bg-[--main-bg-color] h-[85px] px-3 xl:px-9 xl:min-w-[max-content] flex items-center flex-col justify-center text-[14px] font-[600] gap-0.5">
              <p className="text-center text-[var(--main-dark-color)]">
                Total Points
              </p>
              <p className="text-center">5638</p>
            </div>
            <div className="rounded-[4px] bg-[--main-bg-color] h-[85px] px-3 xl:px-9 xl:min-w-[max-content] flex items-center flex-col justify-center text-[14px] font-[600] gap-0.5">
              <p className="text-center text-[var(--main-dark-color)]">
                Avg Daily Pts
              </p>
              <p className="text-center">90</p>
            </div>
            <div className="rounded-[4px] bg-[--main-bg-color] h-[85px] px-3 xl:px-9 xl:min-w-[max-content] flex items-center flex-col justify-center text-[14px] font-[600] gap-0.5">
              <p className="text-center text-[var(--main-dark-color)]">
                Task Ratio
              </p>
              <p className="text-center">High</p>
            </div>
            <div className="rounded-[4px] bg-[--main-bg-color] h-[85px] px-3 xl:px-9 xl:min-w-[max-content] flex items-center flex-col justify-center text-[14px] font-[600] gap-0.5">
              <p className="text-center text-[var(--main-dark-color)]">
                Pts Per Task
              </p>
              <p className="text-center">30 Pts</p>
            </div>
          </div>
        </div>
        {/* more info's */}
        <div className="mt-6 p-3 sm:p-6 rounded-[4px] bg-[--main-bg-color]">
          {/* bar graph & Analytics Period */}
          <div className="flex flex-col xl:flex-row xl:items-end gap-5 xl:gap-10">
            <BarGraphAndAnalyticsPeriod />
            <AnalyticalPeriodSelection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAnalytics;
