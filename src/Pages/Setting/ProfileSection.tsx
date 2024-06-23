import img from "../../assets/images/settings-profile.png";

import { FaCamera } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="py-9 border-b-[2px]">
      <img
        src={img}
        className="w-[70px] h-[70px] border-gray-400 border-[1px] rounded-full"
      />
      <div
        className="absolute w-[20px] h-[20px] rounded-full flex justify-center items-center mt-[-18px] ml-[50px] z-50 bg-white"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <FaCamera className="text-[10px]" />
      </div>
      <form className="mt-8 flex justify-between flex-wrap gap-7 w-full sm-w-[95%]">
        <div className="flex flex-col w-[100%] sm:w-auto">
          <label className="text-[13px] text-[#4C535F] font-[600]">
            Full name
          </label>
          <input
            className="border-[#b1bbc694] font-[500] border-[1.5px] focus:outline-none rounded-[5px] h-[40px] px-[17px] text-[12px] bg-[#00004b05] w-full sm:w-[380px]"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="flex flex-col w-[100%] sm:w-auto">
          <label className="text-[13px] text-[#4C535F] font-[600]">
            Username
          </label>
          <input
            className="border-[#b1bbc694] font-[500] border-[1.5px] focus:outline-none rounded-[5px] h-[40px] px-[17px] text-[12px] bg-[#00004b05] w-full sm:w-[380px]"
            placeholder="Enter Your Username"
          />
        </div>
        <div className="flex flex-col w-[100%] sm:w-auto">
          <label className="text-[13px] text-[#4C535F] font-[600]">Email</label>
          <input
            className="border-[#b1bbc694] font-[500] border-[1.5px] focus:outline-none rounded-[5px] h-[40px] px-[17px] text-[12px] bg-[#00004b05] w-full sm:w-[380px]"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="flex flex-col w-[100%] sm:w-auto">
          <label className="text-[13px] text-[#4C535F] font-[600]">
            Password
          </label>
          <input
            type="password"
            className="border-[#b1bbc694] font-[500] border-[1.5px] focus:outline-none rounded-[5px] h-[40px] px-[17px] text-[12px] bg-[#00004b05] w-full sm:w-[380px]"
            placeholder="Enter Your Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
