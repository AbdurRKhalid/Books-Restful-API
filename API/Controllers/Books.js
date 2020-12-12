const mongoose = require("mongoose");
const Book = require("../Models/Book");

exports.getAllBooks = function getAllBooks(req, res, next) {
  Book.find()
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
        message: "Some Error Occured While Fetching the Books!",
      });
    });
};

exports.addBook = function addBook(req, res, next) {
  var newBook = new Book({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    author: req.body.author,
    publisher: req.body.publisher,
  });

  newBook
    .save()
    .then((result) => {
      res.status(200).json({
        message: "The Book has Been Saved Successfully!",
        result: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "The error occurred while Adding the Book!",
        error: error,
      });
    });
};

exports.getBookById = function getBookById(req, res, next) {
  res.status(200).json({
    name: "Get Book By Id Controller",
    bookId: req.params.id,
    message: "The Get Book By Id Controller Has Been Hit!",
  });
};

exports.updateBookById = function updateBookById(req, res, next) {
  res.status(200).json({
    name: "Update Book By Id Controller!",
    bookId: req.params.id,
    message: "The Update Book By Id Controller has Been Hit!",
  });
};

exports.deleteBookById = function deleteBookById(req, res, next) {
  res.status(200).json({
    name: "Delete Book By Id!",
    bookId: req.params.id,
    message: "The Delete Book By Id Controller Has Been Hit!",
  });
};
