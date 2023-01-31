const {Schema, Model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 30
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        todos: [
            {
            type: Schema.Types.ObjectId,
            ref: "Todo"
            }
        ]
    },
    {
        toJson: {
            getters: true,
            virtuals: true
        }
    }
);

UserSchema.virtual('todoCount', function() {
    return this.todos.length;
})

const User = model('User', UserSchema);

module.exports = User;