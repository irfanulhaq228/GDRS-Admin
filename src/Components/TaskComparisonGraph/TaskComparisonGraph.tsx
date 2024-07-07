import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const TaskComparisonGraph = () => {
  const solidLineData = [9, 11, 5, 10, 15, 10, 25, 23, 23, 35, 32, 33];
  const dashedLineData = [10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30];

  const solidLineMaxIndex = solidLineData.indexOf(Math.max(...solidLineData));
  const dashedLineMaxIndex = dashedLineData.indexOf(
    Math.max(...dashedLineData)
  );

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Solid Line",
        data: solidLineData,
        borderColor: "#00004b",
        borderWidth: 1, // Thinner line
        fill: false,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: (context: any) =>
          context.dataIndex === solidLineMaxIndex ? "#00004b" : "transparent",
        pointBorderColor: (context: any) =>
          context.dataIndex === solidLineMaxIndex ? "#00004b" : "transparent",
        pointRadius: (context: any) =>
          context.dataIndex === solidLineMaxIndex ? 5 : 0,
      },
      {
        label: "Dashed Line",
        data: dashedLineData,
        borderColor: "gray",
        borderWidth: 1, // Thinner line
        borderDash: [5, 5],
        fill: false,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: (context: any) =>
          context.dataIndex === dashedLineMaxIndex ? "gray" : "transparent",
        pointBorderColor: (context: any) =>
          context.dataIndex === dashedLineMaxIndex ? "gray" : "transparent",
        pointRadius: (context: any) =>
          context.dataIndex === dashedLineMaxIndex ? 5 : 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Remove background grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: function (value: any) {
            return value + "k";
          },
        },
        grid: {
          display: false, // Remove background grid lines on the y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Remove the legend
      },
    },
  };

  return (
    <div className="shadow-sm mt-5 p-1 sm:p-3 rounded-[5px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default TaskComparisonGraph;
