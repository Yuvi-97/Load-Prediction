import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AiOutlineAppstore, AiOutlineBook, AiOutlineSafety, AiOutlineContacts } from 'react-icons/ai';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
        <h2>Delhi Load</h2>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#emergency-notifications"><AiOutlineSafety /> Emergency Notifications</a></li>
            <li><a href="#newsroom"><AiOutlineAppstore /> Newsroom</a></li>
            <li><a href="#business-practice-manuals"><AiOutlineBook /> Business Practice Manuals</a></li>
            <li><a href="#governance-committees"><AiOutlineAppstore /> Governance and Committees</a></li>
            <li><a href="#tariff"><AiOutlineAppstore /> Tariff</a></li>
            <li><a href="#careers"><AiOutlineAppstore /> Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Related Websites</h4>
          <ul>
            <li><a href="#oasis"><AiOutlineAppstore /> OASIS</a></li>
            <li><a href="#market-participant-portal"><AiOutlineAppstore /> Market Participant Portal</a></li>
            <li><a href="#western-energy-markets"><AiOutlineAppstore /> Western Energy Markets</a></li>
            <li><a href="#weim-portal"><AiOutlineAppstore /> WEIM Portal</a></li>
            <li><a href="#rc-portal"><AiOutlineAppstore /> RC Portal</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact-us"><FaPhone /> Contact Us</a></li>
            <li><a href="#training-center"><AiOutlineBook /> Training Center</a></li>
            <li><a href="#developer-portal"><AiOutlineAppstore /> Developer Portal</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>ISO Today</h4>
          <ul>
            <li><a href="#free-mobile-app"><AiOutlineAppstore /> Free Mobile App</a></li>
            <li><a href="#daily-briefing"><FaEnvelope /> Daily Briefing</a></li>
            <li><a href="#news-releases"><FaEnvelope /> News Releases</a></li>
            <li><a href="#flex-alert"><AiOutlineSafety /> Flex Alert</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://twitter.com/DelhiGov" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
          <a href="https://facebook.com/DelhiGov" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
          <a href="https://youtube.com/DelhiGov" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a>
        </div>
        <p>&copy; 2024 Delhi Government. All rights reserved.</p>
        <div className="footer-links">
          <a href="#glossary">Glossary</a> | <a href="#sitemap">Sitemap</a> | <a href="#privacy-terms">Privacy and Terms of Use v1.0.3</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
