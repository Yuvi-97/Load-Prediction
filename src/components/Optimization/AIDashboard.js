import React, { useState } from "react";
import { feeders as initialFeeders } from "../../data.js";
import AIOptimization from "./AIOptimization";
import ControlPanel from "./ControlPanel";
import KeralaMap from "./KeralaMap";
import LoadChart from "./LoadChart";

const AIDashboard = () => {
  const [feeders, setFeeders] = useState(initialFeeders);
  const [activeTab, setActiveTab] = useState("AI");

  return (
    <>
      <h1>⚡ AI-Based Feeder Optimization</h1>

      {/* Kerala Map */}
      <div style={{ marginBottom: "20px" }}>
        <KeralaMap feeders={feeders} />
      </div>

      {/* Load Chart & Tabs Container */}
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        {/* Load Chart Section */}
        <div style={{ width: "45%" }}>
          <LoadChart feeders={feeders} />
        </div>
        <div style={{ width: "45%",marginTop:'2.5%',marginLeft:'2.5%' }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <button
              onClick={() => setActiveTab("AI")}
              style={{
                padding: "10px 15px",
                marginRight: "10px",
                backgroundColor: activeTab === "AI" ? "#007BFF" : "#ccc",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                borderRadius: "5px",
                transition: "0.3s",
              }}
            >
            Control Panel
            </button>
            <button
              onClick={() => setActiveTab("Control")}
              style={{
                padding: "10px 15px",
                backgroundColor: activeTab === "Control" ? "#007BFF" : "#ccc",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                borderRadius: "5px",
                transition: "0.3s",
              }}
              >
              AI Optimization
            </button>
          </div>

          <div style={{ marginTop:'2%',padding: "20px", border: "1px solid #ddd", borderRadius: "10px", background: "#f9f9f9" }}>
            {activeTab === "AI" ? (
              <ControlPanel feeders={feeders} setFeeders={setFeeders} />
            ) : (
            <AIOptimization feeders={feeders} setFeeders={setFeeders} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDashboard;
