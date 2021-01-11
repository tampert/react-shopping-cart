const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// models
const Product = require("./models/Product.model");
const Order = require("./models/Order.model");
// routes
const Users = require("./routes/Users.route");

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", Users);
app.use((err, req, res, next) => {
  const status = err.name && err.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err.message });
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to mogodb.${process.env.MONGODB_URL}`);
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/products", async (req, res) => {
  // Check if there are any products. Find is a promise
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

app.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.adress ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "data is required." });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

app.get("/api/orders", async (req, res) => {
  // Check if there are any products. Find is a promise
  const orders = await Order.find({});
  res.send(orders);
});

app.listen(port, () => {
  console.log("server at http://localhost:5000");
});
