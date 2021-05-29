socket.emit("userConnected", userName)

socket.on("join", function (userObj) {
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join");
    joinDiv.textContent = `${userObj.userName} joined chat`;
    chatWindow.append(joinDiv);
    add_newUser_to_OnlineList(userObj);
})

socket.on("userDisconnect", function (userObj) {
    let leftDiv = document.createElement("div");
    leftDiv.classList.add('chat');
    leftDiv.classList.add('leave');
    leftDiv.textContent = `${userObj.userName} has left chat`
    chatWindow.append(leftDiv);
    remove_user_from_onlineList(userObj);

})
socket.on("message", function (MessageObj) {
    let leftDiv = document.createElement("div");
    leftDiv.classList.add('chat');
    leftDiv.classList.add('left');
    leftDiv.classList.add('te');
    leftDiv.textContent = `${MessageObj.userName + ': ' + MessageObj.message}`
    chatWindow.append(leftDiv);
})
socket.on('latest-online-list', function(userList){
    console.log("entier use list");
    console.log(userList);
console.log("my socket id "+socket.id);
    for(userObj in userList){
        if(userList[userObj].id!=socket.id){
            console.log("adding user");
            console.log(userObj);
            add_newUser_to_OnlineList(userList[userObj]);
        }
    }
})

function add_newUser_to_OnlineList (userObj) {
    // console.log("adding new user object");
    // console.log(userObj);
    let newUser = document.createElement('div');
    newUser.classList.add('user');
    newUser.setAttribute('id', userObj.id);
    newUser.innerHTML = `
        <div class="user-image">
            <img src="img/default.png" alt="">
        </div>
        <div class="user-name">${userObj.userName}</div>
    `
    onlineListDiv.append(newUser);
}
function remove_user_from_onlineList(userObj){
    document.getElementById(`${userObj.id}`).remove();
}
