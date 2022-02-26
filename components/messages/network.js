const express = require('express');                                    //Import express
const router = express.Router();                                       //ESTO SE USA PARA DIFERENCIAR ENTRE METODOS DE PETICIONES (GET, POST, PUT... etc)
const multer = require('multer');
const path = require('path');
const controller = require('./controller');                            //Importamos el controller

const response = require('../../network/response');                    //IMPORTAMOS LOS RESPONSE QUE CREAMOS

    //console.log(req.headers);                                        //Para ver la información del headers de la petición
    //console.log(req.query);                                          //ACCEDEMOS A LOS PARAMETROS POR QUERY
    //console.log(req.body);                                           //El req.body sería el body que enviamos en la petición


    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
      })
    
    const upload = multer({
        storage: storage
    });                           //instancia del Multer para subir archivos

//GET
router.get('/get', function(req, res){
    const filterUser = req.query.user || null;                                       //Acá chequeamos si se está enviando parametros de la Query para filtrar y si no es así se deja null          
    controller.getMessage(filterUser).then((messageList) => {                        //Con esto accedemos a la función del controller "addMessage" y se envía el usuario a filtrar si es el caso
        response.success(req, res, messageList, 201);                                //Esto nos responderá exitosamente
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 400, 'error');                  //Esto nos responderá si hubo un error al introducir los datos
    });
})

//POST
router.post('/post', upload.single('file'), function(req, res){

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file).then((fullMessage) => {   //Con esto accedemos a la función del controller "addMessage"
        response.success(req, res, fullMessage, 201);                                //Esto nos responderá exitosamente
    }).catch(e => {
        response.error(req, res, 'Información invalida', 400, 'error');              //Esto nos responderá si hubo un error al introducir los datos
    });
})

//PATCH
router.patch('/editById', function (req, res){                              
    controller.updateMessage(req.body.id, req.body.message).then((data) => {      //enviamos el id y el message que tenemos del body al controller
        response.success(req, res, data, 200);
    }).catch(e => {
        response.error(req, res, 'Error Interno', 500, e);
    });
})

//DELETE
router.delete('/deleteMessage', function (req, res) {
    controller.deleteMessage(req.body.id).then(() =>{                   //en vez de pedirlo por parametro de query lo pedimos por body el id del message que se desea eliminar y lo enviamos al controller
        response.success(req, res, `Usuario ${req.body.id} eliminado`, 200);    
    }).catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    })
})

module.exports = router;       //Exportamos el archivo