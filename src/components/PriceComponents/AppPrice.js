import './AppPrice.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Prices() {
  return (
    <div>
      <Header/>
      <main>
        <div className="prices__main-content">
          <div className="prices__grid-container">
            {/* Grid Status Section */}
            <div className="prices__status-section">
              <h3 className="prices__tariff-title">Residential Tariff Slabs for Kerala</h3>
              <p><a href="#" className="prices__info-link">Get more information about Kerala's price signals</a></p>
              <ul className="prices__tariff-list">
                <li>
                  <strong>0 to 100 Units:</strong> Free (subsidized)
                </li>
                <li>
                  <strong>101 to 200 Units:</strong> ₹3 per unit for the first 100 units (after free units), then around ₹5.50 to ₹6.00 per unit for the next units.
                </li>
                <li>
                  <strong>201 to 500 Units:</strong> Approximately ₹6 to ₹7 per unit.
                </li>
                <li>
                  <strong>Above 500 Units:</strong> Around ₹7.50 to ₹8.50 per unit.
                </li>
              </ul>
              <p className="prices__tariff-notice">
                These rates are indicative and may vary based on the specific distribution company (KSEB, Kerala State Electricity Board). Tariffs can also vary depending on subsidies provided by the government and the region within Kerala.
              </p>
            </div>
            {/* Price Map Section */}
            <div className="prices__map-section">
              <h2 className="prices__map-header">Price Map for Kerala Grids</h2>
              <a href="https://kseb.in/downloads/eyJpdiI6IjFOb01IQ1gzd3BmdVZzNzJVYVkyamc9PSIsInZhbHVlIjoiVmVKU0Rwc0NVTzRxTVErRDJROXlPZz09IiwibWFjIjoiYzhjNjQ2MTExZDc3N2M1OTBkMmU3N2RkOWM1NmQyYzAzOTIwZjc0MzYzMTRiYzczNjliM2ZhZjU5ZTNjZjkxOSIsInRhZyI6IiJ9" className="prices__map-link">Learn about Kerala Grid Pricing</a>
              <div className="prices__map-iframe-container">
                <iframe 
                  title="Kerala Map" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d531114.0615264936!2d76.79112455000001!3d10.850516859999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05f3cd0f2e3d8f%3A0x9e99a3cc0ab699a!2sKerala!5e0!3m2!1sen!2sin!4v1724951437930!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="prices__map-description">
                The Kerala grids are divided into various pricing zones. The prices may vary depending on the region and time of day. 
                Grid-specific rates can be found by interacting with the price map above. 
                Kerala has a distinct tariff structure based on the local electricity board (KSEB).
              </p>
            </div>

            {/* Pricing Details Section */}
            <div className="prices__details-section">
              <div className="prices__button-group">
                <ButtonGroup variant="outlined" aria-label="Pricing button group">
                  <Button>Day-Ahead Pricing</Button>
                  <Button>Hourly Pricing</Button>
                  <Button>Real-Time Pricing</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Prices;