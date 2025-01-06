const BASE_URL = "http://localhost:3000";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.statusText}`);
  }
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching product by ID: ${response.statusText}`);
  }
  return response.json();
};

export const fetchProductTypes = async () => {
  const response = await fetch(`${BASE_URL}/product-types`);
  if (!response.ok) {
    throw new Error(`Error fetching product types: ${response.statusText}`);
  }
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error(`Error adding product: ${response.statusText}`);
  }
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error deleting product: ${response.statusText}`);
  }
  return response.json();
};
