import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePageNavigation, updateSidebar } from "../../Features/Features";

import { IoSearchOutline } from "react-icons/io5";
import TasksList from "./TasksList";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const CreatedTasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("createdTasks"));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  return (
    <div className="flex-1 bg-[var(--main-bg-color)] min-h-screen p-7 pt-[48px]">
      <button
        className="absolute top-5 left-8 text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <div className="bg-white px-10 py-8 rounded-[8px] shadow-md">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between border-b-[2px] pb-4 md:items-center">
          <p className="text-[17px] font-[600] text-[var(--main-text-color)]">
            Tasks Details
          </p>
          <div className="flex gap-[17px] justify-end">
            <div className="border px-[10px] rounded-[5px] sm:w-[250px] h-[30px] flex justify-between items-center">
                <input placeholder="Seacrh task by name" className="text-[11px] font-[500] focus:outline-none" />
                <IoSearchOutline className="cursor-pointer" />
            </div>
            <button
              className="rounded-[5px] h-[30px] px-2 sm:w-[100px] border border-[#00004B] text-[11px] font-[500] text-white"
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
            >
              Create Task
            </button>
          </div>
        </div>
        {/* <div className="mt-[15px] flex justify-end">
            <input type="date" />
        </div> */}
        {/* Lists */}
        <TasksList />
      </div>
    </div>
  );
};

export default CreatedTasks;
