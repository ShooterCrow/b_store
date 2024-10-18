import express from "express";
import { PORT, mongoDBURL } from "./confij.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send("Life is Jood");
});

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
