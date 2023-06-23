import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Replace with your actual product data
  const product = { id: 1, title: 'Product 1', description: 'Description 1' };

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;