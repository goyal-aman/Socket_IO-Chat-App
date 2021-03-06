let chatInput = document.querySelector('.chat-input');
let chatWindow = document.querySelector('.chat-window');
let myName = document.querySelector(".me .user-name");
let onlineListDiv = document.querySelector(".online-list");
// WARNING: Uncommetn below line for demo or production.
let userName = prompt("Enter Your Name");
myName.textContent = userName

chatInput.addEventListener('keypress', function(e){
    /* add 'me' user chat to chat window. */
    if(e.key=='Enter' && chatInput.value){        
        let chatDiv = document.createElement('div');
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.textContent= userName+": "+chatInput.value;
        chatWindow.append(chatDiv);
        
        // broadcase message to all users
        socket.emit("chat", {userName, message:chatInput.value});
        chatInput.value="";
    }
})