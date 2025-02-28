import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import logoImage from '../../Assets/1.png';
import './Header.css';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (date) => {
    const optionsDate = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const optionsTime = {
      hour: '2-digit',
      minute: '2-digit',
    };

    const formattedDate = date.toLocaleDateString([], optionsDate);
    const formattedTime = date.toLocaleTimeString([], optionsTime);

    return `${formattedDate} ${formattedTime}`; // Concatenate without a comma
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logoImage} alt='Logo' className='logo-img' />
        <h1>Today's Outlook</h1>
      </div>
      <nav className="header-center">
        <ul>
          <Link to='/'>Demand</Link>
          <Link to='http://localhost:3000/'>Prediction</Link>
          <Link to='/supply'>Supply</Link>
          <Link to='/emission'>Emission</Link>
          <Link to='/prices'>Prices</Link>
          <Link to="/aidashboard" >Optimization</Link>
          <Link to='/barchart'>Sectors</Link>
          {/* <Link to='/map'>Map</Link> */}

        </ul>
      </nav>
      <div className="header-right">
        <p className='cur'>{formatDateTime(currentDateTime)}</p>
        <div className="notification">
          <FaBell onClick={toggleDropdown} className="notification-icon" />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to='/weather'>Weather</Link>
              <Link to='/holidays'>Holidays</Link>
              <Link to='/language'>Language</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
