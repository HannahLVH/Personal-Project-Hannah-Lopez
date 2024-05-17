const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Buffer,
        required: true,
    },
    salt: {
        type: Buffer,
    },
    strategy: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;