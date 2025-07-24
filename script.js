function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  let reply = "I'm not sure how to respond to that.";
  if (message.toLowerCase().includes("hello")) {
    reply = "Hi there! How can I help you today?";
  } else if (message.toLowerCase().includes("bye")) {
    reply = "Goodbye! Take care!";
  } else if (message.toLowerCase().includes("help")) {
    reply = "Sure! Ask me anything.";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
