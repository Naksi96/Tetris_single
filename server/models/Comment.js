const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const CommentSchema = new Schema({
    imdb: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("comment", CommentSchema);