import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="empty-cart-container">
        <h2>You must log in to view your cart!</h2>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h2>🛒 Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.map((item, index) => (
        <div className="cart-item" key={`${item.id}-${item.size}-${index}`}>
          <img
            src={item.image || "https://via.placeholder.com/120"}
            alt={item.name}
            className="cart-item-image"
          />

          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p className="cart-item-price">₹{item.price}</p>

            {item.size && <p className="cart-item-size">Size: {item.size}</p>}

            <div className="cart-quantity">
              <button
                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                +
              </button>
            </div>

            <p className="subtotal">
              Subtotal: ₹{item.price * item.quantity}
            </p>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id, item.size)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total Price: ₹{totalPrice}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
