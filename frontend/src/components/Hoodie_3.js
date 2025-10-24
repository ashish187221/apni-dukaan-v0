import React, { useState, useContext } from 'react'
// import './Hoodie_1.css'
import './product.css'
import { AuthContext } from "../context/AuthContext";

export default function Hoodie_3({ addToCart }) {

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
                 id: `hoodie3-${selectedSize}`,
                 name: "Hoodies",
                 price: 1399,
                 quantity: count,
                 size: selectedSize,
                 image: "/images/hoodie-3.webp",
                 description:
                   "Beat the chill with this full-zip fleece hoodie. With its brushed interior and deep pockets, it offers unbeatable warmth and comfort during cold weather. Ideal for layering over your favorite tees."
               });
               
               setAdded(true);
               setTimeout(() => setAdded(false), 5000); 
       };

    return (
        <div className="product-container">
          <div className="product-image">
            <img src="/images/hoodie-3.webp" alt="Hoodie"  />
          </div>
    
          <div className="product-details">
            <h2>Hoodies</h2>
            <p className="price">₹1399</p>
            <p className="desc">
              <b>Beat the chill with this full-zip fleece hoodie. With its brushed interior and deep pockets, it offers unbeatable warmth and comfort during cold weather. Ideal for layering over your favorite tees.</b>
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
