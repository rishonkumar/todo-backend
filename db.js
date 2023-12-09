const mongoose = require("mongoose");
const MONGO_URL = "";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedToplogy : true
        })
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
module.exports = connectDB;