import React, { useState } from "react";
import "./AIOptimization.css"; // Import CSS file

const AIOptimization = ({ feeders, setFeeders }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("");

  // Function to optimize feeder load
  const autoOptimizeLoad = () => {
    let tempFeeders = feeders.map((f) => ({ ...f }));

    console.log("🚀 Initial Feeders:", tempFeeders);

    let overloaded = tempFeeders.filter((f) => f.load > 0.8 * f.capacity);

    let totalLoad = tempFeeders.reduce((sum, f) => sum + f.load, 0);
    let totalCapacity = tempFeeders.reduce((sum, f) => sum + f.capacity, 0);
    let avgLoadFactor = totalLoad / totalCapacity; // Dynamic underloaded threshold

    let underloaded = tempFeeders.filter((f) => f.load < avgLoadFactor * f.capacity);

    console.log("🔥 Overloaded Feeders:", overloaded);
    console.log("🧊 Underloaded Feeders:", underloaded);

    let newSuggestions = [];
    let feedersUpdated = false;

    overloaded.forEach((o) => {
      let bestTarget = underloaded.reduce((best, u) => {
        if (u.id === o.id) return best; // Prevent self-transfer

        let availableSpace = u.capacity - u.load;
        let shiftAmount = Math.min(o.load - 0.8 * o.capacity, availableSpace);

        return shiftAmount > 0 && shiftAmount > (best?.shiftAmount || 0)
          ? { feeder: u, shiftAmount }
          : best;
      }, null);

      if (bestTarget) {
        console.log(
          `🔄 Shifting ${bestTarget.shiftAmount.toFixed(2)} MW from ${o.name} to ${bestTarget.feeder.name}`
        );
        o.load -= bestTarget.shiftAmount;
        bestTarget.feeder.load += bestTarget.shiftAmount;
        newSuggestions.push(
          `Shift ${bestTarget.shiftAmount.toFixed(2)} MW from ${o.name} to ${bestTarget.feeder.name}`
        );
        feedersUpdated = true;
      }
    });

    console.log("✅ Final Feeders After Optimization:", tempFeeders);

    if (feedersUpdated) {
      setFeeders(tempFeeders);
      setMessage("✅ Load Optimization Completed!");
    } else {
      setMessage("⚠️ No changes needed, all feeders are balanced.");
    }

    setSuggestions(newSuggestions);
  };

  return (
    <div className="ai-container">
      <h2>⚡ AI Load Optimization</h2>

      <button onClick={autoOptimizeLoad} className="optimize-btn">
        Optimize Load
      </button>

      {message && <p className="message">{message}</p>}

      <div className="results">
        {suggestions.length > 0 && (
          <div className="box">
            <h3>✅ Load Adjustments</h3>
            <ul>{suggestions.map((s, index) => <li key={index}>{s}</li>)}</ul>
          </div>
        )}

        {suggestions.length === 0 && <p></p>}
      </div>
    </div>
  );
};

export default AIOptimization;
