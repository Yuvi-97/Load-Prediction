import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Demand from "./components/Demand/Demand";
import Emissions from "./components/Emissions/Emissions";
import Prices from "./components/PriceComponents/AppPrice";
import DashboardSupply from "./components/Supply/DashboardSupply";
import Prediction from "./components/Prediction/Prediction";
import MyMapComponent from "./components/map/DelhiMap";
import BarChartComponent from "./components/sectors/BarChartComponent";
import LoginPage from "./components/LoginPage/LoginPage";
import SubscriptionPopup from "./components/Subscription/SubscriptionPopup";
import AIDashboard from "./components/Optimization/AIDashboard";
import Chatbot from "./components/ChatBot/Chatbot";// Import Chatbot

function AppContent() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className="App">
      {showPopup && <SubscriptionPopup onClose={() => setShowPopup(false)} />}

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
        <Route path="/aidashboard" element={<AIDashboard />} />
      </Routes>

      {/* Render Chatbot only if the current path is NOT login ("/l") or signup ("/signup") */}
      {location.pathname !== "/l" && location.pathname !== "/signup" && <Chatbot />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
