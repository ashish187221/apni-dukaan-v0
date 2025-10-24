import React, { useState , useContext } from 'react'
import "./product.css";
import { AuthContext } from "../context/AuthContext";


export default function Jean_2({ addToCart }) {

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
          id: `jean2-${selectedSize}`,
          name: "Jeans",
          price: 1799,
          quantity: count,
          size: selectedSize, 
          image: "/images/jean-2.jpeg",
          description:
            "Bring back the vintage vibe with these baggy-fit jeans — the ultimate blend of comfort and style. Featuring a relaxed fit and soft denim fabric, they offer a laid-back streetwear aesthetic. Ideal for casual outings, concerts, or daily wear where comfort meets attitude.",
        });
    
        setAdded(true);
        setTimeout(() => setAdded(false), 5000);
      };

    return (
        <div className="product-container">
      <div className="product-image">
        <img src="/images/jean-2.jpeg" alt="Jean" />
      </div>

      <div className="product-details">
        <h2>Jeans</h2>
        <p className="price">₹1799</p>
        <p className="desc">
          <b>
            Bring back the vintage vibe with these baggy-fit jeans — the ultimate blend of comfort and style. Featuring a relaxed fit and soft denim fabric, they offer a laid-back streetwear aesthetic. Ideal for casual outings, concerts, or daily wear where comfort meets attitude.
          </b>
        </p>


        <label htmlFor="size" id="size-text">Select Size: </label>
        <div className="size-selector">
          <div className="size-options">
            {["30", "32", "34", "36", "38"].map((size) => (
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
