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
              <th className="column-article-no">Article No.</th>
              <th className="column-name">Product/Service</th>
              <th className="column-in-price">In Price</th>
              <th className="column-price">Price</th>
              <th className="column-unit">Unit</th>
              <th className="column-stock">In Stock</th>
              <th className="column-description">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id || product.articleNo}>
                <td className="column-article-no">{product.article_no}</td>
                <td className="column-name">{product.product_name}</td>
                <td className="column-in-price">{product.in_price}</td>
                <td className="column-price">{product.price}</td>
                <td className="column-unit">{product.unit}</td>
                <td className="column-stock">{product.in_stock}</td>
                <td className="column-description">{product.description}</td>
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
