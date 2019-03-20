const mongoose = require("mongoose");
const Book = require("../model/Book");

const index = async (req, res) => {
  try {
    const result = await Book.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const store = async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  });
  try {
    const result = await book.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBookById = (req, res) => {
  const _id = req.params.id;
  Book.findById(_id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
};

const update = (req, res) => {
  const id = req.params.id;
  const book = {
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  };
  Book.findByIdAndUpdate(id, { $set: book }, { new: true }).then(result =>
    res.status(200).send(result)
  );
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id).then(result => res.status(200).send(result));
};

module.exports = {
  index,
  store,
  getBookById,
  update,
  deleteBook
};
