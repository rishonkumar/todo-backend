const Todo = require("../models/todo")

const createTodo = async(req,res) => {
    try{
        const newTodo = await Todo.create(req.body);
        res.status(201).json({
            message :"Todo created successfully",
            todo : newTodo
        })
    }
    catch(error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const getTodos = async(req,res) => {
    try{
        const todos = await Todo.find();
        res.status(201).json({
            todos
        })
    }
    catch(error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const updateTodos = async(req,res) => {
    try{
        const udpatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(!udpatedTodo) {
            return res.status(500).json({
                message : "Todo not found"
            })

        }

        res.status(200).json({
            message : "Todo updated successfully",
            todo : udpatedTodo
        })
    }
    catch(error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const deleteTodo = async (req,res) => {

    try{
        await Todo.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message : "Todo updated successfully",
        })
    }
    catch(error) {
        res.status(500).json({
            message : error.message
        })
    }

}


module.exports = {
    createTodo,
    updateTodos,
    getTodos,
    deleteTodo
}

