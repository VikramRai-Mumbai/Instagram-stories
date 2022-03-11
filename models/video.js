const mongoose = require("mongoose");


const Video = mongoose.model(
    "Video",
    new mongoose.Schema({
        VideoData:{
            data:Buffer,
            contentType: String
        },
        VideoDesc: String,
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

module.exports = Video;