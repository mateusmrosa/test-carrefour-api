# test-carrefour-api
teste para contratação do banco carrefour

Execução do projeto
instalar o nodejs v14
Navegar até o diretório \backend do projeto
Executar o comando: "npm insall" - para baixar a pasta "node_modules"
Executar o comando: "npm run dev"
Ter o docker instalado para rodar o banco de dados, ou rodar o mysql diretamente ou por qualquer outra ferramenta
Acessar primeiramente a rota http://localhost:3000/authentication 
Enviar no body um json com username:”adm” e passaword: 123
Vai gerar um "token" com as informações do usuário
Para acessar as demais rotas http://localhost:3000/transaction e http://localhost:3000/balanceDaily 
É necessário informar esse token gerado, e colocá-lo no Headers, x-access-token e também deixa o Content-Type com o valor application/json
