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
        enum: ["teacher", "student"]
    },

    about: {
        type: String,
    },
    
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    strategy: {
        type: String,
        required: true,
    },
},
    {
    _id: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

