"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {creds} = require("./passwords");
const {secret} = require("./passwords");

/* we will do our customizations for our app variable below.*/
const app = express();
const port = process.env.PORT || 3000;
const loggedUsers = {};
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const passwd = req.body.passwd;
    const user = req.body.user;
    console.log("request", passwd, user);
    if (!passwd || !user) {
        return res.status(401).send({msg: "Unauthorized User!!"});
    }
    if(creds[user] && creds[user] === passwd) {
        const signed = jwt.sign({userId: user}, secret, {expiresIn: 86400});
        return res.status(200).send({msg: "User Authenticated!!", token: signed});
    }
    return res.status(401).send({msg: "Unauthorized User!!"});
});

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log("New client connected", socket.id);
    socket.emit("sendToken");
    socket.on("sendToken", (data) => {
        debugger;
        if(data.token){
            jwt.verify(data.token, secret, function(err, decoded) {
                if (err) {
                    console.log("disconnecting")
                    return socket.disconnect();
                }
                loggedUsers[decoded.userId] = socket.id;
                loggedUsersArr.push(socketId)
                return;
            });
        }else {
            socket.disconnect();

        }
    });
    socket.broadcast.emit('msg', {msg: "New User Connected!!"});
    socket.on('disconnect', (socket) => {
        Object.keys(loggedUsers).map((userId) => {
            if(loggedUsers[userId] === socket.id) {
                delete loggedUsers[userId];
            }
        });
        console.log("Client dissconnected", socket.id);
    });
    socket.on('msg', (msg) => {
        console.log(msg);
        socket.emit("msg", msg);
    });
});
server.listen(port, () => {
    console.log(`Server listening on port ${port}!!`);
});