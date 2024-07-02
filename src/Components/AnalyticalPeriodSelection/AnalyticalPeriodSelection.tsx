const AnalyticalPeriodSelection = () => {
  return (
    <div className="flex flex-col gap-4 xl:min-w-[25%]">
      <p className="text-[14px] font-[600] text-[var(--main-dark-color)]">
        Select Analytical Period
      </p>
      <div className="min-w-[210px] pr-1 bg-white rounded-[4px]">
        <select className="w-[100%] h-[35px] text-[12px] font-[500] px-1 rounded-[4px] focus:outline-none bg-white">
          <option>Last Year Analysis</option>
        </select>
      </div>
      <div className="flex gap-3">
        <input
          type="date"
          placeholder="Select Date"
          className="rounded-[4px] text-[12px] px-1 h-[35px] text-[#00004B] font-[500] flex-1 bg-white"
        />
        <input
          type="date"
          placeholder="Select Date"
          className="rounded-[4px] text-[12px] px-1 h-[35px] text-[#00004B] font-[500] flex-1 bg-white"
        />
      </div>
      <button
        className="rounded-[5px] h-[33px] px-2 border border-[#00004B] text-[11px] font-[500] text-white w-full"
        style={{
          backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
        }}
      >
        Create Task
      </button>
    </div>
  );
};

export default AnalyticalPeriodSelection;
