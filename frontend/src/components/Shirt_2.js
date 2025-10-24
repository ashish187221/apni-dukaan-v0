import React, { useState , useContext } from 'react'
import "./product.css";
import { AuthContext } from "../context/AuthContext";

export default function Shirt_2({ addToCart }) {

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
          id: `shirt2-${selectedSize}`,
          name: "Shirts",
          price: 1299,
          quantity: count,
          size: selectedSize, 
          image: "/images/shirt-2.webp",
          description:
            "Bring sophistication to your wardrobe with this crisp white formal shirt. Tailored for a smart fit, it’s crafted from breathable cotton fabric that keeps you comfortable all day long. Perfect for meetings, interviews, or formal gatherings — it adds an instant touch of class to your look.",
        });
    
        setAdded(true);
        setTimeout(() => setAdded(false), 5000);
      };
    return (
        <div className="product-container">
      <div className="product-image">
        <img src="/images/shirt-2.webp" alt="Shirt" />
      </div>

      <div className="product-details">
        <h2>Shirts</h2>
        <p className="price">₹1299</p>
        <p className="desc">
          <b>
            Bring sophistication to your wardrobe with this crisp white formal shirt. Tailored for a smart fit, it’s crafted from breathable cotton fabric that keeps you comfortable all day long. Perfect for meetings, interviews, or formal gatherings — it adds an instant touch of class to your look.
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
    )
}
