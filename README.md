Comandos:

```
npm init
```

```
npm i express - instala express
```

<!-- serve para usar sintaxe moderna do JS -->

```
npm i sucrase -D
```

```
npm i nodemon -D
```

configurar nodemon no scripts de package.json para rodar server.js

```
"scripts":{
    "dev": "nodemon src/server",
}
```

rodar nodemon:

```
npm run dev
```

Docker: tem como objetivo criar, testar e implementar aplicações
em um ambiente separado da máquina original, chamado de container.
Dessa forma, o desenvolvedor consegue empacotar o software de maneira
padronizada. Isso ocorre porque a plataforma disponibiliza funções básicas
para sua execução, como: código, bibliotecas, runtime e ferramentas
do sistema.

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

ORM : Object relational maping - sequelize

```
npm i sequelize
```

```
npm i --save-dev sequelize-cli
```

```
npm i pg pg-hstore
```

```
npx sequelize migration:create --name=create-users
```

```
npx sequelize db:migrate
```

```
npx sequelize db:migrate:undo - apaga todas informações do banco
```

```
npx sequelize db:migrate:undo:all - apaga todas tabelas
```

models: acessar as infos no banco de dados e retornar rest

- Opcional instalar extensão vscode thunder client para testes - para os comandos funcionarem é necessário estar rodando o servidor!!!
- Para rodar o servidor: npm run dev

```
npm i bcryptjs
```

JWT: metologia para autenticar usuários no padrão RESTful - Json Web Token

```
npm i jsonwebtoken
```

md5: gerar hashes

validação de dados

```
npm i yup
```

```
npm i multer
```

```
npx sequelize migration:create --name=create files
```

```
npm i date-fns
```

```
npm add mongoose
```

© 2021 GitHub, Inc.
"test" 
