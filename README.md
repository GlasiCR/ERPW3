# Descrição
O propósito da aplicação Gamification é oferecer um sistema às empresas pelo qual ela poderá oferecer bonificação aos seus funcionários pelo desempenho profissional. O administrador/RH atribui créditos aos funcionários de acordo com a sua performance e estes por sua vez poderão realizar resgates de produtos conforme o saldo de créditos que possui.

# Tecnologias
•	<b>Nestjs</b>: Utilizado como framework backend, trabalhando por debaixo dos panos com Nodejs e Express;<br>
•	<b>Postgresql</b>: Banco de dados relacional utilizado para armazenar informações do projeto;<br>
•	TypeORM: ORM utilizado para comunicação com banco de dados;<br>
•	Swagger: Utilizado para documentação de rotas e seus métodos atrelados juntamente com os respectivos payloads;<br>
•	Class-Validator: Usado para validações de payloads da aplicação;<br>
•	Jest: Biblioteca de teste para realizar os teste unitários e validação de serviços e rotas;<br>
•	Supertest: Biblioteca que fornece abstração de alto nível que falicita a realizações dos testes das requisições HTTP;<br>
•	Multer: biblioteca Node.js middleware para lidar com dados do tipo multipart/form-data, simplificando o processo de upload de arquivos.<br>

# Instalar projeto
Rodar comando:
`npm install`

# Inicializar projeto
###### Rodar no modo de desenvolvimento:
`npm run start:dev`

###### Modo de produção
`npm run build`<br>
`npm run start:prod`

# Documentação
Para acessar a documentação do projeto [clique aqui](https://backend-culture-code-production.up.railway.app/docs) 

# Diagrama de entidades e relacionamento
Para visualizar o diagrama da aplicação [clique aqui](https://github.com/arnia-linkcom-gamification/Backend-Culture-Code/assets/116851717/6b4bd259-786a-4705-858a-f065bbcf8fb1)	

# Testes
Para rodar os testes:<br>
`npm test`
