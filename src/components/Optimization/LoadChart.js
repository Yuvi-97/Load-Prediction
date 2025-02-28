// src/components/LoadChart.js
import { BarElement, CategoryScale, Chart, Legend, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement, Title, Tooltip, Legend);

const LoadChart = ({ feeders }) => {
  const data = {
    labels: feeders.map((f) => f.name),
    datasets: [
      {
        label: "Current Load (MW)",
        data: feeders.map((f) => f.load),
        backgroundColor: feeders.map((f) => (f.load > 0.8 * f.capacity ? "red" : "green")),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Feeder Load Status" },
    },
    scales: {
      x: { title: { display: true, text: "Feeders" } },
      y: { title: { display: true, text: "Load (MW)" }, beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto", height: "400px" }}>
      <h3>Feeder Load Status</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LoadChart;
