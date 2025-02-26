import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import { dataset, lastYearDataset } from './dataset'; // Ensure dataset import is correct

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const energySources = ["Renewables", "Natural Gas", "Large Hydro", "Imports", "Batteries", "Nuclear", "Coal", "Other"];
const labels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

// Tooltip callback function
const tooltipCallbacks = {
  title: (tooltipItems) => `Month: ${tooltipItems[0].label}`,
  label: (tooltipItem) => {
    const monthIndex = tooltipItem.dataIndex;
    return energySources
      .map((source, index) => {
        const value = dataset[index].values[monthIndex];
        return value !== null ? `${source}: ${value} kWh` : null;
      })
      .filter((item) => item !== null);
  },
};

const LineChart = ({ selectedDateOption }) => {
  // Use the selected date option to choose the correct dataset
  const selectedDataset = selectedDateOption === 'lastyear' ? lastYearDataset : dataset;

  const data = {
    labels,
    datasets: energySources.map((source, index) => ({
      label: source,
      data: selectedDataset[index].values,
      fill: false,
      borderColor: `hsl(${index * 360 / energySources.length}, 70%, 50%)`,
      tension: 0.1
    }))
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: tooltipCallbacks,
              backgroundColor: 'white',
              titleColor: 'black',
              bodyColor: 'black',
              borderColor: '#fff',
              borderWidth: 1,
              displayColors: false,
            },
          },
          scales: {
            x: {
              title: { display: true, text: 'Month' }
            },
            y: {
              title: { display: true, text: 'MW' }
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
