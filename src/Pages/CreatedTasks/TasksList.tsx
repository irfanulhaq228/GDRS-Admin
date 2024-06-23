import createdTasksIcon from "../../assets/svg/created-tasks-icon.svg";

const TasksList = () => {
  return (
    <div className="pt-[15px]">
      <table className="w-full rounded-[8px]">
        <tbody>
          <div className="mb-[10px] rounded-[8px] bg-[var(--main-bg-color)] px-[20px] pt-[23px] pb-[13px]">
            <tr className="rounded-[8px] flex">
              <td className="w-[40px]">
                <img src={createdTasksIcon} alt="Task Icon" />
              </td>
              <td className="flex-1">
                <p className="text-[14px] font-[500]">
                  Do your house chores before 4PM
                </p>
              </td>
              <td className="w-[90px] lg:w-[120px] xl:w-[150px]">
                <p className="text-[14px] font-[500] text-[#777777]">
                  Created at
                </p>
                <p className="text-[12px] font-[600] text-[var(--main-text-color)]">
                  03-06-2022
                </p>
              </td>
              <td className="w-[80px] lg:w-[120px] xl:w-[150px]">
                <p className="text-[14px] font-[500] text-[#777777]">
                  Task Points
                </p>
                <p className="text-[12px] font-[600] text-[var(--main-text-color)]">
                  30 pts
                </p>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
