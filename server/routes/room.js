const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const fs = require('fs');

const Room = require('../models/Room');

router.post('/create', (req, res, next) =>{
    let roomids = []
    Room.find({}, (err, rooms) => {
        if (err) {
            console.log(err);
            res.status(400).send("unable to save to database")
        }
        else {
            console.log(rooms);
            rooms.map(room => roomids.push(room.roomid))
            roomids.sort((a, b) => a - b);
            console.log(roomids)
            let i = 0;
            for(; i < roomids[roomids.length - 1]; i++) {
                if (i + 1 !== roomids[i]) {
                    break;
                }
            }
            const newRoom = new Room({
                roomid: i + 1,
                host: req.body.username,
                players: [req.body.username]
            })
            newRoom.save();
            const roomInfo = {
                roomid: i + 1,
                host: req.body.username
            }
            res.json(roomInfo)
        }
    });
});

router.post('/get', (req, res) => {
    console.log("GET DATA START ---")
    Room.find({}, (err, rooms) => {
        if (err)
            console.log(err);
        else {
            res.json(rooms)
        }
    });
});

module.exports = router;