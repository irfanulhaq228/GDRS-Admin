import svg from "../../assets/svg/notification-icon.svg";
import img from "../../assets/images/navbar-profile.png";

const Navbar = () => {
  return (
    <div
      className="bg-white mt-[44px] rounded-[8px] mx-[30px] h-[60px] flex items-center justify-between px-[30px] text-[var(--main-text-color)]"
      style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
    >
      <p className="text-[15px] font-[700]">Good Afternoon, Kevin Karter</p>
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-full border flex justify-center items-center">
          <img src={svg} />
        </div>
        <div className="h-[40px] w-[40px] rounded-full border">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
