import img from "../../assets/images/Created-teams-profile.png";

const Section1 = () => {
  return (
    <div className="bg-[var(--main-bg-color)] rounded-[8px] shadow-sm px-14 py-7 flex justify-between items-center">
        <div className="flex flex-col items-center gap-3">
            <img src={img} className="h-[80px] w-[80px rounded-full]" />
            <p className="text-center text-[17px] font-semibold text-[var(--main-text-color)]">Bilal Ahmad</p>
        </div>
        <div>
        <p className="text-center text-[17px] font-semibold text-[var(--main-text-color)]">Total Points</p>
        <p className="text-center text-[17px] font-semibold text-[var(--main-text-color)]">4356</p>
        <p className="text-center text-[12px] font-[500] text-[var(--main-text-color)] mt-4 text-[#000000]">Awesome 4 | Dreamers 1</p>
        </div>
    </div>
  )
}

export default Section1