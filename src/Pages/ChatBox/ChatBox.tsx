import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePageNavigation, updateSidebar } from "../../Features/Features";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

import ChatHistory from "../../Components/ChatHistory/ChatHistory";
import Inbox from "../../Components/Inbox/Inbox";

const ChatBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("chatBox"));
    dispatch(updateSidebar(false));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className={`flex flex-col md:flex-row`}>
      <button
        className="absolute top-2 left-[14px] text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <ChatHistory />
      <Inbox />
    </div>
  );
};

export default ChatBox;
