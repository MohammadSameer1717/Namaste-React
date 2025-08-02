import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 199,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    const filtered = cartItems.filter((item) => item.id !== id);
    setCartItems(filtered);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="item-actions">
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;