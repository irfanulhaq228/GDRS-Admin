import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import AuthImage from "../../Components/AuthImage/AuthImage";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fn_writeEmail = (value: string) => {
    if (emailError) setEmailError(false);
    setEmail(value);
  };
  const fn_submit = (e: any) => {
    e.preventDefault();
    if (email === "" || !emailRegex.test(email)) {
      return setEmailError(true);
    }
    console.log(email);
    setLoading(true);
    setTimeout(() => {
      navigate("/otp");
    }, 2000);
  };
  return (
    <div className="sign-in flex h-full flex-col md:flex-row">
      <AuthImage />
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[90%] lg:w-[460px]">
          <p className="text-[var(--main-text-color)] text-[36px] font-[500] mb-[8px]">
            Forgot Password ?
          </p>
          <p className="text-[13px] text-[#434343] mb-[25px]">
            Please enter your linked email to receive Confirmation Link
          </p>
          <form
            className="flex flex-col gap-[15px]"
            onSubmit={(e) => fn_submit(e)}
          >
            <input
              className={`border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] ${
                !emailError
                  ? "bg-[#00004b05] border-[#b1bbc694]"
                  : "bg-[#bd002911] border-[#bd002948]"
              }`}
              placeholder={!emailError ? "Email Address" : "Invalid Email"}
              onChange={(e) => fn_writeEmail(e.target.value)}
            />
            {!loading ? (
              <input
                type="submit"
                value={"Send Link"}
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
          <p className="bottom-5 text-[12px] text-[#8D93A1]  hidden md:absolute">
            © Copyright GDRS 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
