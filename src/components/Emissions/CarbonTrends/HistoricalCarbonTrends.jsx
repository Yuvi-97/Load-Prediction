import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import { dataset } from './dataset';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const labels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
const data = {
  labels,
  datasets: dataset.map((data, index) => ({
    label: `Year ${data.year}`,
    data: data.values,
    fill: false,
    borderColor: `hsl(${index * 360 / dataset.length}, 70%, 50%)`, // Unique color for each year
    tension: 0.1
  }))
};

// Tooltip callback function
const tooltipCallbacks = {
  title: (tooltipItems) => `Month: ${tooltipItems[0].label}`,
  label: (tooltipItem) => {
    const monthIndex = tooltipItem.dataIndex;
    const allYearsData = dataset
      .map((data) => {
        const value = data.values[monthIndex];
        return value !== null ? `Year ${data.year}: ${value} kWh` : null;
      })
      .filter((item) => item !== null);
    return allYearsData;
  }
};

const LineChart = () => (
  <div style={{ width: '100%', height: '100%'}}>
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fill the container
        plugins: {
          tooltip: {
            callbacks: tooltipCallbacks,
            backgroundColor: 'white',
            titleColor: 'black',
            bodyColor: 'black',
            borderColor: '#fff',
            borderWidth: 1,
            displayColors: false,
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Month' }
          },
          y: {
            title: { display: true, text: 'Consumption' }
          }
        }
      }}
    />
  </div>
);

export default LineChart;
