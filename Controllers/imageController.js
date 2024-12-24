const Product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    console.log("======uploaded files", req.files);

    const { name, price, category, rating, inStockValue, soldStockValue,productId,description } = req.body;
    console.log("Request Body:", req.body);

    console.log("name", name);
    console.log("price", price);
    console.log("category", category);
    console.log("rating", rating);
    console.log("inStockValue", inStockValue);
    console.log("soldStockValue", soldStockValue);
    console.log("productId", productId);

    const postImages = req.files.map((file) => ({
      mimeType: file.mimetype,
      imageURL: file.path,
      originalName: file.originalname,
      size: file.size,
    }));

    const product = new Product({
      name,
      price,
      category,
      rating,
      inStockValue,
      soldStockValue,
      productId,
      visibility:"on",
      description,
      img: postImages,
    });
    console.log("product", product);

    const result = await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: result,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error.message,
    })
  }
};

module.exports = { addProduct };
