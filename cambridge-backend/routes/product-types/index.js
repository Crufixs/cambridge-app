const fs = require("fs");
const csvParser = require("csv-parser");
const CSV_FILE = "./products.csv";

// GET /product-types
exports.getProductTypes = (res) => {
  const types = new Set();

  fs.createReadStream(CSV_FILE)
    .pipe(csvParser())
    .on("data", (row) => {
      types.add(row.type);
    })
    .on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify([...types]));
    })
    .on("error", (err) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    });
};
