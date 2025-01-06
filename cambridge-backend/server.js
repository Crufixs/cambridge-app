const http = require("http");
const {
  getProducts,
  getProductById,
  postProduct,
  deleteProduct,
} = require("./routes/products/index.js");

const { getProductTypes } = require("./routes/product-types/index.js");

// Load the products CSV file path
const server = http.createServer((req, res) => {
  console.log("request", req.method, req.url);

  // Add CORS headers to every response
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle routes
  if (req.method === "GET" && req.url === "/products") {
    return getProducts(res);
  }
  if (req.method === "GET" && req.url.startsWith("/products/")) {
    const id = req.url.split("/")[2];
    return getProductById(res, id);
  }
  if (req.method === "POST" && req.url === "/products") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => postProduct(res, JSON.parse(body)));
    return;
  }
  if (req.method === "DELETE" && req.url.startsWith("/products/")) {
    const id = req.url.split("/")[2];
    return deleteProduct(res, id);
  }
  if (req.method === "GET" && req.url === "/product-types") {
    return getProductTypes(res);
  }

  // Handle 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
