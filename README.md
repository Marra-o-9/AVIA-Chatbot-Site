# AVIA-Chatbot-Site

AVIA-Chatbot-Site é uma aplicação web para AVIA (Assistente Virtual de Inteligência Artificial), um assistente virtual projetado para facilitar a integração de novos funcionários nas empresas.

## Índice

- [AVIA-Chatbot-Site](#avia-chatbot-site)
  - [Índice](#índice)
  - [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Configuração e Instalação](#configuração-e-instalação)
  - [Executando a Aplicação](#executando-a-aplicação)
  - [Endpoints da API](#endpoints-da-api)
  - [Banco de Dados](#banco-de-dados)
  - [Personalização](#personalização)
  - [Contribuindo](#contribuindo)
  - [Licença](#licença)

## Visão Geral do Projeto

AVIA-Chatbot-Site é uma aplicação web baseada em React com um backend em Node.js. Ela fornece informações sobre os serviços da AVIA, permite o registro de usuários e oferece funcionalidades de suporte. O site é projetado com um tema de modo escuro e utiliza Material-UI para estilização.

## Funcionalidades

- Página inicial com uma visão geral dos serviços da AVIA
- Página de funções detalhando as capacidades da AVIA
- Página de serviços com diferentes níveis de serviço
- Funcionalidade de registro de usuários
- Página de suporte com formulário de contato e seção de FAQ
- Design responsivo com modo escuro

## Tecnologias Utilizadas

- Frontend:
  - React
  - Material-UI
  - React Router
- Backend:
  - Node.js
  - Express.js
  - SQLite (com Sequelize ORM)
- Outros:
  - Axios para chamadas de API

## Estrutura do Projeto

```
AVIA-Chatbot-Site/
│
├── public/
│   └── (arquivos estáticos)
│
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   └── Header.js
│   │
│   ├── pages/
│   │   ├── Functions.js
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Signup.js
│   │   └── Support.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── theme.js
│
├── .gitignore
├── database.sqlite
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Configuração e Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/AVIA-Chatbot-Site.git
   cd AVIA-Chatbot-Site
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Crie um arquivo `.env` no diretório raiz e adicione as variáveis de ambiente necessárias.

## Executando a Aplicação

1. Inicie o servidor backend:
   ```
   node server.js
   ```

2. Em um novo terminal, inicie o servidor de desenvolvimento React:
   ```
   npm start
   ```

3. Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Endpoints da API

- POST `/api/signup`: Registro de usuário
- POST `/api/support`: Envio de mensagens de suporte

## Banco de Dados

O projeto utiliza SQLite como banco de dados. O arquivo do banco de dados (`database.sqlite`) é criado automaticamente quando você executa o servidor pela primeira vez. Ele contém duas tabelas:

- `Users`: Armazena informações de registro de usuários
- `Supports`: Armazena mensagens de suporte

## Personalização

- Para modificar o tema, edite o arquivo `src/theme.js`.
- Para adicionar ou modificar páginas, crie ou edite arquivos no diretório `src/pages` e atualize o roteamento em `App.js`.
- Para alterar os endpoints da API ou adicionar novos, modifique o arquivo `server.js`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT.