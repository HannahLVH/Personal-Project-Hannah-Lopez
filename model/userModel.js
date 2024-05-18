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
    role: {
        type: String,
        required: true,
        enum: ["Teacher", "Student"]
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
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

