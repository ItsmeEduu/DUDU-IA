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

    // TEXTO ALTERADO: Efeito de carregamento tático
    const typingElement = addMessage("ai", "Processando diretrizes...");

    try {
        const response = await fetch("/chat", {
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
        // TEXTO ALTERADO: Erro estilizado para falha de rede/sistema
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

    // REDLINE: Injeta a estilização dinâmica dos Avatares e Cores de Remetente da skin
    messageElement.innerHTML = `
        <div class="avatar" style="background: ${isUser ? '#22252e' : '#801011'}; border: ${isUser ? '1px solid #3a3f4f' : 'none'}">
            ${isUser ? "👤" : "🤖"}
        </div>

        <div class="message-content">
            <span class="sender" style="color: ${isUser ? '#da292a' : '#888e9e'}">
                ${isUser ? "Você" : "DUDU AI"}
            </span>
            <p class="text"></p>
        </div>
    `;

    messageElement.querySelector("p").textContent = text;

    messages.appendChild(messageElement);
    scrollToBottom();

    return messageElement;
}

function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}

// ===== EVENT LISTENERS =====

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

input.addEventListener("input", function () {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
});

sendButton.addEventListener("click", sendMessage);
