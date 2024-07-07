const IndividualTaskData = () => {
  return (
    <div className="mt-5 px-1 xl:px-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:justify-between">
        <p className="text-[13px] font-[600] text-[var(--main-dark-color)]">
          Individual Task Data
        </p>
        <div className="flex items-center justify-center gap-4">
          <select className="bg-transparent border-[1px] border-[var(--main-dark-color)] rounded-[4px] text-[12px] px-1 text-[var(--main-dark-color)] font-[600] cursor-pointer focus:outline-none w-[125px] h-[28px]">
            <option disabled>Select</option>
            <option selected>Awesome 4</option>
            <option>Awesome 3</option>
          </select>
          <input
            type="date"
            className="bg-transparent border-[1px] border-[var(--main-dark-color)] rounded-[4px] text-[12px] px-1 text-[var(--main-dark-color)] font-[600] cursor-pointer focus:outline-none w-[125px] h-[28px]"
          />
        </div>
      </div>
      <div className="w-[95vw] sm:w-[80vw] overflow-auto md:w-auto rounded-[8px] shadow-md p-3 sm:p-5 mt-5">
        <div className="flex flex-col gap-3 w-[650px] md:w-auto">
          <Data id={"01"} />
          <Data id={"02"} />
          <Data id={"03"} />
          <Data id={"04"} />
          <Data id={"05"} />
          <Data id={"06"} />
          <Data id={"07"} />
        </div>
      </div>
    </div>
  );
};

export default IndividualTaskData;

const Data = ({ id }: { id: string }) => {
  return (
    <div className="bg-[var(--main-bg-color)] rounded-[7px] h-[55px] flex items-center px-7">
      <p className="text-[11px] font-[600] w-[35px]">{id}</p>
      <p className="text-[13px] font-[500] w-[60%]">
        Do your house chores before 4PM
      </p>
      <p className="flex flex-col flex-1">
        <span className="text-[13px] font-[500] text-[#777777]">
          Task Count
        </span>
        <span className="text-[11px] font-[600] text-[var(--main-dark-color)]">
          30x
        </span>
      </p>
      <p className="flex flex-col flex-1">
        <span className="text-[13px] font-[500] text-[#777777]">
          Task Points
        </span>
        <span className="text-[11px] font-[600] text-[var(--main-dark-color)]">
          30 pts
        </span>
      </p>
    </div>
  );
};
