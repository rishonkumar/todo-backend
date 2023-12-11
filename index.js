const express = require("express")
const app = express();
const dotenv = require("dotenv").config()
const port = process.env.PORT;
const connectDB = require("./db")
const todoRouter = require("./routes/routes")


connectDB();

app.use(express.json());

app.use("/api/todos", todoRouter);


app.listen(port, () => {
    console.log("Server started " + port);
})