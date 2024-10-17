import express from "express";
import {PORT} from "./confij.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(201).send("Life is Jood")
})

app.listen(PORT, () => {
    console.log(`App is listenin to port ${PORT}`)
})