const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatSendButton = document.getElementById("chat-send");

chatSendButton.addEventListener("click", () => {
    const message = chatInput.value;
    chatBox.innerHTML += `<p>${message}</p>`;
    chatInput.value = "";
});
