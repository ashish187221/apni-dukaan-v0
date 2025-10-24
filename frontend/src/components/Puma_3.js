import React, { useState , useContext } from 'react'
import './product.css'
import { AuthContext } from "../context/AuthContext";

export default function Puma_1({ addToCart }) {

    const [count, setCount] = useState(1);
    const [added, setAdded] = useState(false);
    const { user } = useContext(AuthContext); 
    const [selectedSize, setSelectedSize] = useState("");
    
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
      id: `puma3-${selectedSize}`,
      name: "Puma Shoe",
      price: 2999,
      quantity: count,
       size: selectedSize,
      image: "/images/puma-3.webp",
      description:
        "Puma Urban Runner | Sleek and stylish sneakers featuring shock-absorbing midsoles and durable rubber outsole."
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 5000); 
  };

    return (
        <div className="product-container">
      <div className="product-image">
        <img src="/images/puma-3.webp" alt="Puma Shoe" />
      </div>

      <div className="product-details">
        <h2>Puma Shoe</h2>
        <p className="price">₹2999</p>
        <p className="desc">
          <b>Puma Urban Runner | Sleek and stylish sneakers featuring shock-absorbing midsoles and durable rubber outsole.</b>
        </p>


        <label htmlFor="size" id="size-text">Select Size: </label>
        <div className="size-selector">
          <div className="size-options">
            {["7", "8", "9", "10" ,"11"].map((size) => (
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
            <button type="button" onClick={increment} aria-label="Increase quantity">+</button>
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
