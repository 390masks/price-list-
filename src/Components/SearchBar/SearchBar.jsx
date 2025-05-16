import React from 'react';
import './SearchBar.css';
import { FaSearch, FaPlus, FaPrint, FaTools } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="input-wrapper">
        
          <input 
            type="text" 
            placeholder="Search Article No..."
          />
          <FaSearch  className="search-icon" />
        </div>
        <div className="input-wrapper">
        
          <input 
            type="text" 
            placeholder="Search Product..."
          />
          <FaSearch  className="search-icon" />
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="new-product">
          New Product <FaPlus color='green' />
        </button>
        <button className="print-list">
          Print List <FaPrint color='blue' />
        </button>
        <button className="advanced-mode">
          Advanced mode <FaTools color='yellow' />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
