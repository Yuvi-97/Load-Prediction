import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { WiDaySunny } from "react-icons/wi";
import { MdNightlight } from "react-icons/md";
import './Dashboard.css';

// Sample data arrays
const loadCurveData = [
    { time: '00:00', load: 400 },
    { time: '01:00', load: 380 },
    { time: '02:00', load: 350 },
    { time: '03:00', load: 340 },
    { time: '04:00', load: 330 },
    { time: '05:00', load: 320 },
    { time: '06:00', load: 400 },
    { time: '07:00', load: 600 },
    { time: '08:00', load: 700 },
    { time: '09:00', load: 800 },
    { time: '10:00', load: 850 },
    { time: '11:00', load: 900 },
    { time: '12:00', load: 950 },
    { time: '13:00', load: 1000 },
    { time: '14:00', load: 1050 },
    { time: '15:00', load: 1100 },
    { time: '16:00', load: 1150 },
    { time: '17:00', load: 1200 },
    { time: '18:00', load: 1250 },
    { time: '19:00', load: 1300 },
    { time: '20:00', load: 1400 },
    { time: '21:00', load: 1350 },
    { time: '22:00', load: 1200 },
    { time: '23:00', load: 1000 }
  ];
  

  const weatherImpactData = [
    { condition: 'Sunny', load: 1000 },
    { condition: 'Rainy', load: 800 },
    { condition: 'Cloudy', load: 600 },
    { condition: 'Snowy', load: 700 },
    { condition: 'Windy', load: 850 },
    { condition: 'Foggy', load: 550 },
    { condition: 'Thunderstorm', load: 900 },
    { condition: 'Hail', load: 750 },
    { condition: 'Overcast', load: 650 },
    { condition: 'Hot', load: 1200 },
    { condition: 'Cold', load: 950 }
  ];
  

  const peakLoadTimesData = [
    { time: 'Early Morning', load: 500 },
    { time: 'Morning', load: 1200 },
    { time: 'Late Morning', load: 1300 },
    { time: 'Early Afternoon', load: 1500 },
    { time: 'Afternoon', load: 1700 },
    { time: 'Late Afternoon', load: 1600 },
    { time: 'Early Evening', load: 1800 },
    { time: 'Evening', load: 1900 },
    { time: 'Late Evening', load: 1700 },
    { time: 'Night', load: 1400 },
    { time: 'Late Night', load: 1200 }
  ];
  

const Dashboard = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('24h');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedLoadType, setSelectedLoadType] = useState('All');
  const [theme, setTheme] = useState('light');

  const handleTimeFrameChange = (timeFrame) => setSelectedTimeFrame(timeFrame);
  const handleAreaChange = (area) => setSelectedArea(area);
  const handleLoadTypeChange = (loadType) => setSelectedLoadType(loadType);

  // Function to toggle theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-theme');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Power Consumption Dashboard</h1>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle-button">{theme === 'light' ? <MdNightlight /> : <WiDaySunny />}
        </button>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-item load-curves">
          <h2>Load Curves ({selectedTimeFrame})</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={loadCurveData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="load" stroke="#007acc" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-item weather-impact">
          <h2>Weather Impact</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weatherImpactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="condition" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="load" fill="#007acc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-item peak-load-times">
          <h2>Peak Load Times ({selectedArea})</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={peakLoadTimesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="load" stroke="#007acc" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="customizable-views">
        <h2>Customizable Views</h2>
        <div className="customization-options">
          <button onClick={() => handleTimeFrameChange('24h')}>24 Hours</button>
          <button onClick={() => handleTimeFrameChange('7d')}>7 Days</button>
          <button onClick={() => handleAreaChange('North')}>North Area</button>
          <button onClick={() => handleAreaChange('South')}>South Area</button>
          <button onClick={() => handleLoadTypeChange('Domestic')}>Domestic</button>
          <button onClick={() => handleLoadTypeChange('Commercial')}>Commercial</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
