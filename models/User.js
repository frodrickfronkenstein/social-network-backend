const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // copied and pasted regex from lesson 17 challenge
        match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [

    ],
    friends: [

    ],
}
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

const User = model("User", UserSchema);

module.exports = User;