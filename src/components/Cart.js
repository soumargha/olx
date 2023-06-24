import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-dropdown">
        {cartItems.length === 0 ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.title}</span>
              <span> - ${item.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;