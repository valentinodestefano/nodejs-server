const express = require('express');                                 //Import express                   
const bodyParser = require('body-parser');


const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


router(app); 



app.use('/app', express.static('public'));                           //Con esto traeremos archivos estaticos de nuestra carpeta Public según la ruta que especifiquemos en el navegador por ejemplo

app.listen(3000); //PORT localhost:3000
console.log('PORT 3000 active');