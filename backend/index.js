import express from "express";
import info from "./confij.js";
import mongoose from "mongoose";
import { Book } from "./models/bStoreModel.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(201).send("Life is Jood");
});

app.use("/books", bookRoutes)

mongoose
  .connect(info.mongoDBURL)
  .then(() => {
    console.log("App connectd to database");
    app.listen(info.PORT, () => {
      console.log(`App is listenin to port ${info.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
