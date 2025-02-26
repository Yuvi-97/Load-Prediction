import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { FaBolt, FaLeaf, FaSun, FaWind, FaRecycle } from 'react-icons/fa';
import './Dashboard.css';
import ChartComponent from './ChartComponent';
import Hybrid from './LineChartComponent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LineChart from './linechart';
import { FaFilePdf } from 'react-icons/fa';
import CHeaderIcon from './hederIcons/charthead';
import HHeaderIcon from './hederIcons/hybridhead';
import SHeaderIcon from './hederIcons/supplytrendsHead';

const DashboardSupply = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [selectedDateOption, setSelectedDateOption] = useState('today');
  const [selectedChartOption, setSelectedChartOption] = useState('today');
  const [selectedHybridDateOption, setHybridSelectedDateOption] = useState('today');


  // Function to update the selected date option
  const handleChartOptionChange =(newDateOption) =>{
    setSelectedChartOption(newDateOption);
  }
  const handleDateOptionChange = (newDateOption) => {
    setSelectedDateOption(newDateOption);
  };
  const handleDatehybridOptionChange = (newDateOption) => {
    setHybridSelectedDateOption(newDateOption);
  };
  const [hoveredChart, setHoveredChart] = useState(null);

  const supplyData = [
    { name: 'Renewables', value: 6115, color: '#4e8b23' },
    { name: 'Natural Gas', value: 10783, color: '#a14500' }, 
    { name: 'Large Hydro', value: 6500, color: '#002c4f' }, 
    { name: 'Imports', value: 5840, color: '#5d1a1a' },
    { name: 'Batteries', value: 224, color: '#664587' },
    { name: 'Nuclear', value: 2226, color: '#8b5d87' }, 
    { name: 'Coal', value: 0, color: '#333' }, 
  ];

  const renewablesData = [
    { name: 'Solar', value: 3766, color: '#cc7a1b' }, 
    { name: 'Wind', value: 845, color: '#1c5f8c' }, 
    { name: 'Geothermal', value: 748, color: '#4d331f' }, 
    { name: 'Biomass', value: 319, color: '#004422' }, 
    { name: 'Biogas', value: 153, color: '#999900' },
    { name: 'Small Hydro', value: 284, color: '#006666' },
  ];

  const currentHybridData = [
    { name: 'Hybrid Solar', value: 150, color: '#e4722c' },
    { name: 'Hybrid Wind', value: 80, color: '#073763' },  
    { name: 'Hybrid Batteries', value: 40, color: '#6f42c1' },
  ];

  const smallDonutData = [
    { name: 'Hybrid Demand', value: 0.1, color: '#6f42c1' }
  ];

  const renderLegend = (data) => (
    <div className="legend-container">
      {data.map((entry, index) => (
        <div className="legend-item" key={`legend-${index}`}>
          <div
            className="legend-color"
            style={{ backgroundColor: entry.color }}
          />
          <div className="legend-text">
            {entry.name}: {((entry.value / data.reduce((acc, item) => acc + item.value, 0)) * 100).toFixed(2)}%
          </div>
        </div>
      ))}
    </div>
  );

  const renderLegendHyb = (data) => (
    <div className="legend-container-hyb">
      {data.map((entry, index) => (
        <div className="legend-item" key={`legend-${index}`}>
          <div
            className="legend-color"
            style={{ backgroundColor: entry.color }}
          />
          <div className="legend-text">
            {entry.name}: {((entry.value / data.reduce((acc, item) => acc + item.value, 0)) * 100).toFixed(2)}%
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
    <Header/>
      <div className="dashboard-container">
      <div className="container-1">

      <header className="dashboard-header">
        <h1>Supply and renewables <span>AS OF 07:10</span></h1>
      </header>
      
      <header className="heade-s">
            <div className="header-left">
              <p>
                Grid Status: <span className="status-normal">Normal</span>
              </p>
            </div>
            <div className="header-right">
              <a href="#learn-more" className="learn-more">
                Learn more about active alerts, warnings, and emergencies
              </a>
              <a href="#pdf" className="pdf-icon">
                <FaFilePdf size={20} /> {/* Using the PDF icon */}
              </a>
            </div>
      </header>


      <div className="dashboard-stats">
        <div className="stat-item">
          <div className="icon demand-icon">
            <FaBolt size={40} color="#e5c100" />
          </div>
          <div className="stat-value">27,882 MW</div>
          <div className="stat-label">Current demand</div>
        </div>
        <div className="stat-item">
          <div className="icon renewables-icon">
            <FaLeaf size={40} color="#4e8b23" />
          </div>
          <div className="stat-value">5,918 MW</div>
          <div className="stat-label">Current renewables</div>
        </div>
        <div className="stat-item">
          <div className="icon hybrids-icon">
            <FaRecycle size={40} color="#008b8b" />
          </div>
          <div className="stat-value">198 MW</div>
          <div className="stat-label">Current hybrids</div>
        </div>
        <div className="stat-item">
          <div className="icon solar-icon">
            <FaSun size={40} color="#cc7a1b" />
          </div>
          <div className="stat-value">4,160 MW</div>
          <div className="stat-label">Current solar</div>
        </div>
        <div className="stat-item">
          <div className="icon wind-icon">
            <FaWind size={40} color="#1c5f8c" />
          </div>
          <div className="stat-value">855 MW</div>
          <div className="stat-label">Current wind</div>
        </div>
      </div>

      <div className="charts-section">
        <div
          className="chart-wrapper"
          onMouseEnter={() => setHoveredChart('supply')}
          onMouseLeave={() => setHoveredChart(null)}
          >
          <h2 className="chart-title">Current supply</h2>
          <div className="chart-data-container">
            <div className="pie-chart-container">
              <PieChart width={400} height={250}>
                <Pie
                  data={supplyData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}  
                  label
                  >
                  {supplyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {hoveredChart === 'supply' && (
                  <Pie
                  data={supplyData}
                  dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}  
                    innerRadius={90}   
                    label={false}  
                    >
                    {supplyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} opacity={0.3} /> 
                    ))}
                  </Pie>
                )}
                <Tooltip />
              </PieChart>
            </div>
            {renderLegend(supplyData)}
          </div>
        </div>
        <div
          className="chart-wrapper"
          onMouseEnter={() => setHoveredChart('renewables')}
          onMouseLeave={() => setHoveredChart(null)}
          >
          <h2 className="chart-title">Current renewables</h2>
          <div className="chart-data-container">
            <div className="pie-chart-container">
              <PieChart width={400} height={250}>
                <Pie
                  data={renewablesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  label
                  >
                  {renewablesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {hoveredChart === 'renewables' && (
                  <Pie
                  data={renewablesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  innerRadius={90}
                  label={false}
                  >
                    {renewablesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} opacity={0.3} />
                    ))}
                  </Pie>
                )}
                <Tooltip />
              </PieChart>
            </div>
            {renderLegend(renewablesData)}
          </div>
          </div>
       
          
      </div>
      
      <div
        className="chart-wrapper full-width-chart"
        onMouseEnter={() => setHoveredChart('hybrid')}
        onMouseLeave={() => setHoveredChart(null)}
        >
        <h2 className="chart-title-hyb">Current Hybrid</h2>
        <div className="chart-data-container-hyb">
          <div className="pie-chart-container-hyb">
            <PieChart width={350} height={200}> 
              <Pie
                data={currentHybridData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60} 
                innerRadius={30} 
                label
                >
                {currentHybridData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {hoveredChart === 'hybrid' && (
                <Pie
                data={currentHybridData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={60}
                label={false}
                >
                  {currentHybridData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} opacity={0.3} />
                  ))}
                </Pie>
              )}
              <Tooltip />
            </PieChart>
            {renderLegendHyb(currentHybridData)}
          </div>
          <div className="small-donut-container">
            <PieChart width={80} height={80}>
              <Pie
                data={smallDonutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={30}
                innerRadius={20}
                label
                >
                {smallDonutData.map((entry, index) => (
                  <>
                  <Cell key={`cell-${index}`} fill={entry.color}
                  />
                  </>
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="small-donut-label">
              <span className="percentage-text">0.1%</span>
              <span className="label-text">Hybrid serving demand</span>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="chart-wrapper" style={{ width: "85vw", height: "600px", marginTop: "45px", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)", borderRadius: "4px", marginLeft: "4%",marginRight: "4%", textAlign: "center", padding: "16px", backgroundColor: "#fff" }}>
          <h1 style={{ marginRight: "520px",paddingBottom:"10px" }}>Supply Trends</h1>
            <HeaderIcon />
            <hr className="divider-line" />
            <LineChart />
        </div> */}
        <div className="chart-wrapper" style={{ width: "85vw", height: "600px", marginTop: "45px", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)", borderRadius: "4px", marginLeft: "4%",marginRight: "4%", textAlign: "center", padding: "16px", backgroundColor: "#fff" }}>
          <h1 style={{ marginRight: "520px",paddingBottom:"10px" }}>Supply Trends</h1>
          {/* Pass the handleDateOptionChange function to HeaderIcon to update the date option */}
          <SHeaderIcon onDateOptionChange={handleDateOptionChange} />
          <hr className="divider-line" /> 
          {/* Pass the selectedDateOption to LineChart */}
          <LineChart selectedDateOption={selectedDateOption} />
        </div>

        
        <div style={{ width: "85vw", height: "750px", marginTop: "45px", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)", borderRadius: "4px", marginLeft: "4%", textAlign: "center", padding: "16px", backgroundColor: "#fff" }}>
          <CHeaderIcon onDateOptionChange={handleChartOptionChange}/>
          <hr className="divider-line" />
          <ChartComponent selectedChartOption={selectedChartOption}/>
        </div>

        <div style={{ width: "85vw", height: "750px", marginTop: "25px", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)", borderRadius: "4px", marginLeft: "4%", textAlign: "center", padding: "16px", backgroundColor: "#fff" }}>
          <HHeaderIcon  onDateOptionChange={handleDatehybridOptionChange}/>
          <hr className="divider-line" />
          <Hybrid selectedHybridDateOption={selectedHybridDateOption}/>
        </div>
        </div>
    </div>

    {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>X</button>
          <div className="sidebar-content">
            <h3>Info Sidebar</h3>
            <p>Here you can add additional information or instructions related to the charts.</p>
          </div>
        </div>
    )}
<Footer/>
    </>

  );
};

export default DashboardSupply;
