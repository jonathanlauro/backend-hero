const express = require('express');
const app = express();
const routes = require('./router');
//Config
app.use(express.json());
//Sequelize

//Rotas
app.use(routes);

//Other
  const Porta  = 3333;
  app.listen(Porta,()=>{
    console.log(`Servidor rodando na porta: http://localhost:${Porta}`);
  });