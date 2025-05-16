import React, { useState } from 'react';
import './Header.css';
import profilePic from '../../Images/businessman.webp';
import flagIcon from '../../Images/GB.png';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          {/* Hamburger menu for tablet/mobile */}
          <button className="hamburger-menu" onClick={toggleSidebar}>
            <FaBars />
          </button>
          
          {/* Regular profile and company info for desktop */}
          <div className="desktop-profile-info">
            <div className="profile-pic-container">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <span className="online-status"></span>
            </div>
            <div className="company-info">
              <h1 className="company-name">John Andre</h1>
              <p className="company-location">Stanford AS</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <img src={flagIcon} alt="Country Flag" className="country-flag" />
          <p className="user-name">Norak Botanal</p>
        </div>
      </div>
    </header>
  );
};

export default Header;