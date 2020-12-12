const { json } = require("body-parser");
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
  Book.findById(req.params.id)
    .exec()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Some Error Occurred While Fetching the Book By Given ID!",
        error: error,
      });
    });
};

exports.updateBookById = function updateBookById(req, res, next) {
  Book.update(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name: req.body.name,
        author: req.body.author,
        publisher: req.body.publisher,
      },
    }
  )
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "The Book Updated Successfully!",
        result: data,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "The Error Occurred While Updating the Book!",
        error: error,
      });
    });
};

exports.deleteBookById = function deleteBookById(req, res, next) {
  Book.remove({
    _id: req.params.id,
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "The Book Has Been Deleted Successfully!",
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Error Occurred While Deleting the Book!",
        error: error,
      });
    });
};
