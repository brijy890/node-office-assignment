const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema);
