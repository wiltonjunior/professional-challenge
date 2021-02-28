# Professional Challenge :game_die:

Aplicação criada com o objetivo de categorizar reponsabilidade os profissinais envolvidos no processo da aplicação. 

Vamos criar então uma aplicação que nos permita consultar, criar e editar essas informações e manter essa relação entre o profissional e seu tipo.

### BackEnd

O backend foi desenvolvido utilizando a arquitetura rest com o nodejs como plataforma de desenvolvimento, consumindo um banco de dados postgresSQL.

#### Iniciando o projeto

Para inicar o projeto é necessário startar um postgressSQL, caso não tenha em sua máquina local, basta execultar o docker-compose disponível na raiz do projeto backend.

```sh
docker-compose up -b
```

Dessa forma o postgressSQL ira iniciar em sua máquina, funcionando na porta 5432, juntamente com um pgadmin funcionando na porta 80 para a visualização e tratamento desses dados.

Após essa configuração, é necessário criar o banco de dados, para isso, utilize o seguinte comando.

```sh
yarn db:create
```

Para criar as tabelas

```sh
yarn db:migrate
```

Para popular as tabelas com algumas informações

```sh
yarn db:populate
```

Para inicar a aplicação é necessário: 

```sh
yarn start
```

#### Deploy

O deploy do backend foi realizado utilizando o serviço de hospedagem heroku, para acessar basta clicar no link abaixo

[https://professional-challenge-api.herokuapp.com/api/v1](https://professional-challenge-api.herokuapp.com/api/v1)

#### Documentação
O backend foi documentado utilizando a biblioteca swagger, justamente com todos os endpoints. Para acessar a documentação basta clicar no [link](https://professional-challenge-api.herokuapp.com/doc).

Link local
http://locahost:4000/doc

#### Modelo de dados :memo:

##### Tipo de profissional
```js
{
  "id": xxx,                  // ID 
  "descricao": "test",        // descricao do tipo *Obrigatório
  "telefone": "(xx) xxxxx",   // numero telefone
  "situacao": "true",         // situacao do cadastro *Obrigatório
  "updatedAt": "",            // data e hora ultima atualizacao *Obrigatório
  "createdAt": ""             // data e hora de cadastro *Obrigatório
}
```

##### Profissional
```js
{
    "id": xxx,                   // ID
    "nome": "teste",             // Nome do profisisonal *Obrigatório
    "telefone": "(xx) xxxx",     // Telefone
    "email": "a@a.com",          // Endereço de e-mail do profissional
    "tipoDeProfissional": xxx,   // Vinculo com o tipo de profissional *Obrigatório
    "situacao": true,            // Situação do cadastro *Obrigatório
    "updatedAt": "",             // Data e hora da última atualização *Obrigatório
    "createdAt": ""              // Data e hora da de cadastro *Obrigatório
}
```

### FrontEnd

O frontend da aplicação foi desenvolvido utilizando o framework ReactJs, justamente com o Material UI para auxiliar na construção da interface.

#### Iniciando o projeto

Para inicar o projeto é necessário realizar alguns comandos, são eles:

```sh
yarn intall
yarn start
```

Cado seja necessário realizar a mudança do endpoint de consulta, basta modificar a variável de ambiente chamada REACT_APP_API_URL, ela se encontra disponivel no .env da aplicação.

#### Deploy

O deploy do frontend foi realizado utilizando o serviço de hospedagem heroku, para acessar basta clicar no link abaixo

[https://professional-challenge-web.herokuapp.com](https://professional-challenge-web.herokuapp.com)

#### Login

Para acessar a aplicação, foi disponibilizado um usuário de serviço previamente cadastrado. Para realizar a consulta no banco e gerar o token de acesso.

Usuário: ana@gmail.com
Senha: 12345
