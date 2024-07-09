import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import JrAdminTable from "./JrAdminTable";

import { updatePageNavigation, updateSidebar } from "../../Features/Features";

import { IoIosArrowDown } from "react-icons/io";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const ManageJrAdmin = () => {
  const dispatch = useDispatch();
  const [jrAdminsShow, setJrAdminsShow] = useState<any>({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const jrAdminsTitle: any = {
    1: "Awesome 4",
    2: "Buddies 11",
    3: "Dreamers 4",
    4: "Fantastic Team",
  };
  useEffect(() => {
    dispatch(updatePageNavigation("manageJrAdmin"));
    dispatch(updateSidebar(false));
  }, [dispatch]);
  const fn_controlSideBar = () => {
    dispatch(updateSidebar(true));
  };
  const fn_controlJrAdminsTable = (key: any) => {
    setJrAdminsShow((prevValue: any) => ({
      ...prevValue,
      [key]: !prevValue[key],
    }));
  };
  return (
    <div className="flex-1 bg-[var(--main-bg-color)] min-h-screen py-7 px-[15px] sm:px-[30px] pt-[48px]">
      <button
        className="absolute top-5 left-[18px] text-[20px] text-[var(--main-text-color)] cursor-pointer"
        onClick={fn_controlSideBar}
      >
        <TbLayoutSidebarRightCollapse />
      </button>
      <div className="flex flex-col gap-[20px]">
        {Object.keys(jrAdminsShow).map((item) => (
          <JrAdminBox
            functionControl={fn_controlJrAdminsTable}
            property={item}
            index={item}
            value={jrAdminsShow[item]}
            title={jrAdminsTitle[item]}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageJrAdmin;

const JrAdminBox = ({ functionControl, property, index, value, title }: any) => {
  return (
    <div className="bg-white px-3 lg:px-10 py-8 rounded-[8px] shadow-md" key={index}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-[17px] font-[600] text-[var(--main-text-color)] capitalize">
          {title}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-[17px] justify-end items-center mt-2 sm:mt-0">
          <button
            className="rounded-[5px] h-[30px] px-2 sm:w-[116px] border border-[#00004B] text-[11px] font-[500] text-white w-full"
            style={{
              backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
            }}
          >
            Add Jr Admin
          </button>
          <button
            className="rounded-[5px] h-[30px] px-2 sm:w-[116px] border border-[#00004B] text-[11px] font-[500] text-white w-full"
            style={{
              backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
            }}
          >
            Save Data
          </button>
          <button onClick={() => functionControl(property)}>
            <IoIosArrowDown
              className={`text-[20px] transition-transform duration-500 ${
                value ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
      {/* hr admin table */}
      <JrAdminTable showJrAdmins={value} />
    </div>
  );
};
