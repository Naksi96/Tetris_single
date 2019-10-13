const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const RoomSchema = new Schema({
    roomid: {
      type: Number,
      required: true
    },
    host: {
      type: String,
      required: true
    },
    players: {
      type: Array,
      required: true
    }
});

module.exports = mongoose.model("room", RoomSchema);