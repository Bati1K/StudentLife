const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const closeBtn = document.getElementById("close-btn");
const chatbot = document.getElementById("chatbot");
const chatIcon = document.getElementById("chat-icon");

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const text = userInput.value.trim();
    if (!text) return;
    chatBox.innerHTML += `<p><b>You:</b> ${text}</p>`;
    userInput.value = "";

    setTimeout(() => {
      chatBox.innerHTML += `<p><b>Bot:</b> Just a demo reply 😅</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }
});

closeBtn.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatIcon.style.display = "flex";
});

chatIcon.addEventListener("click", () => {
  chatbot.style.display = "block";
  chatIcon.style.display = "none";
});
