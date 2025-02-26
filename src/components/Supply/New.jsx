// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// // Register the components needed for Chart.js
// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const LineChart = () => {
//    const timeLabels = [];
// for (let hour = 0; hour <= 24; hour++) {
//   for (let minute = 0; minute < 60; minute += 5) {
//     if (hour === 24 && minute > 0) break; // Stop at 24:00
//     const formattedHour = hour.toString().padStart(2, '0');
//     const formattedMinute = minute.toString().padStart(2, '0');
//     timeLabels.push(`${formattedHour}:${formattedMinute}`);
//   }
// }

      
// const renewables = [3861, 3843, 3811, 3797, 3794, 3787, 3760, 3727, 3695, 3685, 3673, 3643, 3630, 3609, 3596, 3571, 3539, 3516, 3487, 3449, 3408, 3374, 3331, 3300, 3279, 3237, 3189, 3170, 3162, 3154, 3152, 3147, 3156, 3156, 3143, 3105, 3057, 3004, 2954, 2926, 2908, 2880, 2849, 2834, 2815, 2787, 2767, 2765, 2765, 2773, 2785, 2796, 2809, 2831, 2833, 2834, 2846, 2854, 2862, 2864, 2860, 2837, 2814, 2806, 2804, 2796, 2791, 2786, 2789, 2777, 2794, 2808, 2818, 2839, 2858, 2859];

      
//     const naturalGas = [
//         12254, 12204, 12017, 11820, 11787, 11877, 11892, 11900, 11502, 11034, 11087, 11339, 11368, 11336,
//         11301, 11288, 11244, 11200, 11180, 11060, 11032, 11023, 11010, 10930, 10887, 10867, 10852, 10815,
//         10765, 10760, 10768, 10604, 10527, 10531, 10527, 10507, 10502, 10513, 10520, 10518, 10506, 10475,
//         10466, 10419, 10386, 10370, 10356, 10256, 10122, 10079, 10039, 10003, 9937, 9881, 9861, 9858, 9862,
//         9857, 9855, 9859, 9852, 9843, 9830, 9805, 9788, 9781, 9793, 9825, 9841, 9862, 9886, 9900, 9909,
//         9909, 9900, 9886, 9872, 9852, 9807, 9803, 9756, 9651, 9519, 9384, 9087, 8740
//       ];
      
//     const largeHybrid = [
//         3042, 2803, 2603, 2569, 2549, 2496, 2468, 2461, 2456, 2537, 2753, 3006, 3010, 2858, 2643, 2564,
//         2540, 2532, 2516, 2513, 2511, 2506, 2496, 2473, 2417, 2408, 2405, 2422, 2403, 2354, 2332, 2359,
//         2366, 2380, 2392, 2356, 2357, 2427, 2462, 2472, 2461, 2439, 2374, 2362, 2354, 2361, 2356, 2350,
//         2355, 2395, 2408, 2408, 2408, 2365, 2339, 2340, 2340, 2343, 2349, 2340, 2352, 2421, 2448, 2463,
//         2463, 2419, 2405, 2399, 2399, 2395, 2391, 2385, 2380, 2441, 2481, 2492, 2480, 2435, 2413, 2420,
//         2354, 2344, 2330, 2349, 2368, 2280
//       ];
      
//     const imports = [
//         4672, 4235, 4313, 4440, 4525, 4570, 4593, 4604, 4913, 4994, 4879, 4877, 4895, 4996, 5007, 5055,
//         5077, 5107, 5151, 5214, 5262, 5294, 5285, 5321, 5325, 5340, 5444, 5425, 5360, 5418, 5505, 5546,
//         5552, 5551, 5506, 5496, 5417, 5380, 5272, 5265, 5322, 5354, 5427, 5498, 5480, 5469, 5468, 5550,
//         5561, 5551, 5540, 5494, 5563, 5646, 5612, 5606, 5569, 5558, 5573, 5605, 5649, 5544, 5439, 5443,
//         5490, 5522, 5656, 5642, 5679, 5660, 5683, 5719, 5748, 5826, 5968, 5977, 5996, 6124, 6198, 6154,
//         6122, 6092, 6101, 6032, 5707, 5361
//       ];
      
//     const batteries = [
//         -2, 1005, 1413, 1414, 1300, 1119, 988, 860, 883, 1053, 795, 174, 61, 126, 361, 340, 308, 273, 174,
//         178, 83, -36, -61, -59, -45, -3, -72, -71, 9, -52, -158, -120, -84, -129, -143, -155, -205, -315,
//         -304, -324, -385, -399, -434, -460, -421, -429, -420, -419, -304, -274, -188, -116, -95, -61, 21,
//         51, 70, 55, 18, 0, -10, 153, 325, 344, 358, 378, 295, 342, 329, 336, 308, 289, 296, 255, 193, 196,
//         201, 132, 100, 45, -2, -192, -452, -736, -577, -295
//       ];
      
//     const nuclear = [
//         2215, 2212, 2198, 2173, 2156, 2136, 2116, 2097, 2079, 2058, 2037, 2017, 1997, 1979, 1958, 1938,
//         1918, 1898, 1878, 1858, 1837, 1818, 1798, 1778, 1756, 1737, 1717, 1697, 1677, 1662, 1648, 1633,
//         1618, 1606, 1602, 1598, 1594, 1587, 1563, 1556, 1558, 1557, 1557, 1557, 1554, 1551, 1548, 1546,
//         1542, 1542, 1539, 1536, 1528, 1519, 1517, 1512, 1509, 1504, 1498, 1493, 1491, 1486, 1480, 1472,
//         1463, 1454, 1444, 1442, 1441, 1439, 1431, 1427, 1427, 1428, 1428, 1428, 1429, 1429, 1430, 1429,
//         1429, 1429, 1430, 1430, 1430, 1430
//       ];
      
//   const coal = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//   ];
  
//   const other = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//   ];
  
//   const data = {
//     labels: timeLabels,
//     datasets: [
//       {
//         label: 'Coal',
//         data: coal,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Other',
//         data: other,
//         borderColor: 'rgba(153, 102, 255, 1)',
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Nuclear',
//         data: nuclear,
//         borderColor: 'rgba(255, 159, 64, 1)',
//         backgroundColor: 'rgba(255, 159, 64, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Batteries',
//         data: batteries,
//         borderColor: 'rgba(255, 99, 132, 1)',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Imports',
//         data: imports,
//         borderColor: 'rgba(54, 162, 235, 1)',
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Large Hybrid',
//         data: largeHybrid,
//         borderColor: 'rgba(255, 206, 86, 1)',
//         backgroundColor: 'rgba(255, 206, 86, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Natural Gas',
//         data: naturalGas,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//       },
//       {
//         label: 'Renewables',
//         data: renewables,
//         borderColor: 'rgba(153, 102, 255, 1)',
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const label = context.dataset.label || '';
//             const value = context.raw;
//             return `${label}: ${value}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Time',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Value',
//         },
//       },
//     },
//   };

//     return (
//         <>
//             <Line data={data} options={options} />;
//         </>
//     )
// };

// export default LineChart;
