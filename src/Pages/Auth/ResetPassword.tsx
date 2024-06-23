import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthImage from "../../Components/AuthImage/AuthImage";

import { GoEye, GoEyeClosed } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const [newPasswordText, setNewPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const [correctNewPassword, setCorrectNewPassword] = useState(true);
  const [correctConfirmPassword, setCorrectConfirmPassword] = useState(true);

  const fn_checkNewPassword = (value: string) => {
    setNewPasswordText(value);
    const checkUppercase = /[A-Z]/.test(value);
    const checkLowercase = /[a-z]/.test(value);
    const checkNumber = /\d/.test(value);
    if (checkUppercase) {
      setHasUppercase(true);
    } else {
      setHasUppercase(false);
    }
    if (checkLowercase) {
      setHasLowercase(true);
    } else {
      setHasLowercase(false);
    }
    if (checkNumber) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
    if (checkUppercase && checkLowercase && checkNumber) {
      setCorrectNewPassword(true);
    } else {
      setCorrectNewPassword(false);
    }
  };

  useEffect(() => {
    if (newPasswordText === confirmPasswordText) {
      setCorrectConfirmPassword(true);
    } else {
      setCorrectConfirmPassword(false);
    }
  }, [newPasswordText, confirmPasswordText, correctConfirmPassword]);

  const fn_submit = (e: any) => {
    e.preventDefault();
    if (newPasswordText !== "" && confirmPasswordText !== "" && correctNewPassword && correctConfirmPassword) {
      navigate("/");
    }
  };

  return (
    <div className="sign-in flex h-full flex-col md:flex-row">
      <AuthImage />
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[90%] lg:w-[460px]">
          <p className="text-[var(--main-text-color)] text-[36px] font-[500] mb-[8px]">
            Reset Password
          </p>
          <p className="text-[13px] text-[#434343] mb-[25px]">
            Please enter your linked email to receive code
          </p>
          <form
            className="flex flex-col gap-[15px] relative"
            onSubmit={(e) => fn_submit(e)}
          >
            <input
              className={`border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] ${
                correctNewPassword
                  ? "bg-[#00004b05] border-[#b1bbc694]"
                  : "bg-[#bd002911] border-[#bd002948]"
              }`}
              placeholder="Enter New Password"
              type={newPassword ? "password" : "text"}
              value={newPasswordText}
              onChange={(e) => fn_checkNewPassword(e.target.value)}
            />
            <p
              className="absolute right-[15px] top-[17px] text-[#777777] cursor-pointer"
              onClick={() => setNewPassword(!newPassword)}
            >
              {newPassword ? <GoEyeClosed /> : <GoEye />}
            </p>
            <input
              className={`border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] ${
                correctConfirmPassword
                  ? "bg-[#00004b05] border-[#b1bbc694]"
                  : "bg-[#bd002911] border-[#bd002948]"
              }`}
              placeholder="Confirm Password"
              type={confirmPassword ? "password" : "text"}
              value={confirmPasswordText}
              onChange={(e) => setConfirmPasswordText(e.target.value)}
            />
            <p
              className="absolute right-[15px] top-[83px] text-[#777777] cursor-pointer"
              onClick={() => setConfirmPassword(!confirmPassword)}
            >
              {confirmPassword ? <GoEyeClosed /> : <GoEye />}
            </p>
            <div className="flex gap-[20px]">
              <p
                className={`text-[10px] flex gap-2 items-center ${
                  hasUppercase ? "text-[#089260]" : "text-[#FD4D4D]"
                }`}
              >
                {hasUppercase ? (
                  <IoMdCheckmark className="scale-[1.1]" />
                ) : (
                  <RxCross2 className="scale-[1.1]" />
                )}{" "}
                Uppercase Letter
              </p>
              <p
                className={`text-[10px] flex gap-2 items-center ${
                  hasNumber ? "text-[#089260]" : "text-[#FD4D4D]"
                }`}
              >
                {hasNumber ? (
                  <IoMdCheckmark className="scale-[1.1]" />
                ) : (
                  <RxCross2 className="scale-[1.1]" />
                )}{" "}
                Numbers
              </p>
              <p
                className={`text-[10px] flex gap-2 items-center ${
                  hasLowercase ? "text-[#089260]" : "text-[#FD4D4D]"
                }`}
              >
                {hasLowercase ? (
                  <IoMdCheckmark className="scale-[1.1]" />
                ) : (
                  <RxCross2 className="scale-[1.1]" />
                )}{" "}
                Lowercase Letter
              </p>
            </div>
            <input
              type="submit"
              value={"Reset Password"}
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
              className="cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px]"
            />
          </form>
          <p className="bottom-5 text-[12px] text-[#8D93A1] hidden md:absolute">
            © Copyright GDRS 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
