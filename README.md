# 🤖 DUDU AI — Assistente Virtual & Portfólio Interativo

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Google Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlecloud&logoColor=white)](https://ai.google.dev/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

O **DUDU AI** é uma aplicação web Full-Stack interativa que funciona como assistente virtual tático e portfólio para o **Eduardo Ferreira de Souza**. A IA atua como secretária virtual, atendendo os visitantes, fornecendo detalhes sobre a sua formação acadêmica, projetos, currículo e consultando em tempo real as suas atividades recentes no GitHub.
🌐 Demonstração Online
Front-end (GitHub Pages): https://itsmeeduu.github.io/DUDU-IA/

Back-end API (Render): https://dudu-ia.onrender.com

🔥 Funcionalidades Principais
💬 Chat Dinâmico com IA: Alimentado pelo SDK oficial do google-genai com instruções de sistema personalizadas e tolerância a falhas (fallback models).

📊 Integração em Tempo Real com GitHub: O módulo github_info.py recolhe dados dos repositórios públicos e commits recentes do Eduardo para alimentar o contexto do modelo.

📂 Portfólio & Currículo num Clique: Navegação integrada para consulta de projetos e acesso direto ao currículo.

🎨 Interface Tática & Responsiva: Design inspirado em consoles táticos modernos com suporte para múltiplos dispositivos (Mobile-First).

🔒 Arquitetura Segura: Chaves de API protegidas em variáveis de ambiente (.env localmente e env vars no servidor Render) com CORS ativado para requisições seguras.

🛠️ Tecnologias Utilizadas
Back-end (API & Servidor)
Linguagem: Python

Framework Web: Flask

Servidor WSGI: Gunicorn

IA SDK: google-genai (Gemini Flash & Gemini Flash Lite fallback)

Segurança & CORS: flask-cors, python-dotenv

Front-end (Interface)
Linguagens: HTML5, CSS3, JavaScript (ES6+)

Comunicação Assíncrona: Fetch API

Estilização: CSS personalizado (Glassmorphism & Tema Dark Tático)

📂 Estrutura do Repositório
Plaintext
DUDU-IA/
├── css/                 # Arquivos de estilização CSS
├── js/                  # Lógica do front-end e comunicação assíncrona (Fetch)
├── curriculo/           # Arquivos e documentos do currículo
├── github_info.py       # Módulo Python para integração com a API do GitHub
├── server.py           # Servidor de produção Flask/Gunicorn e rotas da API
├── index.html           # Interface principal da aplicação
├── requirements.txt     # Dependências Python do projeto
└── .gitignore           # Arquivos ignorados pelo Git (ex: .env, __pycache__)
⚙️ Como Executar o Projeto Localmente
Clonar o repositório:

Bash
git clone [https://github.com/ItsmeEduu/DUDU-IA.git](https://github.com/ItsmeEduu/DUDU-IA.git)
cd DUDU-IA
Instalar as dependências:

Bash
pip install -r requirements.txt
Configurar as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto com a sua chave da API do Gemini:

Snippet de código
GEMINI_API_KEY="SuaChaveDoGeminiAqui"
GEMINI_MODEL="gemini-flash-latest"
Executar o servidor:

Bash
python server.py
Acesse a aplicação em http://localhost:5000.

✉️ Contatos & Conexões
GitHub: ItsmeEduu

LinkedIn: Eduardo Ferreira de Souza

E-mail: duduferreira09@gmail.com
