const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, "Comment is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"]
    },
}, {timestamps: true});

mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;