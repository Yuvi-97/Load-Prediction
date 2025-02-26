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
              <h3 className="prices__tariff-title">Residential Tariff Slabs</h3>
              <p><a href="#" className="prices__info-link">Get more information about price signals</a></p>
              <ul className="prices__tariff-list">
                <li>
                  <strong>0 to 200 Units:</strong> Free (subsidized)
                </li>
                <li>
                  <strong>201 to 400 Units:</strong> ₹3 per unit for the first 200 units (after free units), then around ₹5.50 to ₹6.50 per unit for the next units.
                </li>
                <li>
                  <strong>401 to 800 Units:</strong> Approximately ₹6.50 to ₹8 per unit.
                </li>
                <li>
                  <strong>Above 800 Units:</strong> Around ₹8 to ₹9 per unit.
                </li>
              </ul>
              <p className="prices__tariff-notice">
                These rates are indicative and can vary based on the specific distribution company (BSES Rajdhani, BSES Yamuna, Tata Power) and any applicable subsidies. The tariffs may change annually based on regulatory decisions by the Delhi Electricity Regulatory Commission (DERC).
              </p>
            </div>
            {/* Price Map Section */}
            <div className="prices__map-section">
              <h2 className="prices__map-header">Price map</h2>
    
              <a href="#" className="prices__map-link">About price map</a>
              <div className="prices__map-iframe-container">
                <iframe 
                  title="Delhi Map" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453287.010855384!2d76.76463032977334!3d28.64362349370336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1724951369392!5m2!1sen!2sin" 
                  width="100%" 
                  height="600" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Residential Tariff Slabs Section */}
            {/* <div className="prices__tariff-section">
              <h3 className="prices__tariff-title">Residential Tariff Slabs</h3>
              <ul className="prices__tariff-list">
                <li>
                  <strong>0 to 200 Units:</strong> Free (subsidized)
                </li>
                <li>
                  <strong>201 to 400 Units:</strong> ₹3 per unit for the first 200 units (after free units), then around ₹5.50 to ₹6.50 per unit for the next units.
                </li>
                <li>
                  <strong>401 to 800 Units:</strong> Approximately ₹6.50 to ₹8 per unit.
                </li>
                <li>
                  <strong>Above 800 Units:</strong> Around ₹8 to ₹9 per unit.
                </li>
              </ul>
              <p className="prices__tariff-notice">
                These rates are indicative and can vary based on the specific distribution company (BSES Rajdhani, BSES Yamuna, Tata Power) and any applicable subsidies. The tariffs may change annually based on regulatory decisions by the Delhi Electricity Regulatory Commission (DERC).
              </p>
            </div>*/}
          </div> 

            {/* Details Section */}
            <div className="prices__details-section">
              <div className="prices__button-group">
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  <Button>Day-Ahead</Button>
                  <Button>Fifteen-Minute</Button>
                  <Button>Real-Time</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Prices;
