let chatInput = document.querySelector('.chat-input');
let chatWindow = document.querySelector('.chat-window');

// WARNING: Uncommetn below line for demo or production.
// let userName = prompt("Enter Your Name");
let userName = "test";

chatInput.addEventListener('keypress', function(e){
    /* add 'me' user chat to chat window. */
    if(e.key=='Enter' && chatInput.value){        
        let chatDiv = document.createElement('div');
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.textContent= userName+": "+chatInput.value;
        console.log("chat div " + chatDiv);
        chatWindow.append(chatDiv);
        chatInput.value="";
    }
})