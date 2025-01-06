import React, { useEffect, useState } from "react";
import { fetchProductTypes } from "../services/api";

const ProductTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchProductTypes().then(setTypes);
  }, []);

  return (
    <div>
      <h2>Product Types</h2>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTypes;
