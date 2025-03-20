import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data: ChartData<"line"> = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [
    {
      label: "Earnings",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "#c5924a",
      backgroundColor: "#6d91457c",
      fill: true,
      tension: 0.4 // makes the line wavy
    },
    {
      label: "Fees",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "#c5924a",
      backgroundColor: "#9864367b",
      fill: true,
      tension: 0.4 // makes the line wavy
    }
  ]
};

const options: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Earnings and Fees Collection Chart"
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Days of the Week"
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)" // gray color for the grid lines
      }
    },
    y: {
      title: {
        display: true,
        text: "Amount"
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)" // gray color for the grid lines
      }
    }
  }
};

const EarningsAndFeesChart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default EarningsAndFeesChart;
