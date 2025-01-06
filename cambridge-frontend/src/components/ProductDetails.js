import React, { useState } from "react";
import { fetchProductById } from "../services/api";

const ProductDetails = () => {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);

  const handleSearch = () => {
    fetchProductById(id)
      .then(setProduct)
      .catch(() => alert("Product not found"));
  };

  return (
    <div>
      <h2>Product Details</h2>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {product && (
        <div>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Type: {product.type}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
