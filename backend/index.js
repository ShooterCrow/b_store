import express from "express";
import { PORT, mongoDBURL } from "./confij.js";
import mongoose from "mongoose";
import { Book } from "./models/bStoreModel.js";
// import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
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
