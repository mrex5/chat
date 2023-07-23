// Temel JavaScript örnekleri - Dilediğiniz gibi düzenleyebilirsiniz
const messageContainer = document.querySelector(".message-container");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
        addMessageToContainer(message);
        messageInput.value = "";
    }
});

function addMessageToContainer(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    scrollToBottom();
    // Mesajları burada göndermek istediğiniz başka bir platforma da kaydedebilirsiniz.
}

function scrollToBottom() {
    // Mesajlar bittiğinde otomatik olarak aşağı kaydırma
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
