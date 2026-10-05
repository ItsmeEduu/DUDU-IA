const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");

const conversation = [];

let waiting = false;


// =========================================================
// ENVIAR MENSAGEM
// =========================================================

async function sendMessage() {

    const message = input.value.trim();

    if (message === "" || waiting) {
        return;
    }

    waiting = true;

    sendButton.disabled = true;

    // Mensagem do usuário
    addMessage("user", message);

    conversation.push({
        role: "user",
        content: message
    });

    // Limpa campo
    input.value = "";

    input.style.height = "auto";


    // =====================================================
    // MENSAGEM TEMPORÁRIA DA IA
    // =====================================================

    const typingElement = addMessage(
        "ai",
        "⚡ DUDU AI está pensando..."
    );

    const textElement =
        typingElement.querySelector("p");


    try {

        // =================================================
        // REQUISIÇÃO
        // =================================================

        const response = await fetch(
            "https://dudu-ia.onrender.com/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    messages: conversation
                })
            }
        );


        if (!response.ok) {

            throw new Error(
                `Erro HTTP ${response.status}`
            );
        }


        // =================================================
        // STREAMING
        // =================================================

        const reader =
            response.body.getReader();

        const decoder =
            new TextDecoder("utf-8");

        let fullResponse = "";

        let firstChunk = true;


        while (true) {

            const {
                value,
                done
            } = await reader.read();


            if (done) {
                break;
            }


            const chunk =
                decoder.decode(
                    value,
                    {
                        stream: true
                    }
                );


            if (firstChunk) {

                firstChunk = false;

                textElement.textContent = "";

            }


            fullResponse += chunk;


            // Mostra imediatamente na tela
            textElement.textContent =
                fullResponse;


            scrollToBottom();
        }


        // =================================================
        // FINALIZA RESPOSTA
        // =================================================

        fullResponse =
            fullResponse.trim();


        if (!fullResponse) {

            fullResponse =
                "Não consegui formular uma resposta.";
        }


        textElement.textContent =
            fullResponse;


        conversation.push({

            role: "assistant",

            content: fullResponse

        });


    } catch (error) {

        console.error(
            "Erro DUDU AI:",
            error
        );


        textElement.textContent =
            "⚠️ Não consegui conectar com a DUDU AI. Tente novamente.";


        // Remove a pergunta que ficou sem resposta
        conversation.pop();

    }


    waiting = false;

    sendButton.disabled = false;

    scrollToBottom();

    input.focus();
}


// =========================================================
// CRIAR MENSAGEM
// =========================================================

function addMessage(role, text) {

    const isUser =
        role === "user";


    const messageElement =
        document.createElement("div");


    messageElement.classList.add(
        "message",
        isUser
            ? "user-message"
            : "ai-message"
    );


    const bubble =
        document.createElement("div");

    bubble.classList.add(
        "bubble"
    );


    const paragraph =
        document.createElement("p");


    // Segurança:
    // usamos textContent em vez de innerHTML
    paragraph.textContent =
        text;


    bubble.appendChild(
        paragraph
    );


    messageElement.appendChild(
        bubble
    );


    messages.appendChild(
        messageElement
    );


    scrollToBottom();


    return messageElement;
}


// =========================================================
// SCROLL
// =========================================================

function scrollToBottom() {

    messages.scrollTop =
        messages.scrollHeight;
}


// =========================================================
// ENTER PARA ENVIAR
// =========================================================

input.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();
        }
    }
);


// =========================================================
// BOTÃO
// =========================================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// =========================================================
// AJUSTE AUTOMÁTICO DO INPUT
// =========================================================

input.addEventListener(
    "input",
    () => {

        input.style.height =
            "auto";

        input.style.height =
            `${input.scrollHeight}px`;
    }
);


// =========================================================
// MENU MOBILE
// =========================================================

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );

const sidebar =
    document.querySelector(
        ".sidebar"
    );

const overlay =
    document.getElementById(
        "overlay"
    );


function toggleSidebar() {

    sidebar.classList.toggle(
        "open"
    );

    overlay.classList.toggle(
        "active"
    );
}


function closeSidebar() {

    sidebar.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "active"
    );
}


menuToggle.addEventListener(
    "click",
    toggleSidebar
);


overlay.addEventListener(
    "click",
    closeSidebar
);


sidebar
    .querySelectorAll("a")
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeSidebar
            );

        }
    );