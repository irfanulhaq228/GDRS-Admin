import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import AuthImage from "../../Components/AuthImage/AuthImage";

import fbLogo from "../../assets/images/fb_logo.png";
import googleLogo from "../../assets/images/google_logo.png";
import appleLogo from "../../assets/images/apply_logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const fn_submit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };
  return (
    <div className="sign-in flex min-h-full flex-col md:flex-row">
      <AuthImage />
      <div className="flex-1 flex justify-center items-center py-14">
        <div className="w-[90%] lg:w-[460px]">
          <p className="text-[var(--main-text-color)] text-[36px] font-[500] mb-[8px]">
            Sign Up
          </p>
          <p className="text-[13px] text-[#434343] mb-[25px]">
            Fill all details for signup to your account.
          </p>
          <form
            className="flex flex-col gap-[15px]"
            onSubmit={(e) => fn_submit(e)}
          >
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Email Address"
            />
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Phone Number"
            />
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Password"
            />
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Confirm Password"
            />
            {!loading ? (
              <input
                type="submit"
                value={"Sign Up"}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #0000B1, #00004B)",
                }}
                className="cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px]"
              />
            ) : (
              <button
                className="cursor-not-allowed rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #0000B1, #00004B)",
                }}
                disabled
              >
                <BeatLoader color="#fff" className="pt-2" />
              </button>
            )}
          </form>
          <div className="flex justify-center gap-5 md:justify-between mt-[40px]">
            <div className="w-[100px] lg:w-[130px] h-[68px] rounded-[8px] border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center">
              <img src={fbLogo} className="w-[35px]" />
            </div>
            <div className="w-[100px] lg:w-[130px] h-[68px] rounded-[8px] border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center">
              <img src={googleLogo} className="w-[35px]" />
            </div>
            <div className="w-[100px] lg:w-[130px] h-[68px] rounded-[8px] border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center">
              <img src={appleLogo} className="w-[46px]" />
            </div>
          </div>
          <p className="font-[500] text-[14px] text-center mt-[20px]">
            Already have an account?{" "}
            <span
              className="text-[#07122F] font-[600] hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign in
            </span>
          </p>
          <p className="bottom-5 text-[12px] text-[#8D93A1] hidden md:absolute">
            © Copyright GDRS 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
