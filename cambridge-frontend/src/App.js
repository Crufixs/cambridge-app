import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductTypes from "./components/ProductTypes";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  const [view, setView] = useState("list");

  return (
    <div>
      <Navbar setView={setView} />
      {view === "list" && <ProductList />}
      {view === "details" && <ProductDetails />}
      {view === "types" && <ProductTypes />}
      {view === "add" && <AddProduct />}
      {view === "delete" && <DeleteProduct />}
    </div>
  );
}

export default App;
