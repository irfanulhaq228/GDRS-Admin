import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MembersTaskAnalytics = () => {
  const data = {
    labels: ["Task A", "Task B", "Task C", "Task D"],
    datasets: [
      {
        data: [52, 22, 13, 13],
        backgroundColor: ["#515186", "#B1E3FF", "#A1E3CB", "#A8C5DA"],
        borderWidth: 5,
        borderColor: "#ebeeff",
        hoverBorderColor: "#FFFFFF",
        borderRadius: 5,
      },
    ],
  };
  const options: any = {
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  return (
    <div className="mt-4 rounded-[4px] flex flex-col xl:flex-row xl:gap-10 gap-5">
      <div className="bg-white rounded-[4px] p-3 sm:p-4 xl:w-[60%] flex flex-col gap-3">
        <p className="text-[13px] font-[500]">Abdullah Ali favourite tasks</p>
        <ProgressBar title={"Task A"} progress={"w-[100%]"} value={29} />
        <ProgressBar title={"Task B"} progress={"w-[50%]"} value={14} />
        <ProgressBar title={"Task C"} progress={"w-[20%]"} value={7} />
        <ProgressBar title={"Task D"} progress={"w-[10%]"} value={2} />
      </div>
      <div className="flex-1 flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center justify-center w-[230px] relative">
          <Doughnut data={data} options={options} />
        </div>
        <div className="grid grid-cols-2 gap-3 w-[210px]">
          <div className="flex items-center text-[12px] gap-2">
            <p className="h-[8px] w-[8px] bg-[#515186] rounded-full"></p>
            <p>Task A 52%</p>
          </div>
          <div className="flex items-center text-[12px] gap-2">
            <p className="h-[8px] w-[8px] bg-[#B1E3FF] rounded-full"></p>
            <p>Task B 22%</p>
          </div>
          <div className="flex items-center text-[12px] gap-2">
            <p className="h-[8px] w-[8px] bg-[#A1E3CB] rounded-full"></p>
            <p>Task C 13%</p>
          </div>
          <div className="flex items-center text-[12px] gap-2">
            <p className="h-[8px] w-[8px] bg-[#A8C5DA] rounded-full"></p>
            <p>Task D 13%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTaskAnalytics;

const ProgressBar = ({
  title,
  progress,
  value,
}: {
  title: string;
  progress: string;
  value: number;
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <div
          className={`h-[32px] bg-[#7C9CF5] ${progress} rounded-[4px] flex items-center justify-end px-2 sm:px-3`}
        >
          <p className="text-white text-[12px] font-[500]">{value}x</p>
        </div>
      </div>
      <p className="font-[500] text-[13px] capitalize">{title}</p>
    </div>
  );
};
