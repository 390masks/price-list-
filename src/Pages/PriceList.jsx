import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductList from '../Components/ProductList/ProductList';
import Header from '../Components/Header/Header';
import './PriceList.css';

const PriceList = () => {
  return (
    <div className="price-list-container">
      <Header/>
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <ProductList />
       
      </div>
    </div>
  );
};

export default PriceList;