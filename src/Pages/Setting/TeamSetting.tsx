import { useState } from "react";

const TeamSetting = () => {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => {
    setEnabled(!enabled);
  };
  return (
    <div className="py-9 border-b-[2px]">
      <p className="text-[17px] font-[600] text-[var(--main-text-color)]">
        Teams Setting
      </p>
      <div className="flex flex-col gap-[20px] mt-7">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-24 xl:gap-36">
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow Team members to share team link
            </label>
            <button
              onClick={toggle}
              className={`w-[40px] h-[21px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabled ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow Team members to share team Rankings
            </label>
            <button
              onClick={toggle}
              className={`w-[40px] h-[21px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabled ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-24 xl:gap-36">
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow members to update team profile Picture
            </label>
            <button
              onClick={toggle}
              className={`w-[40px] h-[21px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabled ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow members to see their rankings
            </label>
            <button
              onClick={toggle}
              className={`w-[40px] h-[21px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabled ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-24 xl:gap-36">
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Show members alphabetically while sharing
            </label>
            <button
              onClick={toggle}
              className={`w-[40px] h-[21px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabled ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSetting;
