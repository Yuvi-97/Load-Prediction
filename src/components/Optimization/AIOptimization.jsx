// import React from "react";

// const AIOptimization = ({ feeders, setFeeders }) => {
//   const optimizeLoad = () => {
//     setFeeders(feeders.map(f => ({ ...f, load: Math.random() * f.capacity })));
//   };

//   return (
//     <div>
//       <h3>AI Load Optimization</h3>
//       <button onClick={optimizeLoad}>Optimize</button>

//       <div className="status">
//         <h3>📊 Feeder Status</h3>
//         <ul>
//           {feeders.map(f => (
//             <li key={f.id}>
//               {f.name}: <b>{f.load.toFixed(2)} MW</b> / {f.capacity} MW
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AIOptimization;
