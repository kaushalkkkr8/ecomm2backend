const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  // img: String,
  img:[
    {
      imageURL: {
        type: String,
      },
      originalName: {
        type: String,
      },
      mimeType: {
        type: String,
      },
      size: {
        type: Number,
      },
    },
  ],
  category: String,
  rating: Number,
  productId: { type: String, unique: true }, // Added productId field
  inStockValue: Number, // Available stock value
  soldStockValue: Number, // Number of items sold
  description: String, // Number of items sold
  visibility: { type: String, default: 'on' } // Visibility field with default 'on'
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;