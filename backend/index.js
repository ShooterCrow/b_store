import express from "express";
import { PORT, mongoDBURL } from "./confij.js";
import mongoose from "mongoose";
import { Book } from "./models/bStoreModel.js";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  return res.status(201).send("Life is Jood");
});

//Post to DB
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "Send all required fields, Title, year, author" });
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    }

    const book = Book.create(newBook)
    console.log(book);
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Jet all boojs from DB
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({});
        console.log(books);
        res.status(201).send({
            count: books.length,
            content: books
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connectd to database");
    app.listen(PORT, () => {
      console.log(`App is listenin to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
