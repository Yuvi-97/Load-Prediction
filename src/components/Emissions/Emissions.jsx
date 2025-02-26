import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TimerIcon from '@mui/icons-material/Timer';
import './style.css';
import PieCharts from "./CarbonTrends/CurrentCo2PerResource";
import LineGraph from "./CarbonTrends/TotalCo2";
import StackedLineChart from "./CarbonTrends/CO2PerResource";
import LineChart from "./CarbonTrends/HistoricalCarbonTrends";
import HeaderIcons from "./CarbonTrends/headericon";
import { FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import Historicalheader from "./CarbonTrends/historicalhead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaFilePdf } from 'react-icons/fa';

const Emissions = () => {
    return (
        <div>
            <Header/>
            <div className="navbar">
                <a href="#gridstatus" className="nav_1">Current</a>
                <a href="#graph1" className="nav_1">Total CO₂ trend</a>
                <a href="#resourcetrend" className="nav_1">CO₂ per resource trend</a>
                <a href="#historicalco" className="nav_1">Historical CO₂ trend</a>
            </div>

            <div id="gridstatus" className="gridstatus">
                <p id="gs">Grid Status:</p>
                <p id="nor" style={{ color: "#28a745" }}>Normal</p>
                <a href="abc" className="anchor">
                    <p>Learn more about active alerts, warnings and emergencies</p>
                </a>
                <a href="#pdf" className="pdf-icon">
                    <FaFilePdf size={20} /> {/* Using the PDF icon */}
                </a>
            </div>

            <div className="co2emission">
                <p>CO<sub>2</sub> emissions as of 09:55</p>
            </div>


            <div className="container2">
                <div id="overview" className="overview">
                    <div className="overview-icon-bulb">
                        <LightbulbIcon style={{ fontSize: 50 }} />
                        <p>
                            24,898 MW
                            <br />
                            Current demand
                        </p>

                    </div>
                    <div className="co2">
                        <CloudQueueIcon style={{ fontSize: 50 }} />
                        <p>
                            6878 mTCO<sub>2</sub>/h
                            <br />
                            Current CO<sub>2</sub> emissions
                        </p>
                    </div>
                    <div className="rate">
                        <TimerIcon style={{ fontSize: 50 }} />
                        <p>
                            0.107 mTCO<sub>2</sub>/MWh
                            <br />
                            Current CO<sub>2</sub> emissions rate
                        </p>
                    </div>

                    <div className="co2">
                        <CloudQueueIcon style={{ fontSize: 50 }} />
                        <p>
                            60.1% 
                            <br />
                            Reduction in CO<sub>2</sub> emissions
                        </p>
                    </div>
                </div>

                <p id="details">We are committed to supporting India's clean energy goals by integrating renewable and net-zero carbon resources into the grid. This page highlights reductions in power plant emissions, with CO₂ emissions data provided as an approximation to reflect our ongoing efforts.</p>
                <div id="graph1" className="graph1">
                    <div className="card">
                        <h3>Current CO₂ per resource</h3>
                        <p>Current percentage of CO₂ broken down by resource</p>
                        <div className="piechart1 box">
                            <HeaderIcons activeChart={"CO2PerResourceTrend"}/>
                            <hr className="divider-line" />
                            <PieCharts/>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Total CO₂ trend</h3>
                        <p>Total CO₂ produced in five-minute increments</p>
                        <div className="linegraph1 box">
                            <HeaderIcons activeChart={"totalCO2Trend"}/>
                            <hr className="divider-line" />
                            <LineGraph/>
                        </div>
                    </div>
                </div>

                <div id="resourcetrend" className="resourcetrend">
                    <h3>CO<sub>2</sub> per resource trend</h3>
                    <p>CO<sub>2</sub> broken down by resource in five-minute increments.</p>
                    <div className="linechart2 box">
                        <HeaderIcons className="header-icons" activeChart={"CO2PerResourceTrend"} />
                        <hr className="divider-line" />
                        <StackedLineChart/>
                    </div>
                </div>

                <div id="historicalco" className="historicalco">
                    <h3>Historical CO<sub>2</sub> trend</h3>
                    <p>Yearly snapshot of CO<sub>2</sub> emissions by month.</p>
                    <div className="linechart3 box">
                        <HeaderIcons className="header-icons" activeChart={"historicalCO2Trend"}/>
                        <hr className="divider-line" />
                        <LineChart className="line-chart" />
                    </div>
                </div>

                <div className="lastbox">
                    <p className="content">
                            Today's Outlook charts are designed to summarize forecasts and actual
                            loads. The demand and net demand trend data do not include dispatchable
                            pump loads or battery storage that is charging on the system. This data
                            is for informational purposes only, and should not be used for
                            determining actual billing values or operational planning.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Emissions;
