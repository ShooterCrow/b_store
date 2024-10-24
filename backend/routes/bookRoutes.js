import express from "express";
import { Book } from "../models/bStoreModel";

const router = express.router()

//Post to DB
router.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "Send all required fields, Title, year, author" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = Book.create(newBook);
    console.log(book);
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Jet all boojs from DB
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    console.log(books);
    res.status(201).send({
      count: books.length,
      content: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Jet a particular booj from DB
router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Send book ID" });
    }
    const book = await Book.findById(id);
    res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Update a booj in DB
router.put("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.title || !req.body.author) {
      return res.status(400).send({ message: "Send updated book data" });
    }
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (result) {
      return res.status(200).send({ message: result });
    } else {
      return res
        .status(400)
        .send({
          message:
            "Booj not found, Please maje sure to add a body to your request",
        });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Delete a booj from DB
router.delete("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (result) {
      return res.status(200).send({ message: result.title + " Booj deleted" });
    } else {
      return res.status(400).send({ message: "Booj not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

console.log(router)

export default router