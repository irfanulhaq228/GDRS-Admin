import { useState } from "react";

const TeamSetting = () => {
  const [enabledOne, setEnabledOne] = useState(false);
  const [enabledTwo, setEnabledTwo] = useState(false);
  const [enabledThree, setEnabledThree] = useState(false);
  const [enabledFour, setEnabledFour] = useState(false);
  const [enabledFive, setEnabledFive] = useState(false);
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
              onClick={() => setEnabledOne(!enabledOne)}
              className={`relative w-[43px] min-h-[21px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabledOne ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabledOne ? "translate-x-5" : ""
                }`}
              />
              <span className="absolute text-white left-1.5 text-[9px] font-[500] top-[5px]">
                On
              </span>
              <span className="absolute text-white right-1.5 text-[9px] font-[500] top-[5px]">
                Off
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow Team members to share team Rankings
            </label>
            <button
              onClick={() => setEnabledTwo(!enabledTwo)}
              className={`relative w-[43px] min-h-[21px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabledTwo ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabledTwo ? "translate-x-5" : ""
                }`}
              />
              <span className="absolute text-white left-1.5 text-[9px] font-[500] top-[5px]">
                On
              </span>
              <span className="absolute text-white right-1.5 text-[9px] font-[500] top-[5px]">
                Off
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-24 xl:gap-36">
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow members to update team profile Picture
            </label>
            <button
              onClick={() => setEnabledThree(!enabledThree)}
              className={`relative w-[43px] min-h-[21px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabledThree ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabledThree ? "translate-x-5" : ""
                }`}
              />
              <span className="absolute text-white left-1.5 text-[9px] font-[500] top-[5px]">
                On
              </span>
              <span className="absolute text-white right-1.5 text-[9px] font-[500] top-[5px]">
                Off
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Allow members to see their rankings
            </label>
            <button
              onClick={() => setEnabledFour(!enabledFour)}
              className={`relative w-[43px] min-h-[21px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabledFour ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabledFour ? "translate-x-5" : ""
                }`}
              />
              <span className="absolute text-white left-1.5 text-[9px] font-[500] top-[5px]">
                On
              </span>
              <span className="absolute text-white right-1.5 text-[9px] font-[500] top-[5px]">
                Off
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-24 xl:gap-36">
          <div className="flex items-center justify-between xl:justify-normal flex-1 xl:flex-none">
            <label className="font-semibold text-[#434343] text-[12px] xl:w-[330px]">
              Show members alphabetically while sharing
            </label>
            <button
              onClick={() => setEnabledFive(!enabledFive)}
              className={`relative w-[43px] min-h-[21px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                enabledFive ? "bg-[#20C88B]" : "bg-[var(--main-dark-color)]"
              }`}
            >
              <div
                className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform duration-300 ${
                  enabledFive ? "translate-x-5" : ""
                }`}
              />
              <span className="absolute text-white left-1.5 text-[9px] font-[500] top-[5px]">
                On
              </span>
              <span className="absolute text-white right-1.5 text-[9px] font-[500] top-[5px]">
                Off
              </span>
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSetting;
