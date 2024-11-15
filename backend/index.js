import express from "express";
import confij from "./confij.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
const { PORT, mongoDBURL } = confij;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Test message");
});

app.use("/books", bookRoutes)

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listenin at port ${PORT}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
