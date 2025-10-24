import React, { useState , useContext } from 'react'
import './product.css'
import { AuthContext } from "../context/AuthContext";

export default function Campus_4({ addToCart }) 
{

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
              id: `campus4-${selectedSize}`,
              name: "Campus Shoe",
              price: 2199,
              quantity: count,
              size: selectedSize,
              image: "/images/campus-4.webp",
              description:
                "Campus Active Pace — Engineered for active lifestyles, combining shock-absorbing soles, breathable knit fabric, and stylish design for daily training comfort."
            });
            
            setAdded(true);
            setTimeout(() => setAdded(false), 5000); 
          };
    
    
        return (
            <div className="product-container">
          <div className="product-image">
            <img src="/images/campus-4.webp" alt="Campus Shoe" />
          </div>
    
          <div className="product-details">
            <h2>Campus Shoe</h2>
            <p className="price">₹2199</p>
            <p className="desc">
              <b>Campus Active Pace — Engineered for active lifestyles, combining shock-absorbing soles, breathable knit fabric, and stylish design for daily training comfort.</b>
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
