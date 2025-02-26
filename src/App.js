import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
// import Header from './components/Header/Header';
import Demand from './components/Demand/Demand';
import Emissions from './components/Emissions/Emissions';
import Prices from './components/PriceComponents/AppPrice';
import DashboardSupply from './components/Supply/DashboardSupply';
import Prediction from './components/Prediction/Prediction';
import MyMapComponent from './components/map/DelhiMap';
import BarChartComponent from './components/sectors/BarChartComponent';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Demand />} />
          <Route path="/k" element={<Dashboard />} />
          <Route path="/l" element={<LoginPage />} />
          <Route path="/supply" element={<DashboardSupply />} />
          <Route path="/emission" element={<Emissions />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/prediction" element={<Prediction/>}/>
          <Route path="/map" element={<MyMapComponent/>}/>
          <Route path="/barchart" element={<BarChartComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
