import React, { useState , useContext } from 'react'
import './Hoodie_1.css'
import './product.css'
import { AuthContext } from "../context/AuthContext";

export default function Tshirt_4({ addToCart }) {

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
      id: `tshirt4-${selectedSize}`,
      name: "T-Shirts",
      price: 1199,
      quantity: count,
      size: selectedSize,
      image: "/images/tshirt-4.webp",
      description: "This half-zip T-shirt gives a sporty and sleek look — perfect for both gym sessions and casual outings. The zipper adds a modern touch, while the breathable fabric keeps you cool and comfy all day."
    });
                
    setAdded(true);
    setTimeout(() => setAdded(false), 5000); 
  };

    return (
        <div className="product-container">
          <div className="product-image">
            <img src="/images/tshirt-4.webp" alt="T-Shirt" />
          </div>
    
          <div className="product-details">
            <h2>Hoodies</h2>
            <p className="price">₹1299</p>
            <p className="desc">
             <b>This half-zip T-shirt gives a sporty and sleek look — perfect for both gym sessions and casual outings. The zipper adds a modern touch, while the breathable fabric keeps you cool and comfy all day.</b>
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
