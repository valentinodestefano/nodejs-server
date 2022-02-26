const express = require('express');                                    //Import express
const router = express.Router();                                       //ESTO SE USA PARA DIFERENCIAR ENTRE METODOS DE PETICIONES (GET, POST, PUT... etc)
const controller = require('./controller');                            //Importamos el controller

const response = require('../../network/response');                    //IMPORTAMOS LOS RESPONSE QUE CREAMOS


router.post('/post', function(req, res) {
    controller.addUser(req.body.name).then(data => {
        response.success(req, res, data, 201);
    }).catch(err => {
        response.error(req, res, 'Internal Error', 500, err);
    });
})


module.exports = router;