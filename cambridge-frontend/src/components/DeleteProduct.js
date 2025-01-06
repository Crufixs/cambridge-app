import React, { useState } from "react";
import { deleteProduct } from "../services/api";

const DeleteProduct = () => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    deleteProduct(id)
      .then(() => alert("Product deleted successfully"))
      .catch(() => alert("Product does not exist"));
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
