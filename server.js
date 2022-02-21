const express = require('express');                                 //Import express
const router = express.Router();                                    //ESTO SE USA PARA DIFERENCIAR ENTRE METODOS DE PETICIONES (GET, POST, PUT... etc)
const bodyParser = require('body-parser');

const response = require('./response');                             //IMPORTAMOS LOS RESPONSE QUE CREAMOS

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/messageGet', function(req, res){
    console.log(req.headers);                                        //Para ver la información del headers de la petición
    console.log(req.query);                                          //ACCEDEMOS A LOS PARAMETROS POR QUERY
    console.log(req.body);                                           //El req.body sería el body que enviamos en la petición
    res.header({
        "custom-header": "nuestro valor personalizado"               //Cabecera personalizada por nosotros para el cliente
    });

    if (req.query.error == 'ok'){                                    //error simulado
        response.error(req, res, 'personalized message error', 400, 'Simulated error'); //llamamos a nuestra respuesta y le enviamos los 4 parametros
    } else {
        response.success(req, res, 'personalized message', 201);     //llamamos a nuestra respuesta y le enviamos los 4 parametros
    }
    
})

router.post('/messagePost', function(req, res){
    res.send('hola desde post')
})

app.use('/app', express.static('public'));                            //Con esto traeremos archivos estaticos de nuestra carpeta Public según la ruta que especifiquemos en el navegador por ejemplo

app.listen(3000); //PORT localhost:3000
console.log('PORT 3000 active');