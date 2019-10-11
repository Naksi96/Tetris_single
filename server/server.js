const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');

// DB Config
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

//session
const session = require("express-session");
const sessionConfig = require("./config/serverConfig.json").session;
const MongoStore = require('connect-mongo')(session);

// Connect to MongoDB
mongoose.connect(
    db,
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true 
	}
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));
const connectedDb = mongoose.connection;

// Define Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http, { pingTimeout: 60000 });
const sharedsession = require('express-socket.io-session');

// Router
/* const rooms = require(''); */
const room = require("./routes/room");


//session settings
//session secret is stored in serverConfig.json which is gitignored for version control.
const sessionInfo = {
    secret: sessionConfig.secret, // secret key to verify session
    resave: false,
	saveUninitialized: true,
	store: new MongoStore({ mongooseConnection: connectedDb })
}

app.use(session(sessionInfo));

// set socket
io.use(sharedsession(session(sessionInfo), {
    autoSave:true
}));

let people = [];
io.sockets.on('connection', (socket) => {
	// change to username_related chatroom using mysql db
    socket.on('disconnect', () => {
        /* console.log("Disconnected from the download server"); */
	})
	people[socket.handshake.session.logged_user] = socket.id;
	socket.handshake.session.save();
	
	socket.on('ping', msg => {
		alert(msg);
	});
});
global.people = people;

//Bodyparser middleware 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Routes
app.use("/api/room/", room);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));