import React from "react";
import "./SubscriptionPopup.css"; // Import the CSS file

const SubscriptionPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Choose Your Subscription</h2>
        <div className="plans">
          <div className="plan">
            <h3>Free</h3>
            <p><strong>$0</strong> / mo</p>
            <p>10 users included</p>
            <p>2 GB of storage</p>
            <button className="subscribe-btn">Sign up for free</button>
          </div>
          <div className="plan pro">
            <h3>Pro</h3>
            <p><strong>$15</strong> / mo</p>
            <p>20 users included</p>
            <p>10 GB of storage</p>
            <button className="subscribe-btn">Get Started</button>
          </div>
          <div className="plan enterprise">
            <h3>Enterprise</h3>
            <p><strong>$29</strong> / mo</p>
            <p>30 users included</p>
            <p>15 GB of storage</p>
            <button className="subscribe-btn">Contact Us</button>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
