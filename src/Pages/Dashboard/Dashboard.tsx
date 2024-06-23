import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePageNavigation, updateSidebar } from "../../Features/Features";
import Navbar from "../../Components/Navbar/Navbar";

import svg1 from "../../assets/svg/dashbaord-teams-icon.svg";
import member1 from "../../assets/images/dashboard-member-1.png";
import member2 from "../../assets/images/dashboard-member-2.png";
import member3 from "../../assets/images/dashboard-member-3.png";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("dashboard"));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className="flex-1 pb-10 bg-[var(--main-bg-color)] min-h-screen p-1">
      <button
        className="absolute top-5 left-8 text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <Navbar />
      <div className="mt-10 mx-[30px] flex flex-col xl:flex-row gap-[10px] justify-between 2xl:justify-center 2xl:gap-[50px] text-[var(--main-text-color)]">
        <div
          className="bg-white rounded-[8px] w-[100%] xl:w-[305px] h-[175px] flex flex-col justify-end px-[30px] pb-[15px]"
          style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
        >
          <div className="flex gap-2">
            <img src={svg1} />
            <p className="text-[16px] font-[600]">Total Teams so Far</p>
          </div>
          <p className="text-[12px] text-[#434343] mt-[15px]">
            There are total six teams created so far fighting for top position
          </p>
          <div>
            <p className="text-[12px] bg-[var(--main-bg-color)] w-[max-content] px-6 rounded-full font-[500] h-[28px] leading-[28px] mt-[25px] text-black">
              May 6, 2024
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-[8px] w-[100%] xl:w-[305px] h-[175px] flex flex-col justify-end px-[30px] pb-[15px]"
          style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
        >
          <div className="flex gap-2">
            <img src={svg1} />
            <p className="text-[16px] font-[600]">Total Members so Far</p>
          </div>
          <p className="text-[12px] text-[#434343] mt-[15px]">
            There are total seven hundred fifty five members so far fighting for
            top position
          </p>
          <div className="mt-[25px] flex justify-between relative">
            <p className="text-[12px] bg-[var(--main-bg-color)] w-[max-content] px-6 rounded-full font-[500] h-[28px] leading-[28px] text-black">
              May 6, 2024
            </p>
            <div>
              <img src={member1} className="absolute right-[45px]" />
              <img src={member2} className="absolute right-[30px]" />
              <img src={member3} className="absolute right-[15px]" />
              <p className="absolute right-0 w-[27px] h-[27px] border-[1px] border-white rounded-full bg-[#00004B] text-[8px] text-white leading-[27px] text-center">
                755
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-[8px] w-[100%] xl:w-[305px] h-[175px] flex flex-col justify-end px-[30px] pb-[15px]"
          style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
