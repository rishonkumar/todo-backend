const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;