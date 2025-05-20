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
    <th className="column-arrow"></th>
    <th className="column-article-no arrow-down">Article No.</th>
    <th className="column-name arrow-down">Product/Service</th>
    <th className="column-in-price">In Price</th>
    <th className="column-price">Price</th>
    <th className="column-unit">Unit</th>
    <th className="column-stock">In Stock</th>
    <th className="column-description">Description</th>
    <th className="column-options"></th>
  </tr>
</thead>
<tbody>
  {products.map((product) => (
    <tr key={product.id}>
      <td className="column-arrow arrow-right"></td>
      <td className="column-article-no">
        <input value={product.article_no} onChange={(e) => handleInputChange(product.id, 'article_no', e.target.value)} />
      </td>
      <td className="column-name">
        <input value={product.product_name} onChange={(e) => handleInputChange(product.id, 'product_name', e.target.value)} />
      </td>
      <td className="column-in-price">
        <input value={product.in_price} onChange={(e) => handleInputChange(product.id, 'in_price', e.target.value)} />
      </td>
      <td className="column-price">
        <input value={product.price} onChange={(e) => handleInputChange(product.id, 'price', e.target.value)} />
      </td>
      <td className="column-unit">
        <input value={product.unit} onChange={(e) => handleInputChange(product.id, 'unit', e.target.value)} />
      </td>
      <td className="column-stock">
        <input value={product.in_stock} onChange={(e) => handleInputChange(product.id, 'in_stock', e.target.value)} />
      </td>
      <td className="column-description">
        <input value={product.description} onChange={(e) => handleInputChange(product.id, 'description', e.target.value)} />
      </td>
      <td className="column-options">
        <button className="save-button" onClick={() => handleSave(product.id)}>Save</button>
      </td>
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
