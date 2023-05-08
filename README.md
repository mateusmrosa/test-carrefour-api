
Fluxo de Caixa 

APIRESTful (Representational State Transfer) de fluxo de caixa em Node.js baseada em uma arquitetura em camadas (layers architecture), onde cada camada é responsável por uma funcionalidade específica da aplicação. 
A pasta "models" contém as definições de dados usados na aplicação, enquanto a pasta "controllers" contém a lógica de negócios que manipula esses dados. A pasta "database" lida com a comunicação com o banco de dados. 
As pastas "helpers", "middleware", "entities" e "util" são utilitárias e auxiliares para as outras camadas. O arquivo "app.js" contém a configuração inicial do aplicativo, o arquivo "server.js" é responsável por iniciar o servidor e o arquivo "router.js" é responsável pelo mapeamento de rotas específicas para os respectivos controladores. 
Em resumo, é uma aplicação Node.js com uma arquitetura em camadas, com as camadas de modelo, controle e infraestrutura claramente definidas e pastas auxiliares para funções úteis e de ajuda. 


Desenho da arquitetura 


<div align="center">
 <img src="https://user-images.githubusercontent.com/41523047/236915690-6d2c2ec7-f072-4847-8e1a-112855037705.png" width="700px">
</div>

<br><br>

Arquitetura em Camadas <br>
Controllers <br>
Database <br>
Entities <br>
Helpers <br>
Middleware  <br>
Models <br>
Util <br>
 
Padrões de projeto utilizados <br>
Clean Code, Layers Architecture <br><br>

Tecnologias e bibliotecas utilizadas<br>
NodeJs v14.0<br>
MySql v5.7<br>
Docker<br>
Bcrypt<br>
Body Parser<br>
Dotenv<br>
Express<br>
Jsonwebtoken<br>
Moment<br>
<br><br>
Execução do projeto<br>
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
<br><br>
Teste<br>
Foram utilizados teste unitários com as bibliotecas jest e supertest<br>


 <div align="center">
  <img src="https://user-images.githubusercontent.com/41523047/236917074-1807f7cd-bf89-412c-9fc3-91a083b83f74.png" width="700px">
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/41523047/236917068-cf0f023f-43b4-4411-af91-96fac85855df.png" width="700px">
</div>



       

