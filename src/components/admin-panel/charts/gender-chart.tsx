import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions,Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const data: ChartData<"doughnut"> = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Gender Distribution",
      data: [60, 40], // Example data representing 60% males and 40% females
      backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
    maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Gender Distribution",
    },
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

const GenderChart: React.FC = () => {
  return (
      <Doughnut data={data} options={options} />
  );
};

export default GenderChart;
