const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  ratings: String,
  image: String, // Changed from images array to a single image field
  category: String,
  seller: String,
  stock: String,
  numOfReviews: String,
  createdAt: { type: Date, default: Date.now }, // Automatically sets creation date
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
