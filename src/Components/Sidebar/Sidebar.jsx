import React from 'react';
import './Sidebar.css';
import {
  FaUsers,
  FaBuilding,
  FaFileInvoice,
  FaTags,
  FaClone,
  FaMoneyBillAlt,
  FaClipboardList,
  FaBoxes,
  FaUserFriends,
  FaExchangeAlt,
  FaSignOutAlt,
  FaFileAlt,
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  const handleClick = (label) => {
    console.log(`Clicked on: ${label}`);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <h2 className="sidebar-title">Menu</h2>

        <nav className="sidebar-nav">
          <ul>
            <li className="nav-category">
              <strong><FaFileAlt color='#2ca02c'/>Invoices</strong>
              <ul className="submenu">
                <li onClick={() => handleClick('Customers')}>
                  <a href="/customers">
                    <FaUsers color="#1f77b4" /> Customers
                  </a>
                </li>
                <li onClick={() => handleClick('My Business')}>
                  <a href="/my-business">
                    <FaBuilding color="#2ca02c" /> My Business
                  </a>
                </li>
                <li onClick={() => handleClick('Invoice Journal')}>
                  <a href="/invoice-journal">
                    <FaFileInvoice color="#ff7f0e" /> Invoice Journal
                  </a>
                </li>
                <li onClick={() => handleClick('Price List')}>
                  <a href="/price-list" className="active">
                    <FaTags color="#d62728" /> Price List
                  </a>
                </li>
                <li onClick={() => handleClick('Multiple Invoicing')}>
                  <a href="/multiple-invoicing">
                    <FaClone color="#9467bd" /> Multiple Invoicing
                  </a>
                </li>
                <li onClick={() => handleClick('Unpaid Invoices')}>
                  <a href="/unpaid-invoices">
                    <FaMoneyBillAlt color="#2ca02c" /> Unpaid Invoices
                  </a>
                </li>
                <li onClick={() => handleClick('Offer')}>
                  <a href="/offer">
                    <FaClipboardList color="#17becf" /> Offer
                  </a>
                </li>
                <li className="submenu-item" onClick={() => handleClick('Inventory Control')}>
                  <a href="/inventory-control">
                    <FaBoxes color="#8c564b" /> Inventory Control
                  </a>
                </li>
                <li onClick={() => handleClick('Member Invoicing')}>
                  <a href="/member-invoicing">
                    <FaUserFriends color="#e377c2" /> Member Invoicing
                  </a>
                </li>
                <li onClick={() => handleClick('Import/Export')}>
                  <a href="/import-export">
                    <FaExchangeAlt color="#bcbd22" /> Import/Export
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item" onClick={() => handleClick('Log out')}>
              <a href="/logout">
                <FaSignOutAlt color="#7f7f7f" /> Log out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
