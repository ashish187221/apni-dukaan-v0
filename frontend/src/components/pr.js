{ addToCart }

const handleAddToCart = () => {
    addToCart({
      name: "Jeans",
      price: 2499,
      quantity: count
    });
    alert('Added to Cart !!')
};

onClick={handleAddToCart}