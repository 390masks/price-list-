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

  const handleInputChange = (id, field, value) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const handleSave = async (id) => {
    const product = products.find((p) => p.id === id);
    try {
      const res = await fetch(`https://price-list-backed-1.onrender.com/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error('Failed to update product');
      alert('Product updated successfully!');
    } catch (err) {
      alert('Update failed: ' + err.message);
    }
  };

  if (loading) return <div className="loading-message">Loading price list...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="scrollable-page">
      <div className="price-list-container">
        <div className="table-scroll-wrapper">
          <table className="price-list-table">
            <thead>
              <tr>
                <th></th>
                <th className='arrow-down'>Article No.</th>
                <th className='arrow-down'>Product/Service</th>
                <th>In Price</th>
                <th>Price</th>
                <th>Unit</th>
                <th>In Stock</th>
                <th>Description</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="arrow-right"></td>
                  <td><input value={product.article_no} onChange={(e) => handleInputChange(product.id, 'article_no', e.target.value)} /></td>
                  <td><input value={product.product_name} onChange={(e) => handleInputChange(product.id, 'product_name', e.target.value)} /></td>
                  <td><input value={product.in_price} onChange={(e) => handleInputChange(product.id, 'in_price', e.target.value)} /></td>
                  <td><input value={product.price} onChange={(e) => handleInputChange(product.id, 'price', e.target.value)} /></td>
                  <td><input value={product.unit} onChange={(e) => handleInputChange(product.id, 'unit', e.target.value)} /></td>
                  <td><input value={product.in_stock} onChange={(e) => handleInputChange(product.id, 'in_stock', e.target.value)} /></td>
                  <td><input value={product.description} onChange={(e) => handleInputChange(product.id, 'description', e.target.value)} /></td>
                  <td><button className='save-button' onClick={() => handleSave(product.id)}>Save</button></td>
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
