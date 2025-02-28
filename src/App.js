import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Demand from './components/Demand/Demand';
import Emissions from './components/Emissions/Emissions';
import Prices from './components/PriceComponents/AppPrice';
import DashboardSupply from './components/Supply/DashboardSupply';
import Prediction from './components/Prediction/Prediction';
import MyMapComponent from './components/map/DelhiMap';
import BarChartComponent from './components/sectors/BarChartComponent';
import LoginPage from './components/LoginPage/LoginPage';
import SubscriptionPopup from './components/Subscription/SubscriptionPopup';
import AIDashboard from '../src/components/Optimization/AIDashboard';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup only on the first page load
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="App">
      {showPopup && <SubscriptionPopup onClose={() => setShowPopup(false)} />} {/* Show popup */}
      <Router>
        <Routes>
          <Route path="/" element={<Demand />} />
          <Route path="/k" element={<Dashboard />} />
          <Route path="/l" element={<LoginPage />} />
          <Route path="/supply" element={<DashboardSupply />} />
          <Route path="/emission" element={<Emissions />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="#" element={<MyMapComponent />} />
          <Route path="/barchart" element={<BarChartComponent />} />
          <Route path="/aidashboard" element={<AIDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
