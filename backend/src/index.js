const express = require('express');
const mongoose =  require('mongoose');
const cors = require ('cors');
const http = require ('http');
const routes = require('./routes');
const {setupWebsocket} = require ('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-l1hsk.mongodb.net/week10?retryWrites=true&w=majority' , {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//métodos http: GET, POST, PUT, DELETE

//Tipos de parametros:

//query params: request.query(filtros,ordenação,paginação..)
//route params: request.params(Identificar um recurso na alteração ou remoção)
//body: request.body(Dados para alteração ou criação de um registro)

server.listen(3333);