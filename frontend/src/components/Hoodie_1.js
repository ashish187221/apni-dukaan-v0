import React, { useState, useContext } from "react";
import "./product.css";
import { AuthContext } from "../context/AuthContext";

export default function Hoodie_1({ addToCart }) {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(""); 
  const { user } = useContext(AuthContext);

  const increment = () => {
    if (count < 5) setCount((c) => c + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((c) => c - 1);
  };

  const handleAddToCart = () => {
    if (!user) {
      alert("You are not logged in! Please login to add items to cart.");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }

    addToCart({
      id: `hoodie1-${selectedSize}`,
      name: "Hoodies",
      price: 1599,
      quantity: count,
      size: selectedSize, 
      image: "/images/hoodie-1.webp",
      description:
        "Stay cozy all day with this classic-fit hoodie made from ultra-soft cotton blend fabric. Perfect for casual outings or lounging at home, it gives you the ideal balance of warmth and breathability.",
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 5000);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src="/images/hoodie-1.webp" alt="Hoodie" />
      </div>

      <div className="product-details">
        <h2>Hoodies</h2>
        <p className="price">₹1599</p>
        <p className="desc">
          <b>
            Stay cozy all day with this classic-fit hoodie made from ultra-soft
            cotton blend fabric. Perfect for casual outings or lounging at home,
            it gives you the ideal balance of warmth and breathability.
          </b>
        </p>

        <label htmlFor="size" id="size-text">Select Size: </label>
        <div className="size-selector">
          <div className="size-options">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${
                  selectedSize === size ? "active-size" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="action-row">
          <div className="quantity-box" role="group" aria-label="Quantity selector">
            <button type="button" onClick={decrement} aria-label="Decrease quantity">
              −
            </button>
            <span className="quantity-value">{count}</span>
            <button type="button" onClick={increment} aria-label="Increase quantity">
              +
            </button>
          </div>

          <button
            className={`add-btn ${added ? "disabled" : ""}`}
            onClick={handleAddToCart}
            disabled={added}
            aria-pressed={added}
          >
            {added ? "Added ✔" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
