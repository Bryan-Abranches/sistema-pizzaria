# 🍕 Sistema Pizzaria

![Sistema Pizzaria](https://your-image-url.com/banner.png)

## 📋 Sobre o Projeto

Sistema Pizzaria é uma aplicação web desenvolvida para restaurantes e pizzarias, permitindo a gestão eficiente de pedidos. Com ele, é possível cadastrar usuários e produtos, emitir e acompanhar pedidos, além de facilitar o gerenciamento de um estabelecimento.

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express, TypeScript
- **Banco de Dados:** Prisma ORM
- **Autenticação:** bcryptjs, JSON Web Token (JWT)
- **Upload de Imagens:** Multer
- **Segurança e Configuração:** Cors, Dotenv

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Passos para rodar o projeto

1. Clone este repositório:
    
    ```bash
    git clone https://github.com/Bryan-Abranches/sistema-pizzaria.git
    ```
    
2. Acesse a pasta do projeto:
    
    ```bash
    cd sistema-pizzaria
    ```
    
3. Instale as dependências:
    
    ```bash
    yarn install
    ```
    
4. Configure as variáveis de ambiente:
    
    Crie um arquivo `.env` na raiz do projeto e adicione suas configurações.
    
5. Execute as migrações do banco de dados:
    
    ```bash
    npx prisma migrate dev
    ```
    
6. Inicie o servidor de desenvolvimento:
    
    ```bash
    yarn dev
    ```
    
7. Acesse a aplicação no navegador:
    
    ```
    http://localhost:3000
    ```

## 🔧 Funcionalidades

- ✅ Cadastro e login de usuários
- ✅ Autenticação de rotas
- ✅ Criação e gerenciamento de pedidos
- ✅ Adicionar e remover itens de pedidos
- ✅ Listagem e detalhamento de pedidos
- ✅ Conclusão de pedidos

## 🛠️ Melhorias Futuras

- [ ] Transformar o sistema em uma aplicação de delivery
- [ ] Implementar rastreamento de pedidos em tempo real
- [ ] Integração com APIs de pagamento online
- [ ] Criar um painel para entregadores

## 🖼️ Demonstração

(Em breve...)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/Bryan-Abranches/sistema-pizzaria/blob/main/LICENSE) para mais detalhes.

## 📌 Contato

**Bryan Abranches**  
📌 [GitHub](https://github.com/Bryan-Abranches/sistema-pizzaria)  
📌 [LinkedIn](https://www.linkedin.com/in/bryan-abranches/)

