const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        let salt = bcrypt.genSaltSync(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    next();
});

UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.virtual('todoCount', function() {
    return this.todos.length;
})

const User = model('User', UserSchema);

module.exports = User;