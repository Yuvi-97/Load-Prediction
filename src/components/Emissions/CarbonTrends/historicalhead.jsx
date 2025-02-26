import React, { useState } from 'react';
import { FaInfoCircle, FaCalendarAlt, FaCaretDown } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HeaderIcons.css'; // Import the CSS file

const Historicalheader = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container">
      <span className="download">
          Download
          <FaCaretDown className="icon" />
      </span>

      <FaInfoCircle className="infoicon" />
    </div>
  );
};

export default Historicalheader;
