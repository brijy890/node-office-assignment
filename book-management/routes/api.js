const express = require("express");
const app = express();
const router = express.Router();
const BookController = require("../controller/Book");

router.get("/books", BookController.index);
router.post("/books", BookController.store);
router.get("/books/:id", BookController.getBookById);
router.put("/books/:id", BookController.update);
router.delete("/books/:id", BookController.deleteBook);

module.exports = router;
