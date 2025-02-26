import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import './Prediction.css';
import jsonData from './predictData.json'; // Assuming correct JSON format
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Helper function to check if a date string is valid
const isValidDate = (dateStr) => {
  const dateParts = dateStr.split('-');
  if (dateParts.length !== 3) return false;

  const [day, month, year] = dateParts.map(Number);
  const date = new Date(year, month - 1, day);
  return !isNaN(date.getTime()) && dateStr !== 'NaN-NaN-NaN';
};

// Helper function to parse and format dates
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const parseInputDate = (dateStr) => new Date(dateStr);
const parseJSONDate = (dateStr) => {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Filter data by valid date range
const filterDataByDateRange = (data, from, to) => {
  const fromDate = parseInputDate(from);
  const toDate = parseInputDate(to);
  return data.filter((item) => {
    const itemDate = parseJSONDate(item.date);
    return itemDate >= fromDate && itemDate <= toDate;
  });
};

// Filter data by year range
const filterYearDataByRange = (data, fromYear, toYear) => {
  const from = parseInt(fromYear, 10);
  const to = parseInt(toYear, 10);
  return data.filter((item) => {
    const year = parseInt(item.date.split('-')[2], 10);
    return year >= from && year <= to;
  });
};

const Prediction = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dayRange, setDayRange] = useState({ from: "", to: "" });
  const [monthRange, setMonthRange] = useState({ from: "", to: "" });
  const [yearRange, setYearRange] = useState({ from: 2024, to: 2024 });
  const [filteredDayData, setFilteredDayData] = useState([]);
  const [filteredMonthData, setFilteredMonthData] = useState([]);
  const [filteredYearData, setFilteredYearData] = useState([]);
  const [graphCategory, setGraphCategory] = useState(null); // New state to track which graph to show

  // Filter data based on day range
  useEffect(() => {
    if (dayRange.from && dayRange.to) {
      const filteredData = filterDataByDateRange(jsonData.day, dayRange.from, dayRange.to);
      setFilteredDayData(filteredData);
    }
  }, [dayRange]);

  // Filter data based on month range
  useEffect(() => {
    if (monthRange.from && monthRange.to) {
      const filteredData = filterDataByDateRange(jsonData.month, monthRange.from, monthRange.to);
      setFilteredMonthData(filteredData);
    }
  }, [monthRange]);

  // Filter data based on year range
  useEffect(() => {
    if (yearRange.from && yearRange.to) {
      const filteredData = filterYearDataByRange(jsonData.year, yearRange.from, yearRange.to);
      setFilteredYearData(filteredData);
    }
  }, [yearRange]);

  const toggleGraphView = (category) => {
    setGraphCategory(graphCategory === category ? null : category); // Toggle the category graph
  };

  // Chart data for Line chart
  const createChartData = (filteredData) => ({
    labels: filteredData.map(item => item.date),
    datasets: [{
      label: 'Power Consumption (MW)',
      data: filteredData.map(item => item.currentConsumption),
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
    }]
  });

  // Customize Y-axis scale with decreased range
  const createChartOptions = (filteredData) => {
    const maxYValue = Math.max(...filteredData.map(item => item.currentConsumption)) + 10;
    const minYValue = Math.min(...filteredData.map(item => item.currentConsumption)) - 10;
    return {
      responsive: true,
      scales: {
        x: {
          title: { display: true, text: 'Date' }
        },
        y: {
          title: { display: true, text: 'Power Consumption (MW)' },
          beginAtZero: false,
          min: minYValue < 0 ? 0 : minYValue,
          max: maxYValue,
          ticks: {
            stepSize: 10,
            callback: function(value) { return value + ' MW'; }
          }
        }
      }
    };
  };

  return (
    <>
    <Header/>
    <div className="prediction-wrapper">
      {/* Sidebar */}
      <div className="prediction-sidebar">
        <div className="prediction-sidebar-section">
          <h3>Date</h3>
          <input type="date" className="pred-date-picker" />
        </div>
        <div className="prediction-sidebar-section">
          <h3>Power Consumption</h3>
          <div className="prediction-power-display">
            <i className="fas fa-bolt"></i>
            <p>120 kWh</p>
          </div>
        </div>
        <div className="prediction-sidebar-section">
          <h3>Comments</h3>
          <button onClick={() => setShowPopup(!showPopup)} className="prediction-comment-button">
            <i className="fas fa-comments"></i> View CSV Data
          </button>
        </div>
      </div>

      {/* Main Prediction Content */}
      <div className="prediction-content">

        {/* Day Wise Prediction */}
        <div className="prediction-category">
          <h2>Day Wise Prediction</h2>
          <div className="prediction-date-range">
            <label>From</label>
            <input 
              type="date" 
              className="pred-date-picker" 
              onChange={(e) => setDayRange({ ...dayRange, from: e.target.value })} 
            />
            <label>To</label>
            <input 
              type="date" 
              className="pred-date-picker" 
              onChange={(e) => setDayRange({ ...dayRange, to: e.target.value })} 
            />
          </div>
          <button className="prediction-comment-button" onClick={() => toggleGraphView('day')}>
            {graphCategory === 'day' ? 'Show Data Table' : 'Graphical View'}
          </button>
          <div className="prediction-data-display">
            {graphCategory === 'day' ? (
              <Line data={createChartData(filteredDayData)} options={createChartOptions(filteredDayData)} />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Comments</th>
                    <th>Power Consumption (MW)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDayData.length > 0 ? (
                    filteredDayData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.holiday ? item.holiday : "No Holiday"}</td>
                        <td>{item.currentConsumption.toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available for the selected range</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Month Wise Prediction */}
        <div className="prediction-category">
          <h2>Month Wise Prediction</h2>
          <div className="prediction-date-range">
            <label>From</label>
            <input
              type="month"
              className="pred-date-picker"
              onChange={(e) => setMonthRange({ ...monthRange, from: e.target.value })}
            />
            <label>To</label>
            <input
              type="month"
              className="pred-date-picker"
              onChange={(e) => setMonthRange({ ...monthRange, to: e.target.value })}
            />
          </div>
          <button className="prediction-comment-button" onClick={() => toggleGraphView('month')}>
            {graphCategory === 'month' ? 'Show Data Table' : 'Graphical View'}
          </button>
          <div className="prediction-data-display">
            {graphCategory === 'month' ? (
              <Line data={createChartData(filteredMonthData)} options={createChartOptions(filteredMonthData)} />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Comments</th>
                    <th>Power Consumption (MW)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMonthData.length > 0 ? (
                    filteredMonthData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.holiday ? item.holiday : "No Holiday"}</td>
                        <td>{item.currentConsumption.toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available for the selected range</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Year Wise Prediction */}
        <div className="prediction-category">
          <h2>Year Wise Prediction</h2>
          <div className="prediction-date-range">
            <label>From</label>
            <input
              type="number"
              min={2000}
              max={2050}
              defaultValue={2024}
              className="pred-date-picker"
              onChange={(e) => setYearRange({ ...yearRange, from: e.target.value })}
            />
            <label>To</label>
            <input
              type="number"
              min={2000}
              max={2050}
              defaultValue={2024}
              className="pred-date-picker"
              onChange={(e) => setYearRange({ ...yearRange, to: e.target.value })}
            />
          </div>
          <button className="prediction-comment-button" onClick={() => toggleGraphView('year')}>
            {graphCategory === 'year' ? 'Show Data Table' : 'Graphical View'}
          </button>
          <div className="prediction-data-display">
            {graphCategory === 'year' ? (
              <Line data={createChartData(filteredYearData)} options={createChartOptions(filteredYearData)} />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Comments</th>
                    <th>Power Consumption (MW)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredYearData.length > 0 ? (
                    filteredYearData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.holiday ? item.holiday : "No Holiday"}</td>
                        <td>{item.currentConsumption.toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available for the selected range</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Popup for viewing CSV data */}
      {showPopup && (
        <div className="prediction-popup-overlay">
          <div className="prediction-popup-content">
            <h2>CSV Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Power Consumption (MW)</th>
                </tr>
              </thead>
              <tbody>
                {jsonData.year.map((item, index) => (
                  <tr key={index}>
                    <td>{isValidDate(item.date) ? formatDate(item.date) : "Invalid Date"}</td>
                    <td>{item.currentConsumption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setShowPopup(false)} className="prediction-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Prediction;
