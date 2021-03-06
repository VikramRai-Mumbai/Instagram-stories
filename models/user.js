const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        mobile: Number,
        password: String,
        roles: [
            {
            type: mongoose.Schema.Types.ObjectID,
            ref: "Role"
            }
        ]
    })
);

module.exports = User;