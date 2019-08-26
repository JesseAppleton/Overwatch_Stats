const mongoose = require('mongoose');
// const ReviewSchema = require("./review");  *** If needed, we can use this for whatever and rename it. Delete if not.

const PlayerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    // title: {
    //     type: String,
    //     required: [true, "Title is required"]
    // },
    // img: {
    //     type: String,
    //     required: [true, "Image is required"]
    // },
    // reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model("Player", PlayerSchema);