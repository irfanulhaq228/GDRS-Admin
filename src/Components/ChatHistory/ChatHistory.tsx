import { IoIosArrowDown } from "react-icons/io";

import chatMan from "../../assets/images/chat-man.png";

const ChatHistory = () => {
  return (
    <div className="md:w-[330px] xl:w-[400px] bg-[var(--main-bg-color-blur)] min-h-screen max-h-screen px-4 py-7 xl:ps-7 pe-2 flex flex-col">
      <div className="flex items-center gap-2 h-[max-content] me-3 xl:me-5">
        <p className="text-[20px] font-[600]">Messages</p>
        <IoIosArrowDown className="w-[15px] cursor-pointer" />
        <p className="text-[12px] font-[600] ms-3">12</p>
      </div>
      <input
        placeholder="Search messages"
        className="h-[46px] min-h-[46px] rounded-[7px] px-4 text-[13px] mt-[29px] focus:outline outline-1 outline-gray-300 me-3 xl:me-5"
      />
      <div className="mt-5 flex flex-col gap-9 flex-1 overflow-auto pe-3 xl:pe-5">
        <ChatMan name={"Team Rebel"} time={"1m"} />
        <ChatMan name={"Dreamers Squad"} time={"12m"} />
        <ChatMan name={"Jr Admin~Rafique"} time={"1h"} />
        <ChatMan name={"Marching shadows"} time={"5d"} />
        <ChatMan name={"Jr Admin~jason"} time={"2d"} />
        <ChatMan name={"Jr Admin~James"} time={"7d"} />
        <ChatMan name={"Jr Admin~James"} time={"7d"} />
        <ChatMan name={"Jr Admin~James"} time={"7d"} />
        <ChatMan name={"Jr Admin~James"} time={"7d"} />
      </div>
    </div>
  );
};

export default ChatHistory;

const ChatMan = ({ name, time }: { name: string; time: string }) => {
  return (
    <div className="flex gap-4 items-start">
      <img src={chatMan} className="min-w-[46px] min-h-[46px] w-[46px] h-[46px] rounded-[12px]" />
      <div className="flex-1 flex items-start justify-between">
        <p className="flex flex-col gap-0.5">
          <span className="text-[14px] font-[600]">{name}</span>
          <span className="text-[12px] font-[500] text-gray-400">
            Haha oh man 🔥
          </span>
        </p>
        <p className="text-[13px] font-[600] text-gray-400">{time}</p>
      </div>
    </div>
  );
};
