const express = require('express');                                 //Import express                   
const bodyParser = require('body-parser');

const db = require('./db');                                         //Importamos db

const router = require('./network/routes');

db('mongodb://valendesdel:Valentina_25@cluster0-shard-00-00.hqhas.mongodb.net:27017,cluster0-shard-00-01.hqhas.mongodb.net:27017,cluster0-shard-00-02.hqhas.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-12pysj-shard-0&authSource=admin&retryWrites=true&w=majority');
//invocamos db con el url de la BDD


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


router(app); 



app.use('/app', express.static('public'));                           //Con esto traeremos archivos estaticos de nuestra carpeta Public según la ruta que especifiquemos en el navegador por ejemplo

app.listen(3000); //PORT localhost:3000
console.log('PORT 3000 active');