import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import { Box } from '@mui/material';
import { biogasArray, biomassArray, coalsData, geothermalArray, imports, naturalGas, timestampData } from '../../../Arrays/arrays';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const StackedLineChart = () => {
  const timestamps = timestampData;

  const importsData = imports;
  const naturalGasData = naturalGas;
  const biogasData = biogasArray;
  const biomassData = biomassArray;
  const geothermalData = geothermalArray;
  const coalData = coalsData;

  const convertTimestampToMinutes = (timestamp) => {
    const [hours, minutes] = timestamp.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Imports',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: importsData[index],
        })),
        borderColor: 'rgba(201, 203, 207, 1)',
        backgroundColor: 'rgba(201, 203, 207, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
      {
        label: 'Natural Gas',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: naturalGasData[index],
        })),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
      {
        label: 'Biogas',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: biogasData[index],
        })),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
      {
        label: 'Biomass',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: biomassData[index],
        })),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
      {
        label: 'Geothermal',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: geothermalData[index],
        })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
      {
        label: 'Coal',
        data: timestamps.map((timestamp, index) => ({
          x: convertTimestampToMinutes(timestamp),
          y: coalData[index],
        })),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        fill: true,
        tension: 0.2,
        stack: 'stack1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        titleColor: 'black',
        bodyColor: 'black',
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.y} tons`;
          },
          title: function (context) {
            const timestamp = timestamps[context[0].dataIndex];
            return `CO2 Emission Details at ${timestamp}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Time (hours)',
        },
        ticks: {
          stepSize: 60,
          callback: function (value) {
            const hours = Math.floor(value / 60);
            const minutes = value % 60;
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'CO2 Emissions (tons)',
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '338px' }}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default StackedLineChart;
