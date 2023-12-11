const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

const mongo = process.env.MONGO_URL

const connectDB = async () => {
    try {
        console.log("Connected DB");
        await mongoose.connect(mongo, {
            useNewUrlParser : true,
        })
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
module.exports = connectDB;