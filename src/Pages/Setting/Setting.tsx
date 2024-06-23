import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updatePageNavigation, updateSidebar } from "../../Features/Features";

import ProfileSection from "./ProfileSection";
import TeamSetting from "./TeamSetting";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const Setting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("settings"));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className="flex-1 bg-[var(--main-bg-color)] min-h-screen p-7 pt-[48px]">
      <button
        className="absolute top-5 left-8 text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <div className="bg-white px-10 py-8 rounded-[8px] shadow-md">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between border-b-[2px] pb-4 sm:items-center">
          <p className="text-[17px] font-[600] text-[var(--main-text-color)]">
            Account Setting
          </p>
          <div className="flex gap-[17px] justify-end">
            <button className="rounded-[5px] h-[30px] w-[100px] border border-[#00004B] text-[11px] font-[600] text-[var(--main-text-color)]">
              Cancel
            </button>
            <button
              className="rounded-[5px] h-[30px] w-[100px] border border-[#00004B] text-[11px] font-[500] text-white"
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
            >
              Save Data
            </button>
          </div>
        </div>
        {/* profile-section */}
        <ProfileSection />
        {/* Teams Setting */}
        <TeamSetting />
      </div>
    </div>
  );
};

export default Setting;
