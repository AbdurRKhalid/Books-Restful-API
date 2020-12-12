const booksRouter = require("express").Router();

booksRouter.get("/", function getAllBooks(req, res, next) {
  res.status(200).json({
    name: "Get All Books Controller",
    message: "The Get All Books Controller Has Been Hit!",
  });
});

booksRouter.post("/add", function addBook(req, res, next) {
  res.status(200).json({
    name: "Add Book Controller",
    message: "The Add Book Controller Has Been Hit!",
  });
});

booksRouter.get("/:id", function getBookById(req, res, next) {
  res.status(200).json({
    name: "Get Book By Id Controller",
    bookId: req.params.id,
    message: "The Get Book By Id Controller Has Been Hit!",
  });
});

booksRouter.put("/:id", function updateBookById(req, res, next) {
  res.status(200).json({
    name: "Update Book By Id Controller!",
    bookId: req.params.id,
    message: "The Update Book By Id Controller has Been Hit!",
  });
});

booksRouter.delete("/:id", function deleteBookById(req, res, next) {
  res.status(200).json({
    name: "Delete Book By Id!",
    bookId: req.params.id,
    message: "The Delete Book By Id Controller Has Been Hit!",
  });
});
module.exports = booksRouter;
