import React from "react";

const Navbar = ({ setView }) => (
  <nav>
    <button onClick={() => setView("list")}>All Products</button>
    <button onClick={() => setView("details")}>Product Details</button>
    <button onClick={() => setView("types")}>Product Types</button>
    <button onClick={() => setView("add")}>Add Product</button>
    <button onClick={() => setView("delete")}>Delete Product</button>
  </nav>
);

export default Navbar;
