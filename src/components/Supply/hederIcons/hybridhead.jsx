import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Importing icons from react-icons

const HHeaderIcon = ({ onDateOptionChange }) => {
  const [selectedDateOption, setSelectedDateOption] = useState('today');
  const [selectedOtherOption, setSelectedOtherOption] = useState('option1');
  const [selectedDownloadOption, setSelectedDownloadOption] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Date options
  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
  ];

  // Other options
  const otherOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // Download options
  const downloadOptions = [
    { value: '', label: 'Download' },
    { value: 'pdf', label: 'Download as PDF' },
    { value: 'csv', label: 'Download as CSV' },
    { value: 'xlsx', label: 'Download as Excel' },
  ];

  // Handlers
  const handleDateChange = (event) => {
    const newDateOption = event.target.value;
    setSelectedDateOption(newDateOption);
    onDateOptionChange(newDateOption); // Notify parent component
  };

  const handleOtherOptionChange = (event) => {
    setSelectedOtherOption(event.target.value);
  };

  const handleDownloadChange = (event) => {
    setSelectedDownloadOption(event.target.value);
    // Add download handling logic here if needed
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="header-container" style={styles.headerContainer}>
      <nav className="header-nav" style={styles.headerNav}>
        <ul className="header-menu" style={styles.headerMenu}>
          {/* Date Select Dropdown */}
          <li className="header-menu-item" style={styles.headerMenuItem}>
            <select value={selectedDateOption} onChange={handleDateChange} style={styles.select}>
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </li>

          {/* Other Options Dropdown */}
          <li className="header-menu-item" style={styles.headerMenuItem}>
            <select value={selectedOtherOption} onChange={handleOtherOptionChange} style={styles.select}>
              {otherOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </li>

          {/* Download Options Dropdown */}
          <li className="header-menu-item" style={styles.headerMenuItem}>
            <select value={selectedDownloadOption} onChange={handleDownloadChange} style={styles.select}>
              {downloadOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </li>
        </ul>

        {/* Info Icon */}
        <div className="info-icon" style={styles.infoIcon} onClick={openSidebar}>
          <FaInfoCircle style={styles.infoIconStyle} />
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar" style={styles.sidebar}>
          <button className="close-btn" style={styles.closeBtn} onClick={closeSidebar}>
            X
          </button>
          <div className="sidebar-content" style={styles.sidebarContent}>
            <h3>Info Sidebar</h3>
            <p>This chart displays the energy generation from hybrid sources, which includes solar, wind, and batteries. The solar component, represented by a prominent pink curve, shows the typical daily generation pattern, peaking during midday and tapering off as sunlight decreases. Wind and battery sources are present but contribute less significantly in this dataset, as represented by the flatter blue and yellow lines. This visualization helps track the contribution of each hybrid source to the overall energy mix throughout the day.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the component
const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerNav: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerMenu: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  headerMenuItem: {
    marginRight: '20px',
  },
  select: {
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  infoIcon: {
    cursor: 'pointer',
    fontSize: '18px',
    color: '#0072bc',
  },
  infoIconStyle: {
    fontSize: '20px',
    color: '#0072bc',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    backgroundColor: '#f4f4f4',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
    padding: '20px',
    zIndex: 1000,
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  sidebarContent: {
    marginTop: '40px',
  },
};

export default HHeaderIcon;
