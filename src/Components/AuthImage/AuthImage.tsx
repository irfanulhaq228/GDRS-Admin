import img from "../../assets/images/Auth-img.png";

const AuthImage = () => {
  return (
    <div
      className="flex-1 relative flex justify-center items-center bg-[red]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img src={img} className="w-[100%] object-cover object-left h-[100%]" /> */}
      <div className="w-[90%] sm:w-[80%] lg:w-[460px] md:h-[380px] border-[#7f989a81] border-[2px] rounded-[6px] bg-[#a9c2c642] text-white flex flex-col justify-center py-5 my-5">
        <p className="border-[#ffffff7e] border-l-[2px] pl-[15px] mx-[20px] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] font-[700]">
          Welcome to GDRS
        </p>
        <p className="mx-[35px] text-[13px] mt-5">
          GDRS help your children to set goals to achieve something noble and
          good. You can track your children progress and build their teams
        </p>
      </div>
    </div>
  );
};

export default AuthImage;
