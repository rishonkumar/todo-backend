const express = require("express")
const app = express();
const dotenv = require("dotenv").config()
const port = process.env.PORT;
const connectDB = require("./db")

connectDB();

app.listen(port, () => {
    console.log("Server started ");
})