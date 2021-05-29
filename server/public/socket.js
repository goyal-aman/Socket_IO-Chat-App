socket.emit("userConnected", userName)

socket.on("join", function(userName){
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join");
    joinDiv.textContent = `${userName} joined chat`;
    chatWindow.append(joinDiv);
})

socket.on("userDisconnect", function(userName){
    let leftDiv = document.createElement("div");
    leftDiv.classList.add('chat');
    leftDiv.classList.add('leave');
    leftDiv.textContent = `${userName} has left chat`
    chatWindow.append(leftDiv);

})
socket.on("message",function(MessageObj){
    let leftDiv = document.createElement("div");
    leftDiv.classList.add('chat');
    leftDiv.classList.add('left');
    leftDiv.classList.add('te');
    leftDiv.textContent = `${MessageObj.userName+': '+ MessageObj.message}`
    chatWindow.append(leftDiv);
})