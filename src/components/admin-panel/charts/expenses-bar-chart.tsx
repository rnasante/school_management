import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Function to get the labels for the past three months
const getPastThreeMonths = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Get the current month (0-indexed)
  const months = [];

  // Loop through the past three months and push their names into the array
  for (let i = 2; i >= 0; i--) {
    const month = (currentMonth - i + 12) % 12; // Ensure month wraps around to previous year
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long"
    }).format(
      new Date(2022, month, 1) // 2022 is an arbitrary non-leap year
    );
    months.push(monthName);
  }

  return months;
};

const data: ChartData<"bar"> = {
  labels: getPastThreeMonths(), // Use the dynamic labels
  datasets: [
    {
      label: "Expenses",
      data: [1200, 1500, 1700], // Replace with your actual expense data
      backgroundColor: [
        "rgba(75, 192, 192, 0.9)", // March
        "rgba(255, 99, 132, 0.9)", // April
        "rgba(54, 162, 235, 0.9)" // May
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)"
      ],
      borderWidth: 1
    }
  ]
};

const options: ChartOptions<"bar"> = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Expenses for the Past 3 Months"
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month"
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)"
      }
    },
    y: {
      title: {
        display: true,
        text: "Expenses (USD)"
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)"
      }
    }
  }
};

const ExpensesBarChart: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default ExpensesBarChart;
