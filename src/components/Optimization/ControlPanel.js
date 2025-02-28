import React, { useState } from "react";
import "./ControlPanel.css"; // Import CSS file

const ControlPanel = ({ feeders, setFeeders }) => {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");

  const shiftLoad = () => {
    if (!fromId || !toId || fromId === toId) return;

    let tempFeeders = feeders.map((f) => ({ ...f }));
    let fromFeeder = tempFeeders.find((f) => f.id === parseInt(fromId));
    let toFeeder = tempFeeders.find((f) => f.id === parseInt(toId));

    if (fromFeeder && toFeeder) {
      let excessLoad = fromFeeder.load - 0.8 * fromFeeder.capacity;
      let availableSpace = toFeeder.capacity - toFeeder.load;
      let shiftAmount = Math.min(excessLoad, availableSpace);

      if (shiftAmount > 0) {
        fromFeeder.load -= shiftAmount;
        toFeeder.load += shiftAmount;
        setFeeders(tempFeeders);
      }
    }
  };

  return (
    <div className="control-container">
      <h2>⚙️ Manual Load Adjustment</h2>

      <div className="dropdowns">
        <div>
          <label>🔄 Source Feeder: </label>
          <select onChange={(e) => setFromId(e.target.value)} value={fromId}>
            <option value="">Select Feeder</option>
            {feeders.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} ({f.load.toFixed(2)} MW)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>➡️ Destination Feeder: </label>
          <select onChange={(e) => setToId(e.target.value)} value={toId}>
            <option value="">Select Feeder</option>
            {feeders.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} ({f.load.toFixed(2)} MW / {f.capacity} MW)
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="shift-btn" onClick={shiftLoad} disabled={!fromId || !toId || fromId === toId}>
        ⚡ Optimize Load Transfer
      </button>

      <div className="status-container">
  <h3>📊 Feeder Status</h3>
  <div className="status-columns">
    <div className="status-left">
      <ul className="list">
        {feeders.slice(0, 5).map((f) => (
          <li key={f.id}>
            {f.name}: <b>{f.load.toFixed(2)} MW</b> / {f.capacity} MW
          </li>
        ))}
      </ul>
    </div>
    <div className="status-right">
      <ul className="list">
        {feeders.slice(5, 10).map((f) => (
          <li key={f.id}>
            {f.name}: <b>{f.load.toFixed(2)} MW</b> / {f.capacity} MW
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default ControlPanel;
