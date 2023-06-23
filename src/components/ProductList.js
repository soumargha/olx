import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  // Replace with your actual product data
  const products = [
    { id: 1, title: 'Product 1', description: 'Description 1' },
    { id: 2, title: 'Product 2', description: 'Description 2' },
    { id: 3, title: 'Product 3', description: 'Description 3' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;