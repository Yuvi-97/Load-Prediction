import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geoJsonData from './data.json'; // Import your GeoJSON data
import './DelhMap.css'; // Import your custom CSS file
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Load data for each year
const loadData = [
    { Year: 2018, BRPL: 7000, BYPL: 3800, TPDDL: 4200, NDMC: 348 },
    { Year: 2019, BRPL: 7100, BYPL: 3850, TPDDL: 4250, NDMC: 369 },
    { Year: 2020, BRPL: 7150, BYPL: 3900, TPDDL: 4300, NDMC: 371 },
    { Year: 2021, BRPL: 7250, BYPL: 3950, TPDDL: 4350, NDMC: 373 },
    { Year: 2022, BRPL: 7500, BYPL: 4000, TPDDL: 4500, NDMC: 374 },
    { Year: 2023, BRPL: 7700, BYPL: 4100, TPDDL: 4600, NDMC: 376 },
    { Year: 2024, BRPL: 7900, BYPL: 4200, TPDDL: 4700, NDMC: 377 },
    { Year: 2025, BRPL: 8100, BYPL: 4300, TPDDL: 4800, NDMC: 379 },
    { Year: 2026, BRPL: 8300, BYPL: 4400, TPDDL:4900 , NDMC :380 },
     { Year :2027 ,BRPL :8500 ,BYPL :4500 ,TPDDL :5000 ,NDMC :382},
     { Year :2028 ,BRPL :8700 ,BYPL :4600 ,TPDDL :5100 ,NDMC :383},
     { Year :2029 ,BRPL :8900 ,BYPL :4700 ,TPDDL :5200 ,NDMC :385},
     { Year :2030 ,BRPL :9100 ,BYPL :4800 ,TPDDL :5300 ,NDMC :386},
     { Year :2031 ,BRPL :9300 ,BYPL :4900 ,TPDDL :5400 ,NDMC :388},
     { Year :2032 ,BRPL :9500 ,BYPL :5000 ,TPDDL :5500 ,NDMC :389},
     { Year :2033 ,BRPL :9700 ,BYPL :5100 ,TPDDL :5600 ,NDMC :391},
     { Year :2034 ,BRPL :9900 ,BYPL :5200 ,TPDDL :5700 ,NDMC :392},
     { Year :2035 ,BRPL :10100 ,BYPL :5300 ,TPDDL :5800 ,NDMC :394},
     { Year :2036 ,BRPL :10300 ,BYPL :5400 ,TPDDL :5900 ,NDMC :395},
     { Year :2037 ,BRPL :10500 ,BYPL :5500 ,TPDDL :6000 ,NDMC :397},
     { Year :2038 ,BRPL :10700 ,BYPL :5600 ,TPDDL :6100 ,NDMC :398},
     { Year :2039 ,BRPL :10900 ,BYPL :5700 ,TPDDL :6200 ,NDMC :400}
  ];

const MyMapComponent = () => {
    const [geoData,setGeoData] = useState(null);
    const [year,setYear] = useState(2023); // Default year
    const [errorMessage,setErrorMessage] = useState('');

    useEffect(() => {
        // Load GeoJSON data
        setGeoData(geoJsonData);
    }, []);

    // Function to get load data for a specific region and year
    const getLoadForRegion = (region) => {
        const yearData = loadData.find((data) => data.Year === year);
        return yearData ? yearData[region] || "No Data" : null;
    };

    // Define a function to style each feature
    const style = (feature) => ({
        color: feature.properties.color,
        weight: 2,
        fillOpacity: .5,
    });

    // Define a function to handle feature hover events
    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover:(e) => {
                const regionLoad = getLoadForRegion(feature.properties.region);
                layer.bindTooltip(`${feature.properties.region}: ${regionLoad} MW`).openTooltip();
            },
            mouseout:(e) => {
                layer.closeTooltip();
            },
        });
    };

    // Handle date change
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const selectedYear = selectedDate.getFullYear();

        if (selectedYear > 2034) {
            setErrorMessage('Accuracy beyond range for years after <strong>2034</strong>');
            setYear(selectedYear); // Update the year state
        } else {
            setErrorMessage('');
            setYear(selectedYear); // Update the year state
        }
    };

    return (
        <>
        <Header/>
        <div className="map-container">
            <h1>Energy Load Map</h1>
            <input 
                type="date" 
                onChange={handleDateChange} 
                value={`${year}-01-01`} // Set default date to January of the selected year
                className="date-input"
            />
            <div className="map-wrapper">
                <MapContainer 
                    center={[28.6139,77.209]} 
                    zoom={10} 
                    style={{ height:"100%", width:"100%" }}
                    bounds={[
                        [28.4042,77.0345], // Southwest corner (approx)
                        [28.8835,77.3506] // Northeast corner (approx)
                    ]}
                    maxBounds={[
                        [28.4042,77.0345], // Southwest corner (approx)
                        [28.8835,77.3506] // Northeast corner (approx)
                    ]}
                    scrollWheelZoom={false} // Disable scroll zooming
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {geoData && <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature} />}
                </MapContainer>
            </div>
            {/* Display error message if any */}
            {errorMessage && <div dangerouslySetInnerHTML={{ __html:errorMessage }} className="error-message" />}
        </div>
        <Footer/>
        </>
    );
};

export default MyMapComponent;
