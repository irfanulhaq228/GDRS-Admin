import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraphAndAnalyticsPeriod = () => {
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
        label: "Value",
        data: [
          750, 1100, 800, 1300, 1000, 1200, 1000, 800, 750, 1000, 900, 1300,
        ],
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart render
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgb(160, 169, 218)");
          gradient.addColorStop(1, "rgb(119, 138, 247)");
          return gradient;
        },
        borderRadius: 2,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 10, // Set font size for legend
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 10, // Set font size for tooltip title
        },
        bodyFont: {
          size: 10, // Set font size for tooltip body
        },
        footerFont: {
          size: 10, // Set font size for tooltip footer
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10, // Set font size for x-axis labels
          },
        },
        barPercentage: 0.5, // Adjusts the width of the bars
        categoryPercentage: 0.5, // Adjusts the width of the bars
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 400, // Set the interval between tick marks
          font: {
            size: 10, // Set font size for y-axis labels
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <>
      <div className="bg-white rounded-[4px] px-1 py-1 sm:p-6 h-[100%] md:h-[400px] xl:h-[250px] 2xl:h-[400px] flex-1 scale-[0.95] sm:scale-100">
        <Bar data={data} options={options}></Bar>
      </div>
    </>
  );
};

export default BarGraphAndAnalyticsPeriod;
