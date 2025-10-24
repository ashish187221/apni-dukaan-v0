import React, { useState , useContext } from 'react'
import './product.css'
import { AuthContext } from "../context/AuthContext";

export default function Nike_2({ addToCart }) {

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
          id: `nike2-${selectedSize}`,
          name: "Nike Shoe",
          price: 3599,
          quantity: count,
          size: selectedSize,
          image: "/images/nike-2.webp",
          description:
            "Nike Air Zoom Racer — Built for speed and comfort with responsive Zoom Air cushioning and a lightweight mesh upper that keeps your feet cool during intense workouts.",
        });

        setAdded(true);
        setTimeout(() => setAdded(false), 5000); 
      };

    return (
        <div className="product-container">
        <div className="product-image">
        <img src="/images/nike-2.webp" alt="Nike Shoe" />
        </div>

        <div className="product-details">
        <h2>Nike Shoe</h2>
        <p className="price">₹3599</p>
        <p className="desc">
          <b>Nike Flex Motion — Experience flexibility like never before with a stretch-knit design, cushioned midsole, and durable outsole for excellent traction on every surface.</b>
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
    );
}
