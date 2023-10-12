# API localhost

API desenvolvida em node.js que utiliza o MongoDB e roda no servidor local (LocalHost).

## Conteúdo

1. [Sobre](#sobre)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Como Usar](#como-usar)
5. [Contribuição](#contribuição)
6. [Licença](#licença)

## Sobre

Esta API foi desenvolvida para gerenciar tarefas, permitindo aos usuários realizar as seguintes operações:

- **Listar Tarefas**: Recupere a lista de todas as tarefas armazenadas no banco de dados.

- **Criar Tarefa**: Adicione uma nova tarefa ao sistema, fornecendo um título e uma descrição.

A API foi construída com o framework Express.js e usa o MongoDB como banco de dados para armazenar informações sobre as tarefas. O servidor é configurado para rodar localmente no endereço `http://localhost:3000`, tornando-a ideal para desenvolvimento e teste.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB

## Instalação

Para começar a usar esta API, siga os seguintes passos:

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/Daviddust95/API-localhost.git
   cd minha-api-de-tarefas

  *** Instalação No Linux ***


2.  ```bash
    sudo apt-get install nodejs
    
3.  ```bash
    sudo apt install npm
4.  ```bash
    nodejs -v
5.  ```bash
    npm -v

*** Instalação em Windows ***
Logo após selecionar uma versão (LTS ou Current), será iniciado o download do instalador para Windows. Assim como é comum nos instaladores do Windows, basta seguir clicando nos botões Next até chegar ao final da instalação.

Assim que a instalação for finalizada, precisaremos testar se tudo está certo. Então, inicie o seu terminal. Pressione Tecla Windows + R, com a finalidade de abrir o programa Executar. Escreva powershell e aperte a tecla Enter.

Em seguida, no terminal digite node -v e aperte a tecla Enter. Caso seja exibida a versão do Node, sua instalação foi feita com sucesso.

Acesse o site do Node, https://nodejs.org/en/. Assim que entrar no site, você verá dois botões, indicando duas versões para baixar (LTS e Current).
