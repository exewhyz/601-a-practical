import dotenv from "dotenv";
import express from "express";

import connectDb from "./db/index.js";

import { validateToken } from "./middleware.js";

import {
  login,
  register,
  getUserDetails,
} from "./controllers/users.controller.js";

import {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "./controllers/product.controller.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDb();

const app = express();

// Middlewares
app.use(express.json());

// products-routes
app.get("/products", fetchProducts);
app.get("/products/:id", fetchProductById);
app.post("/products", createProduct);
app.patch("/products/:id", updateProductById);
app.delete("/products/:id", deleteProductById);

//auth-users-routes
app.post("/login", login);
app.post("/register", register);
app.get("/me", validateToken, getUserDetails);

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
