import "./CreatedTeams.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePageNavigation, updateSidebar } from "../../Features/Features";

import Section1 from "./Section1";
import MembersList from "./MembersList";
import MemberContent from "./MemberContent";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const CreatedTeams = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("createdTeams"));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className="flex-1 bg-white min-h-screen px-7 py-[48px] flex flex-col">
      <button
        className="absolute top-5 left-8 text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <Section1 />
      <div className="flex mt-[35px] gap-[20px]">
        <MembersList />
        <MemberContent />
      </div>
    </div>
  );
};

export default CreatedTeams;
