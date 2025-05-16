import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://price-list-backed-1.onrender.com/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="loading-message">Loading price list...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="scrollable-page">
      <div className="price-list-container">
        <div className="table-scroll-wrapper">
          <table className="price-list-table">
            <thead>
              <tr>
                <th className="arrow-down light-blue">Article No.</th>
                <th className="arrow-down green">Product/Service</th>
                <th>In Price</th>
                <th>Price</th>
                <th>Unit</th>
                <th>In Stock</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id || product.articleNo}>
                  <td className="arrow-right">{product.article_no}</td>
                  <td>{product.product_name}</td>
                  <td>{product.in_price}</td>
                  <td>{product.price}</td>
                  <td>{product.unit}</td>
                  <td>{product.in_stock}</td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;