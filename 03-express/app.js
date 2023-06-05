const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1> <a href="/api/allProducts">All Products</a>  <a href="/api/products">products</a>'
  );
});

app.get("/api/allProducts", (req, res) => {
  res.json(products);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((prod) => {
    const { id, name, image, price } = prod;
    return { id, name, image, price };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find((prod) => +prod.id === +req.params.id);
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
