const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
      name: { type: String },
      product_information: { type: String },
      brand: { type: String },
      full_description: { type: String },
      pricing: { type: String },
      listing_price: { type: String },
      availability_status: { type: Boolean },
      images: { type: Array, default: [] },
      product_category: { type: String },
      average_rating: { type: Number },
      small_description: { type: String },
      total_reviews: { type: Number },
      total_answered_questions: { type: Number },
      customization_options: {},
      seller_id: { type: String },
      seller_name: { type: String }
   
});

mongoose.models = {};

const products = mongoose.model("products", productSchema);

module.exports = products;
