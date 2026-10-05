# 🤖 DUDU AI — Portfólio Interativo com Inteligência Artificial

<p align="center">
  <strong>Um portfólio diferente: desenvolvido para conversar, apresentar meus projetos e mostrar minha evolução como desenvolvedor.</strong>
</p>

<p align="center">
  <a href="https://dudu-ia-front.onrender.com">
    <img src="https://img.shields.io/badge/🚀_DEMO-ONLINE-success?style=for-the-badge" alt="Demo">
  </a>
  <a href="https://github.com/ItsmeEduu/DUDU-IA">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## 🧠 Sobre o projeto

O **DUDU AI** é um portfólio web interativo desenvolvido para apresentar minha trajetória como desenvolvedor de uma maneira diferente.

Em vez de apenas navegar por páginas com informações estáticas, o visitante pode interagir com uma **assistente virtual baseada em Inteligência Artificial**, capaz de apresentar informações sobre minha formação, projetos, tecnologias e experiência.

A ideia nasceu de uma pergunta simples:

> **"E se meu portfólio pudesse conversar com quem está visitando?"**

O resultado foi o DUDU AI.

🌐 **Acesse o projeto:**
https://dudu-ia-front.onrender.com

---

## ✨ Funcionalidades

### 🤖 Assistente com IA

O projeto utiliza Inteligência Artificial para interpretar as perguntas dos visitantes e responder de acordo com o contexto do meu perfil profissional.

### 💬 Chat interativo

Interface de conversa desenvolvida com JavaScript e comunicação assíncrona através da Fetch API.

### 🐙 Integração com GitHub

O projeto possui um módulo responsável por consultar informações públicas do GitHub e utilizar esses dados para enriquecer o contexto apresentado pela aplicação.

### 📂 Portfólio de projetos

Apresentação dos projetos desenvolvidos durante minha jornada de aprendizado em programação e desenvolvimento de software.

### 📄 Currículo

Acesso direto ao meu currículo através da própria interface do portfólio.

### 📱 Interface responsiva

O layout foi desenvolvido pensando em diferentes tamanhos de tela, permitindo a utilização em computadores e dispositivos móveis.

### 🔐 Variáveis de ambiente

As informações sensíveis, como chaves de API, são protegidas através de variáveis de ambiente e não ficam expostas diretamente no código-fonte.

---

## 🛠️ Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* Design responsivo
* Glassmorphism
* Dark Theme

### Back-end

* Python
* Flask
* Gunicorn
* Flask-CORS
* Python Dotenv

### Inteligência Artificial

* Google Gemini
* `google-genai`
* Sistema de instruções/contexto personalizado
* Modelo de fallback para maior tolerância a falhas

### Integrações

* GitHub API
* Render
* GitHub

---

## 🏗️ Arquitetura do projeto

```text
DUDU-IA/
│
├── css/
│   └── estilos da interface
│
├── js/
│   └── lógica do front-end
│
├── curriculo/
│   └── arquivos do currículo
│
├── github_info.py
│   └── integração com GitHub
│
├── server.py
│   └── servidor Flask + API
│
├── index.html
│   └── interface principal
│
├── requirements.txt
│   └── dependências Python
│
├── .gitignore
│   └── arquivos ignorados pelo Git
│
└── README.md
```

---

## 🔄 Como funciona

O fluxo principal da aplicação funciona da seguinte maneira:

```text
                VISITANTE
                    │
                    ▼
            ┌───────────────┐
            │  Interface    │
            │   HTML/CSS/JS │
            └───────┬───────┘
                    │
                    │ Fetch API
                    ▼
            ┌───────────────┐
            │ Flask / API   │
            │   Python      │
            └───────┬───────┘
                    │
             ┌──────┴──────┐
             ▼             ▼
        ┌─────────┐   ┌──────────┐
        │ Gemini  │   │  GitHub  │
        │   AI    │   │   API    │
        └────┬────┘   └────┬─────┘
             │             │
             └──────┬──────┘
                    ▼
             Resposta da IA
                    │
                    ▼
              👤 Visitante
```

---

## 🚀 Executando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/ItsmeEduu/DUDU-IA.git
```

Entre na pasta:

```bash
cd DUDU-IA
```

### 2. Instale as dependências

```bash
pip install -r requirements.txt
```

### 3. Configure as variáveis de ambiente

Crie um arquivo chamado:

```text
.env
```

Na raiz do projeto.

Adicione suas configurações:

```env
GEMINI_API_KEY="SUA_CHAVE_AQUI"
GEMINI_MODEL="gemini-flash-latest"
```

> ⚠️ Nunca publique sua chave de API no GitHub.

### 4. Execute o servidor

```bash
python server.py
```

Depois, acesse:

```text
http://localhost:5000
```

---

## 🌐 Deploy

O projeto está hospedado utilizando:

**Front-end / aplicação:** Render

**Código-fonte:** GitHub

### 🔗 Projeto online

👉 https://dudu-ia-front.onrender.com

---

## 🎯 Objetivo

Mais do que criar um portfólio, este projeto representa uma etapa da minha evolução como desenvolvedor.

Durante o desenvolvimento, pude trabalhar com:

* Desenvolvimento Front-end
* Desenvolvimento Back-end
* APIs
* Python
* JavaScript
* Integração com Inteligência Artificial
* Integração com GitHub
* Variáveis de ambiente
* Deploy
* Comunicação entre Front-end e Back-end
* Desenvolvimento de interfaces responsivas

O projeto também foi criado com o objetivo de continuar evoluindo conforme avanço nos meus estudos em **Análise e Desenvolvimento de Sistemas**.

---

## 🚧 Próximos passos

O projeto continua em evolução.

Algumas ideias para futuras versões:

* [ ] Histórico de conversas
* [ ] Melhorar o contexto da IA
* [ ] Novas integrações com APIs
* [ ] Sistema de analytics
* [ ] Melhorias na experiência mobile
* [ ] Novas animações e interações
* [ ] Sistema de temas
* [ ] Mais informações sobre projetos
* [ ] Melhorias na arquitetura do back-end

---

## 👨‍💻 Desenvolvedor

### Eduardo Ferreira de Souza

Estudante de **Análise e Desenvolvimento de Sistemas**, interessado em desenvolvimento de software, Inteligência Artificial e criação de projetos que transformem ideias em aplicações reais.

Estou construindo minha experiência através de projetos práticos e buscando constantemente aprender novas tecnologias.

### 🔗 Conecte-se comigo

**GitHub:**
https://github.com/ItsmeEduu

**LinkedIn:**
https://www.linkedin.com/in/itsmeeduu/

**E-mail:**
[duduferreira09@gmail.com](mailto:duduferreira09@gmail.com)

---

## ⭐ Gostou do projeto?

Se você achou o projeto interessante, considere deixar uma ⭐ no repositório.

Cada projeto faz parte da minha evolução como desenvolvedor — e este é apenas o começo. 🚀

---

<p align="center">
  <strong>🤖 DUDU AI</strong><br>
  <sub>Meu portfólio. Minha evolução. Agora com IA.</sub>
</p>

