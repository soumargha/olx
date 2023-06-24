import React from 'react';
import { Link } from 'react-router-dom';
import '../cssFIles/productList.css';
import '../images/product1.jpg';
import { useState } from 'react';


function ProductList({addToCart}) {
 
  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description 1',
      image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg', 
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description 2',
      image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg', 
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description 3',
      image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg', 
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'Description 4',
        image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg', 
      },
      {
        id: 35,
        title: 'Product 5',
        description: 'Description 5',
        image: 'https://res.cloudinary.com/dzdamfuke/image/upload/v1687585936/Personal/product1_pf8vvx.jpg', 
      },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export default ProductList;