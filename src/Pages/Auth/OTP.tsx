import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import VerificationInput from "react-verification-input";
import AuthImage from "../../Components/AuthImage/AuthImage";

import otpIcon from "../../assets/svg/otp-icon.svg";

const OTP = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const fn_submit = (e: any) => {
    e.preventDefault();
    if (otp.length !== 6) {
      return setOtpError("Write Complete Otp");
    }
    console.log(otp);
    setLoading(true);
    setTimeout(() => {
      navigate("/reset-password");
    }, 2000);
  };
  return (
    <div className="sign-in flex h-full flex-col md:flex-row">
      <AuthImage />
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[90%] lg:w-[350px] flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <img src={otpIcon} alt="otp-icon" className="w-[100px] h-[100px]" />
            <p className="text-[13px] text-[#434343] mb-[25px] text-center">
              We have sent a 6 digit code at your email. please enter your code
              below so we can verify your identity
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5 mb-[25px] w-[max-content]">
            <VerificationInput
              autoFocus
              placeholder=""
              classNames={{
                character:
                  "bg-[transparent] text-[#00004B] font-[600] text-[19px] border-b-2 border-b-[#00004B] outline-none border-l-0 border-r-0 border-t-0",
                characterInactive:
                  "border-b-2 border-b-[#B9B9B9] border-l-0 border-r-0 border-t-0",
                characterSelected:
                  "border-b-2 border-b-[#00004B] border-l-0 border-r-0 border-t-0",
                characterFilled:
                  "bg-[#ebeeff9a] outline-none border-b-2 border-b-[#00004B] border-l-0 border-r-0 border-t-0",
              }}
              onChange={(e) => {
                setOtp(e);
                setOtpError("");
              }}
            />
            {otpError !== "" && (
              <p className="text-[#FD4D4D] text-[11px] font-[500] w-full">
                {otpError}
              </p>
            )}
          </div>
          {!loading ? (
            <button
              type="submit"
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
              className="w-full cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[15px] text-[17px]"
              onClick={fn_submit}
            >
              Verify Email
            </button>
          ) : (
            <button
              className="w-full cursor-not-allowed rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px]"
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
              disabled
            >
              <BeatLoader color="#fff" className="pt-2" />
            </button>
          )}
          <p className="bottom-5 text-[12px] text-[#8D93A1]  hidden md:absolute">
            © Copyright GDRS 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
