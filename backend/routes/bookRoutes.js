import express from "express";
import {Book} from "../models/bStoreModel.js"

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      console.log(req.title);
      res.status(400).send({ error: req.params["vsdv"] });
    } else {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      res.status(200).send(book);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ detail: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({ number: books.length, all: books });
  } catch (err) {
    console.log({ error: err.message });
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id,  req.body);
    if (!result) {
      return res.status(404).json({message: "Book not found"})
    } else {
      return res.status(200).send({status: "Updated sucessfully", result: result});
    }

  } catch (err) {
    console.log({error: err.message})
    res.status(500).send({ error: err.message });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id)
    if (result) {
      return res.status(202).json(result)
    }else {
      return res.status(404).send({ message: result })
    }    
  } catch (err) {
    console.log({error: err.message})
    res.status(500).send({Error: err.message})
  }
})

export default router;