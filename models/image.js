const mongoose = require("mongoose");

const Image = mongoose.model(
    "Image",
    new mongoose.Schema({
        ImageData:{
            data:Buffer,
            contentType: String
        },
        ImageDesc: String,
        Like: Number,
        Dislike: Number,
        Comment: Number,
        isDeleted: Boolean,
        PostbyUserID: [
             {
                 UserID: mongoose.Schema.Types.ObjectId,
                 name: String
             }
        ]
    })
);