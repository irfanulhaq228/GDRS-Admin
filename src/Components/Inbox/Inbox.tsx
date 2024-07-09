import { GoDotFill } from "react-icons/go";

import documentIcon from "../../assets/svg/document-icon.svg";
import sendMessageIcon from "../../assets/svg/send-message-icon.svg";
import chatMan from "../../assets/images/chat-man.png";

const Inbox = () => {
  return (
    <div className="flex-1 bg-white flex flex-col relative h-screen min-h-screen max-h-screen">
      <div className="px-3 sm:px-6 lg:px-10 xl:px-16 flex gap-4 h-[55px] min-h-[55px] sm:h-[70px] sm:min-h-[70px] items-center border-b border-gray-200">
        <img
          src={chatMan}
          className="min-w-[35px] min-h-[35px] w-[35px] h-[35px] rounded-[9px] sm:min-w-[40px] sm:min-h-[40px] sm:w-[40px] sm:h-[40px] sm:rounded-[12px]"
        />
        <div>
          <p className="text-[17px] sm:text-[19px] font-[600]">Team Rebel</p>
          <p className="text-[11px] sm:text-[12px] flex items-center gap-1 font-[600] text-gray-500 mt-[-2px]">
            <GoDotFill className="text-[16px] text-[#68D391]" />
            38 Members
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-7 px-3 sm:px-6 lg:px-10 xl:px-16 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[35px] min-h-[35px] w-[35px] h-[35px] sm:min-w-[40px] sm:min-h-[40px] sm:w-[40px] sm:h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Omg, New Tasks are coming
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                perfect! ✅
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Hello ! How’re you guys?
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:25 AM
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#615EF0] text-white rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Great jason !!
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:30 AM
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[35px] min-h-[35px] w-[35px] h-[35px] sm:min-w-[40px] sm:min-h-[40px] sm:w-[40px] sm:h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Omg, New Tasks are coming
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                perfect! ✅
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Hello ! How’re you guys?
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:25 AM
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#615EF0] text-white rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Great jason !!
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:30 AM
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[35px] min-h-[35px] w-[35px] h-[35px] sm:min-w-[40px] sm:min-h-[40px] sm:w-[40px] sm:h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Omg, New Tasks are coming
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                perfect! ✅
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Hello ! How’re you guys?
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:25 AM
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#615EF0] text-white rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Great jason !!
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:30 AM
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[35px] min-h-[35px] w-[35px] h-[35px] sm:min-w-[40px] sm:min-h-[40px] sm:w-[40px] sm:h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Omg, New Tasks are coming
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                perfect! ✅
              </p>
              <p className="bg-[#F1F1F1] rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Hello ! How’re you guys?
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:25 AM
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start gap-3">
          <img
            src={chatMan}
            className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-[12px]"
          />
          <div className="text-[13px]">
            <p className="font-[500] mb-1">Jr Admin~jason</p>
            <div className="flex flex-col gap-2">
              <p className="bg-[#615EF0] text-white rounded-[12px] py-[8px] px-[16px] w-[max-content]">
                Great jason !!
              </p>
            </div>
            <p className="text-[10px] text-[#797C7B] text-right mt-2">
              09:30 AM
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 sm:pb-[10px] sm:px-6 lg:px-10 flex gap-2 sm:gap-4 h-[65px] min-h-[65px] sm:h-[80px] sm:min-h-[80px] items-center">
        <button className="hover:bg-gray-100 rounded-[9px] sm:rounded-[12px] min-h-[40px] sm:min-h-[48px] min-w-[40px] sm:min-w-[48px] flex items-center justify-center">
          <img
            src={documentIcon}
            className="h-[22px] w-[22px] min-w-[22px] min-h-[22px] sm:h-[24px] sm:w-[24px] sm:min-w-[24px] sm:min-h-[24px]"
          />
        </button>
        <div className="h-[40px] sm:h-[48px] border-2 border-gray-200 rounded-[9px] sm:rounded-[12px] flex items-center px-3 w-full">
          <input
            className="focus:outline-none text-[14px] w-full bg-transparent"
            placeholder="Type a message"
          />
          <button className="hover:bg-gray-100 p-2 rounded-[9px] sm:rounded-[12px]">
            <img
              src={sendMessageIcon}
              className="min-h-[16px] h-[16px] w-[16px] min-w-[16px] sm:min-h-[19px] sm:h-[19px] sm:w-[19px] sm:min-w-[19px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
