// imports
const express = require('express'); 
const {Server}= require("socket.io");
const http = require("http");


const app  = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static("public"));

let userList = {};
io.on("connection", function(socket){

    // when user joined on chat.
    socket.on("userConnected", function(userName){
        let userObject = {id: socket.id, userName:userName};
        userList[socket.id] = userObject;

        // sending current user list to all active users.
        socket.broadcast.emit('join', userObject);

        socket.emit('latest-online-list', userList);

        // send list of currently active users to user who has joined.
        // socket.broadcast.emit("new-user-online", userObject);
    })

    socket.on('disconnect', function(){
        let userObj = userList[socket.id];
        try{
            socket.broadcast.emit("userDisconnect", userObj)
        }
        catch(e){
            console.log("ERROR: "+e);
        }
        delete userList[socket.id];
    })

    socket.on("chat", function(MessageObj){
        //MessageObj{username, message};
        socket.broadcast.emit("message", MessageObj);

    })

})


server.listen(5500, function(){
})
