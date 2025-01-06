import React, { useState } from "react";
import { addProduct } from "../services/api";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    type: "",
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product)
      .then(() => alert("Product added successfully"))
      .catch(() => alert("Invalid product input"));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={product.id}
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={product.type}
          onChange={(e) => setProduct({ ...product, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
