import express from "express";
import {details} from "./confij.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(201).send("Life is Jood")
})

app.listen(details.PORT, () => {
    console.log(`App is listenin to port ${PORT}`)
})