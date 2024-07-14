import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { signinApi } from "../../apis/apis";
import { signinSchema } from "../../schemas/schemas";
import AuthImage from "../../Components/AuthImage/AuthImage";
import VerificationCode from "../../Components/VerificationCode/VerificationCode";

import googleLogo from "../../assets/images/google_logo.png";
import appleLogo from "../../assets/images/apply_logo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [verifyCode, setVerifyCode] = useState(false);
  // ================= Formik ================= //
  const initialValues = {
    email: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues,
    validationSchema: signinSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const response: any = await signinApi(values);
      if (response?.status === 200) {
        if (response?.data?.status) {
          resetForm();
          Cookies.set("access", response?.data?.response?.tokens?.access, {
            expires: 7,
          });
          Cookies.set("refresh", response?.data?.response?.tokens?.refresh, {
            expires: 7,
          });
          navigate("/dashboard");
          toast.success("Admin Login Successfuly");
        } else {
          resetForm();
          setLoading(false);
          toast.error(response?.data?.message);
        }
      } else if (response?.status === 403) {
        setLoading(false);
        toast.error("Accout not Verified, Check Email and Write Code Here");
        setVerifyCode(true);
      } else {
        resetForm();
        setLoading(false);
        toast.error("Server Error");
      }
    },
  });
  return (
    <div className="sign-in flex min-h-full flex-col md:flex-row">
      <VerificationCode verifyCode={verifyCode} setVerifyCode={setVerifyCode} />
      <AuthImage />
      <div className="flex-1 flex justify-center items-center py-14">
        <div className="w-[90%] lg:w-[460px]">
          <p className="text-[var(--main-text-color)] text-[36px] font-[500] mb-[8px]">
            Sign In
          </p>
          <p className="text-[13px] text-[#434343] mb-[25px]">
            Enter your email and password to login to your account.
          </p>
          <form
            className="flex flex-col gap-[15px] relative"
            onSubmit={Formik.handleSubmit}
          >
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Email Address"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik?.errors?.email && Formik?.touched?.email && (
              <p className="mt-[-16px] text-[red] font-[500] text-[12px]">
                {Formik?.errors?.email}
              </p>
            )}
            <input
              type={passwordType}
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Enter Password"
              name="password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <span
              className={`absolute right-[15px] cursor-pointer ${
                Formik?.touched?.email && Formik?.errors?.email
                  ? "top-[100px]"
                  : "top-[82px]"
              } `}
              onClick={() =>
                passwordType === "password"
                  ? setPasswordType("text")
                  : setPasswordType("password")
              }
            >
              {passwordType === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {Formik?.errors?.password && Formik?.touched?.password && (
              <p className="mt-[-16px] text-[red] font-[500] text-[12px]">
                {Formik?.errors?.password}
              </p>
            )}
            <div className="flex justify-between">
              <label className="text-[12px] flex items-center gap-[10px]">
                <input type="checkbox" />
                Remember Password
              </label>
              <label
                className="text-[12px] cursor-pointer"
                onClick={() => navigate("/forget-password")}
              >
                Forget Password ?
              </label>
            </div>
            {!loading ? (
              <input
                type="submit"
                value={"Sign In"}
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
          <div className="flex justify-center gap-5 md:gap-8 mt-[40px]">
            <div className="w-[100px] lg:w-[130px] h-[68px] rounded-[8px] border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center">
              <img src={googleLogo} className="w-[35px]" />
            </div>
            <div className="w-[100px] lg:w-[130px] h-[68px] rounded-[8px] border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center">
              <img src={appleLogo} className="w-[46px]" />
            </div>
          </div>
          <p className="font-[500] text-[14px] text-center mt-[20px]">
            Want to create an account?{" "}
            <span
              className="text-[#07122F] font-[600] hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
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

export default Signin;
