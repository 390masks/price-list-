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
          <span>New Product</span> <FaPlus color='green' />
        </button>
        <button className="print-list">
          <span>Print List</span> <FaPrint color='blue' />
        </button>
        <button className="advanced-mode">
          <span>Advanced mode</span> <FaTools color='yellow' />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
