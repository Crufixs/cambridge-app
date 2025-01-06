const fs = require("fs");
const csvParser = require("csv-parser");
const CSV_FILE = "./products.csv";

// GET /products
exports.getProducts = (res) => {
  const products = [];

  fs.createReadStream(CSV_FILE)
    .pipe(csvParser())
    .on("data", (row) => products.push(row))
    .on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    })
    .on("error", (err) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    });
};

// GET /products/:id
exports.getProductById = (res, id) => {
  let product = null;

  fs.createReadStream(CSV_FILE)
    .pipe(csvParser())
    .on("data", (row) => {
      if (row.id === id) {
        product = row;
      }
    })
    .on("end", () => {
      if (!product) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product not found" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    })
    .on("error", (err) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    });
};

// POST /products
exports.postProduct = (res, product) => {
  if (!product.id || !product.name || !product.type || !product.price) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid product data" }));
    return;
  }

  const newProduct = `${product.type},${product.name},${product.id},${product.price}\n`;
  fs.appendFile(CSV_FILE, newProduct, (err) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
      return;
    }

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Product added successfully" }));
  });
};

// DELETE /products/:id
exports.deleteProduct = (res, id) => {
  const products = [];
  let found = false;

  fs.createReadStream(CSV_FILE)
    .pipe(csvParser())
    .on("data", (row) => {
      if (row.id !== id) {
        products.push(row);
      } else {
        found = true;
      }
    })
    .on("end", () => {
      if (!found) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product not found" }));
        return;
      }

      const header = "type,name,id,price";
      const updatedData = products
        .map(
          (product) =>
            `${product.type},${product.name},${product.id},${product.price}\n`
        )
        .join("");
      fs.writeFile(CSV_FILE, `${header}\n${updatedData}`, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: err.message }));
          return;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product deleted successfully" }));
      });
    })
    .on("error", (err) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    });
};
