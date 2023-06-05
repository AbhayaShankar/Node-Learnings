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
  const singleProduct = products.find((prod) => prod.id === +req.params.id);

  if (!singleProduct) {
    res.status(404).send("Product Doesnot Exist...");
  }
  res.json(singleProduct);
});

// our route can get pretty messy
app.get("/api/products/:id/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello review");
});

// handling query params
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit, sorting } = req.query;
  let sortedProducts = [...products];

  if (sorting === "desc") {
    sortedProducts = sortedProducts.sort((a, b) => b.id - a.id);
  }

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    return res.json({ success: true, data: sortedProducts });
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
