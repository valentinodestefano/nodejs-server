const express = require('express');                                    //Import express
const router = express.Router();                                       //ESTO SE USA PARA DIFERENCIAR ENTRE METODOS DE PETICIONES (GET, POST, PUT... etc)
const bodyParser = require('body-parser');
const controller = require('./controller');                            //Importamos el controller

const response = require('../../network/response');                    //IMPORTAMOS LOS RESPONSE QUE CREAMOS

    //console.log(req.headers);                                        //Para ver la información del headers de la petición
    //console.log(req.query);                                          //ACCEDEMOS A LOS PARAMETROS POR QUERY
    //console.log(req.body);                                           //El req.body sería el body que enviamos en la petición


//GET
router.get('/get', function(req, res){
    controller.getMessage().then((messageList) => {                                  //Con esto accedemos a la función del controller "addMessage"
        response.success(req, res, messageList, 201);                                //Esto nos responderá exitosamente
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 400, 'error');                  //Esto nos responderá si hubo un error al introducir los datos
    });
})

//POST
router.post('/post', function(req, res){

    controller.addMessage(req.body.user, req.body.message).then((fullMessage) => {   //Con esto accedemos a la función del controller "addMessage"
        response.success(req, res, fullMessage, 201);                                //Esto nos responderá exitosamente
    }).catch(e => {
        response.error(req, res, 'Información invalida', 400, 'error');              //Esto nos responderá si hubo un error al introducir los datos
    });
})

module.exports = router;       //Exportamos el archivo