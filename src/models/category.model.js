const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength:50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories' // Reference to another category document (if applicable)
  },
  level: {
    type: Number,
    required: true,
    
  }
});

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;
