const MemberContent = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* buttons */}
      <div className="flex justify-end items-end gap-[15px] border-b-[3px] min-h-[27px] pb-[14px]">
        <button
          className="rounded-[5px] h-[30px] w-[112px] border border-[#00004B] text-[11px] font-[500] text-white"
          style={{
            backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
          }}
        >
          Save Data
        </button>
        <button
          className="rounded-[5px] h-[30px] w-[112px] border border-[#00004B] text-[11px] font-[500] text-white"
          style={{
            backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
          }}
        >
          Save Data
        </button>
      </div>
      {/* lists */}
      <div className="mt-[35px] flex">
        <div className="scrollable-box overflow-auto flex flex-col gap-[5px] pb-[5px]">
          <div className="flex gap-[5px]">
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task A</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task B</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task C</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task D</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
              <p>Bonus Pts</p>
              <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
            </div>
          </div>
          <div className="flex gap-[5px]">
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task A</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task B</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task C</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
              <p>Task D</p>
              <div className="flex">
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
                <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">
                  2
                </p>
                <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
              <p>Bonus Pts</p>
              <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="px-[20px] h-[35px]">
              <p className="border h-[35px] border-[#C7CFFF]"></p>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
              <p>Total Pts</p>
              <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
            </div>
          </div>
          <div className="flex">
            <div className="px-[20px] h-[35px]">
              <p className="border h-[35px] border-[#C7CFFF]"></p>
            </div>
            <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
              <p>Total Pts</p>
              <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberContent;

{
  /* <div className="flex gap-[5px]">
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
    <p>Task A</p>
    <div className="flex">
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
      <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">2</p>
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
    </div>
  </div>
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
    <p>Task B</p>
    <div className="flex">
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
      <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">2</p>
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
    </div>
  </div>
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
    <p>Task C</p>
    <div className="flex">
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
      <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">2</p>
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
    </div>
  </div>
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[135px]">
    <p>Task D</p>
    <div className="flex">
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
      <p className="h-[17px] w-[23px] bg-white text-[11px] text-center">2</p>
      <button className="bg-[var(--action-small-btn)] text-white w-[17px] h-[17px] flex justify-center items-center rounded-sm cursor-pointer">
        -
      </button>
    </div>
  </div>
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
    <p>Bonus Pts</p>
    <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
  </div>
  <div className="px-[20px] h-[35px]">
    <p className="border h-[35px] border-[#C7CFFF]"></p>
  </div>
  <div className="bg-[var(--main-bg-color)] text-[11px] font-[500] flex justify-between rounded-[4px] h-[30px] items-center px-[8px] min-w-[125px]">
    <p>Total Pts</p>
    <input className="w-[40px] h-[20px] text-[11px] rounded-[4px] focus:outline-none px-1" />
  </div>
</div> */
}
