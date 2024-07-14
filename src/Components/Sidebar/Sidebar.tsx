import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, updateSidebar } from "../../Features/Features";
import { useLocation, useNavigate } from "react-router-dom";

import { IoSearchOutline } from "react-icons/io5";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

import svg from "../../assets/svg/sidebar-profile.svg";
import dashboardIcon from "../../assets/svg/dashboard-icon.svg";
import createdTeams from "../../assets/svg/created-teams-icon.svg";
import createdTasksIcon from "../../assets/svg/created-tasks-icon.svg";
import jrAdminIcon from "../../assets/svg/jr_admin_icon.svg";
import teamAnalyticsIcon from "../../assets/svg/team-analytics-icon.svg";
import settingsIcon from "../../assets/svg/settings-icon.svg";
import logoutIcon from "../../assets/svg/log-out-icon.svg";
import chatIcon from "../../assets/svg/chat-icon.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const showSidebar = useSelector((state: RootState) => state.showSideBar);
  const pageNavigate = useSelector((state: RootState) => state.pageNavigate);
  const [createdTeamsNav, setCreatedTeamsNav] = useState(false);
  const [chatBoxNav, setChatBoxNav] = useState(false);
  useEffect(() => {
    if (location.pathname === "/created-teams") {
      setCreatedTeamsNav(true);
    } else {
      setCreatedTeamsNav(false);
    }
    if (location.pathname === "/chat-box") {
      setChatBoxNav(true);
    } else {
      setChatBoxNav(false);
    }
  }, [location]);
  const fn_controlSidebar = () => {
    dispatch(updateSidebar(false));
  };
  interface fn_navigationToProps {
    nav: string;
  }
  const fn_navigationTo = (props: fn_navigationToProps): void => {
    navigate(props.nav);
  };
  return (
    <>
      <div className={`hidden lg:block ${pageNavigate === "chatBox" ? "w-[84px]" : "w-[290px]"}`}></div>
      <div
        className={`${!showSidebar && "hidden"} fixed lg:block ${
          chatBoxNav ? "w-[max-content]" : "w-[290px]"
        } bg-[var(--sidebar-color)] min-h-screen z-[999] shadow-lg`}
      >
        <p
          className={`absolute text-[20px] flex lg:hidden items-center justify-center rounded cursor-pointer text-[--main-text-color] z-[99] ${
            pageNavigate === "chatBox" ? "left-[14px] top-1.5" : "end-5 top-5"
          }`}
          onClick={fn_controlSidebar}
        >
          <TbLayoutSidebarRightExpand />
        </p>
        <div
          className={`relative  flex items-center gap-4 mx-[15px] ${
            chatBoxNav
              ? "px-1 justify-center mt-5 h-[50px]"
              : "px-4 mt-[48px] bg-[#F4F4F4] h-[60px]"
          } rounded-[4px]`}
        >
          <img src={svg} width={"34px"} />
          {!chatBoxNav && (
            <div>
              <p className="text-[17px] font-[600]">Kevin Karter</p>
              <p className="text-[11px]">Admin</p>
            </div>
          )}
        </div>
        <div className="mx-[15px] my-[18px] flex gap-[15px] flex-1">
          <ul
            className={`flex flex-col text-[var(--main-text-color) rounded-[4px] h-[max-content] ${
              createdTeamsNav || chatBoxNav
                ? "w-[54px] bg-[var(--main-bg-color)] pb-2 items-center gap-[18.5px] py-[8.5px]"
                : "w-full gap-[2.5px]"
            }`}
          >
            <li
              className={`${
                pageNavigate === "dashboard" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Dashboard Home"
              onClick={() => fn_navigationTo({ nav: "/dashboard" })}
            >
              <img src={dashboardIcon} width={"21px"} />
              {!createdTeamsNav && !chatBoxNav && "Dashboard Home"}
            </li>
            <li
              className={`${
                pageNavigate === "createdTeams" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? `w-[34px] h-[34px] ${
                      createdTeamsNav && "bg-white"
                    } hover:bg-white justify-center rounded-full`
                  : "px-6 h-[50px]"
              }`}
              title="Created Teams"
              onClick={() => fn_navigationTo({ nav: "/created-teams" })}
            >
              <img src={createdTeams} width={"21px"} />
              {!createdTeamsNav && !chatBoxNav && "Created Teams"}
            </li>
            <li
              className={`${
                pageNavigate === "chatBox" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? `w-[34px] h-[34px] ${
                      chatBoxNav && "bg-white"
                    } hover:bg-white justify-center rounded-full`
                  : "px-6 h-[50px]"
              }`}
              title="Chat Box"
              onClick={() => fn_navigationTo({ nav: "/chat-box" })}
            >
              <img src={chatIcon} width={"20px"} className="mt-1 ml-0.5" />
              {!createdTeamsNav && !chatBoxNav && " Chat Box"}
            </li>
            <li
              className={`${
                pageNavigate === "createdTasks" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Created Tasks"
              onClick={() => fn_navigationTo({ nav: "/created-tasks" })}
            >
              <img src={createdTasksIcon} width={"21px"} />
              {!createdTeamsNav && !chatBoxNav && "Created Tasks"}
            </li>
            <li
              className={`${
                pageNavigate === "manageJrAdmin" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Manage Jr Admin"
              onClick={() => fn_navigationTo({ nav: "/manage-junior-admin" })}
            >
              <img src={jrAdminIcon} width={"23px"} />
              {!createdTeamsNav && !chatBoxNav && "Manage Jr Admin"}
            </li>
            <li
              className={`${
                pageNavigate === "teamAnalytics" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Team Analytics"
              onClick={() => fn_navigationTo({ nav: "/team-analytics" })}
            >
              <img src={teamAnalyticsIcon} width={"19px"} />
              {!createdTeamsNav && !chatBoxNav && "Team Analytics"}
            </li>
            <li
              className={`${
                pageNavigate === "settings" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Settings"
              onClick={() => fn_navigationTo({ nav: "/settings" })}
            >
              <img src={settingsIcon} width={"21px"} />
              {!createdTeamsNav && !chatBoxNav && "Settings"}
            </li>
            <li
              className={`${
                pageNavigate === "" && "bg-[var(--main-bg-color)]"
              } cursor-pointer rounded-[4px] hover:bg-[var(--main-bg-color)] flex items-center gap-6 font-[600] text-[15px] ${
                createdTeamsNav || chatBoxNav
                  ? "w-[34px] h-[34px] hover:bg-white justify-center rounded-full"
                  : "px-6 h-[50px]"
              }`}
              title="Log Out"
              onClick={() => fn_navigationTo({ nav: "/" })}
            >
              <img src={logoutIcon} width={"21px"} />
              {!createdTeamsNav && !chatBoxNav && "Log Out"}
            </li>
          </ul>
          {createdTeamsNav && (
            <ul
              className={`flex flex-col text-[var(--main-text-color) rounded-[4px] pb-[13px] ${
                createdTeamsNav &&
                "flex-1 bg-[var(--main-bg-color)] h-[max-content]"
              }`}
            >
              <li
                className={`rounded-t-[4px] text-white flex items-center justify-center h-[40px] font-[600] text-[15px] bg-[var(--main-dark-color)]`}
              >
                Teams Name
              </li>
              <li
                className={`rounded-[4px] flex items-center mx-2.5 bg-white h-[30px] px-1 mt-[13px] mb-[4px]`}
              >
                <input
                  className="w-[100%] focus:outline-none px-1 text-[11px]"
                  placeholder="Search by name"
                />
                <IoSearchOutline className="scale-[1.1]" />
              </li>
              <li
                className={`cursor-pointer rounded-[4px] mx-2.5 mt-[8px] bg-white hover:bg-[var(--main-dark-color)] hover:text-white flex items-center justify-center h-[30px] font-[600] text-[12px]`}
              >
                Awesome 4
              </li>
              <li
                className={`cursor-pointer rounded-[4px] mx-2.5 mt-[8px] bg-white hover:bg-[var(--main-dark-color)] hover:text-white flex items-center justify-center h-[30px] font-[600] text-[12px]`}
              >
                Buddies 11
              </li>
              <li
                className={`cursor-pointer rounded-[4px] mx-2.5 mt-[8px] bg-white hover:bg-[var(--main-dark-color)] hover:text-white flex items-center justify-center h-[30px] font-[600] text-[12px]`}
              >
                Dreamers
              </li>
              <li
                className={`cursor-pointer rounded-[4px] mx-2.5 mt-[8px] bg-white hover:bg-[var(--main-dark-color)] hover:text-white flex items-center justify-center h-[30px] font-[600] text-[12px]`}
              >
                Dreamers 4
              </li>
              <li
                className={`cursor-pointer rounded-[4px] mx-2.5 mt-[8px] bg-white hover:bg-[var(--main-dark-color)] hover:text-white flex items-center justify-center h-[30px] font-[600] text-[12px]`}
              >
                Fantastic Team
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
