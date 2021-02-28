# Professional Challenge :game_die:

Aplicação criada com o objetivo de categorizar reponsabilidade os profissinais envolvidos no processo da aplicação. 

Vamos criar então uma aplicação que nos permita consultar, criar e editar essas informações e manter essa relação entre o profissional e seu tipo.

### BackEnd

O backend foi desenvolvido utilizando a arquitetura rest com o nodejs como plataforma de desenvolvimento, consumindo um banco de dados postgresSQL.

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

#### Deploy

O deploy do frontend foi realizado utilizando o serviço de hospedagem heroku, para acessar basta clicar no link abaixo

[https://professional-challenge-web.herokuapp.com](https://professional-challenge-web.herokuapp.com)

#### Login

Para acessar a aplicação, foi disponibilizado um usuário de serviço previamente cadastrado. Para realizar a consulta no banco e gerar o token de acesso.

Usuário: ana@gmail.com
Senha: 12345
