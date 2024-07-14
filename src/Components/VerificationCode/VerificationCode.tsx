import { Modal } from "antd";
import VerificationInput from "react-verification-input";

const VerificationCode = ({ verifyCode, setVerifyCode }: any) => {
  return (
    <Modal
      title="Verify your Email"
      open={verifyCode}
      onOk={() => setVerifyCode(false)}
      onCancel={() => setVerifyCode(false)}
      footer={null}
      style={{ fontFamily: "Inter" }}
      width={350}
    >
      <div className="flex justify-center mt-10 mb-5">
        <VerificationInput
          placeholder="-"
          classNames={{
            character: "rounded-[5px] text-[17px]",
            characterInactive: "bg-gray-100",
            characterSelected:
              "bg-[var(--main-bg-color)] outline-none border-2 border-[var(--main-dark-color)]",
            characterFilled: "character--filled",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
        }}
        className="cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px] w-full"
      >
        Verify
      </button>
    </Modal>
  );
};

export default VerificationCode;
