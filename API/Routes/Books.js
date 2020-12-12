const booksRouter = require("express").Router();
const booksControllers = require("../Controllers/Books");
booksRouter.get("/", booksControllers.getAllBooks);

booksRouter.post("/add", booksControllers.addBook);

booksRouter.get("/:id", booksControllers.getBookById);

booksRouter.put("/:id", booksControllers.updateBookById);

booksRouter.delete("/:id", booksControllers.deleteBookById);
module.exports = booksRouter;
