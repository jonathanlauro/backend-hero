const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./router');
//Config
app.use(cors())
  app.use(express.json());
//Routes
  app.use(routes);
//Other
  const Porta  = 3333;
  app.listen(Porta,()=>{
    console.log(`Servidor rodando na porta: http://localhost:${Porta}`);
  });