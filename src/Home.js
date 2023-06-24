// App.js (or your parent component file)
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>Product Marketplace</h1>
      <ProductList addToCart={addToCart} />
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
}

export default Home;
