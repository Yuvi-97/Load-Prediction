import React from "react";
import { Box, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import './PieChart.css';

const data = [
  { name: "Imported CO2", value: 29.1, color: "#FF6384" },
  { name: "Natural Gas", value: 68.1, color: "#36A2EB" },
  { name: "Biogas", value: 1.0, color: "#FFCE56" },
  { name: "Biothermal", value: 1.8, color: "#4BC0C0" },
  { name: "Geothermal CO2", value: 0.8, color: "#9966FF" },
  { name: "Coal CO2", value: 0.0, color: "#FF9F40" },
];

const PieCharts = () => {
  return (
    <Box className="pie-chart-container">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={60}
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <Paper className="pie-chart-legend-container">
        <Box className="pie-chart-legend">
          {data.map((entry) => (
            <ListItem key={entry.name} sx={{ display: 'flex', alignItems: 'center', p: 0 }}>
              <ListItemIcon>
                <CircleIcon sx={{ color: entry.color, fontSize: '1rem' }} />
              </ListItemIcon>
              <ListItemText primary={`${entry.name}: ${entry.value}%`} />
            </ListItem>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default PieCharts;
