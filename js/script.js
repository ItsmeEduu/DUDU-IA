const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");
 
const conversation = [];
let waiting = false;
 
// ===== FUNÇÃO PARA ENVIAR MENSAGEM (INTEGRAÇÃO BACKEND) =====
async function sendMessage() {
    const message = input.value.trim();
 
    if (message === "" || waiting) {
        return;
    }
 
    waiting = true;
    sendButton.disabled = true;
 
    addMessage("user", message);
    conversation.push({ role: "user", content: message });
 
    input.value = "";
    input.style.height = "auto";
 
    // Efeito de carregamento tático
    const typingElement = addMessage("ai", "Processando diretrizes...");
 
    try {
        // Endpoint apontando para a API hospedada no Render
        const response = await fetch("https://dudu-ia.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: conversation }),
        });
 
        const data = await response.json();
 
        if (!response.ok) {
            const serverError = new Error(data.error || "Erro no servidor");
            serverError.serverMessage = data.error;
            throw serverError;
        }
 
        typingElement.querySelector("p").textContent = data.reply;
        conversation.push({ role: "assistant", content: data.reply });
    } catch (error) {
        console.error(error);
        typingElement.querySelector("p").textContent =
            error.serverMessage ||
            "⚠️ Conexão interrompida. Falha ao sincronizar com o console tático. Tente novamente.";
        conversation.pop();
    }
 
    waiting = false;
    sendButton.disabled = false;
    scrollToBottom();
    input.focus();
}
 
// ===== FUNÇÃO PARA RENDERIZAR MENSAGENS NA TELA =====
function addMessage(role, text) {
    const isUser = role === "user";
 
    const messageElement = document.createElement("div");
    messageElement.classList.add(
        "message",
        isUser ? "user-message" : "ai-message"
    );
 
    messageElement.innerHTML = `
        <div class="bubble">
            <p>${text}</p>
        </div>
    `;
 
    messages.appendChild(messageElement);
    scrollToBottom();
 
    return messageElement;
}
 
function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}
 
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});
 
sendButton.addEventListener("click", sendMessage);
 
input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
});
 
// ===== GAVETA DA BARRA LATERAL (MOBILE) =====
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");
 
function toggleSidebar() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
}
 
function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
}
 
menuToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);
 
// Fecha a gaveta ao tocar em qualquer link dentro dela
sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
});