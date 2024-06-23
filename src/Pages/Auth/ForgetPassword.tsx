import { useNavigate } from "react-router-dom";
import AuthImage from "../../Components/AuthImage/AuthImage";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const fn_submit = (e: any) => {
    e.preventDefault();
    navigate("/reset-password");
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
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Email Address"
            />
            <input
              type="submit"
              value={"Submit"}
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
              className="cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[15px] text-[17px]"
            />
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
