const {User, Todo} = require("../models");

const todoController = {
    addTodo({params, body}, res) {
        Todo.create(body)
        .then(({_id}) => {
            console.log(params.id)
            return User.findOneAndUpdate(
                {_id: params.id},
                {$push: {todos: _id}},
                {new: true}
            )
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: "No user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    updateTodo({params, body}, res) {
        Todo.findByIdAndUpdate({_id: params.todoId}, body, {new: true})
        .then(dbTodoData => {
            if(!dbTodoData) {
                res.status(404).json({message: "No todo found with this id"});
                return;
            }
            res.json(dbTodoData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    deleteTodo({params}, res) {
        Todo.findOneAndDelete({_id: params.todoId})
        .then(dbTodoData => {
            if(!dbTodoData) {
                res.status(404).json({message: "No message found with this id"});
                return;
            }
            return User.findOneAndUpdate(
                {_id: params.id},
                {$pull: {todos: params.todoId}},
                {new: true}
                )
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: "No user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
    
}

module.exports = todoController;