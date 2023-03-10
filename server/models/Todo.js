const {Schema, model} = require('mongoose');

const TodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100
        },
        content: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 500
        },
        dueDate: {
            type: Date,
            required: false,
        },
        owner_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

const Todo = model("Todo", TodoSchema);

module.exports = Todo;