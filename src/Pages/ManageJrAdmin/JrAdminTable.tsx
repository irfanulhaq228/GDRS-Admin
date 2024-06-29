import jrAdminIcon from "../../assets/svg/jr_admin_icon.svg";
import deleteIcon from "../../assets/svg/delete-icon.svg";

const JrAdminTable = ({ showJrAdmins }: { showJrAdmins: boolean }) => {
  return (
    <div
      className={`${
        !showJrAdmins ? "max-h-0" : "max-h-[400px] pt-6"
      } overflow-x-auto md:overflow-hidden transition-all duration-500 w-[87vw] sm:w-[85vw] md:w-full`}
    >
      <table className={`w-[800px] md:w-full text-[12px]`}>
        <thead className="font-[600]">
          <tr className="leading-[40px] shadow-sm">
            <td className="rounded-bl-[5px] rounded-tl-[5px] bg-[var(--main-bg-color)] ps-5">
              Jr Admins Name
            </td>
            <td className="bg-[var(--main-bg-color)]">Jr Admin Email</td>
            <td className="bg-[var(--main-bg-color)]">Phone Number</td>
            <td className="bg-[var(--main-bg-color)]">Delete jr Admin</td>
            <td className="rounded-br-[5px] rounded-tr-[5px] bg-[var(--main-bg-color)] w-[120px]">
              Team Managing
            </td>
          </tr>
        </thead>
        <br />
        <tbody className="font-[500]">
          <tr className="">
            <td className="rounded-bl-[5px] rounded-tl-[5px] ps-5 flex items-center gap-2 pt-4">
              <img src={jrAdminIcon} className="w-[26px] h-[26px]" />
              <span>Joshua Little</span>
            </td>
            <td>Joshua Little73@gmail.com</td>
            <td>+234 123 2342</td>
            <td className="ps-4">
              <img src={deleteIcon} className="" />
            </td>
            <td className="rounded-br-[5px] rounded-tr-[5px] w-[120px] text-center pe-5">
              4
            </td>
          </tr>
          <tr className="leading-[40px]">
            <td className="rounded-bl-[5px] rounded-tl-[5px] ps-5 flex items-center gap-2 pt-2.5">
              <img src={jrAdminIcon} className="w-[26px] h-[26px]" />
              <span>Joshua Little</span>
            </td>
            <td>Joshua Little73@gmail.com</td>
            <td>+234 123 2342</td>
            <td className="ps-4">
              <img src={deleteIcon} className="" />
            </td>
            <td className="rounded-br-[5px] rounded-tr-[5px] w-[120px] text-center pe-5">
              4
            </td>
          </tr>
          <tr className="leading-[40px]">
            <td className="rounded-bl-[5px] rounded-tl-[5px] ps-5 flex items-center gap-2 pt-2.5">
              <img src={jrAdminIcon} className="w-[26px] h-[26px]" />
              <span>Joshua Little</span>
            </td>
            <td>Joshua Little73@gmail.com</td>
            <td>+234 123 2342</td>
            <td className="ps-4">
              <img src={deleteIcon} className="" />
            </td>
            <td className="rounded-br-[5px] rounded-tr-[5px] w-[120px] text-center pe-5">
              4
            </td>
          </tr>
          <tr className="leading-[40px]">
            <td className="rounded-bl-[5px] rounded-tl-[5px] ps-5 flex items-center gap-2 pt-2.5">
              <img src={jrAdminIcon} className="w-[26px] h-[26px]" />
              <span>Joshua Little</span>
            </td>
            <td>Joshua Little73@gmail.com</td>
            <td>+234 123 2342</td>
            <td className="ps-4">
              <img src={deleteIcon} className="" />
            </td>
            <td className="rounded-br-[5px] rounded-tr-[5px] w-[120px] text-center pe-5">
              4
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JrAdminTable;
