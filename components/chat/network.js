const express = require('express');                                    //Import express
const router = express.Router();                                       //ESTO SE USA PARA DIFERENCIAR ENTRE METODOS DE PETICIONES (GET, POST, PUT... etc)
const controller = require('./controller');                            //Importamos el controller

const response = require('../../network/response');                    //IMPORTAMOS LOS RESPONSE QUE CREAMOS

router.post('/post', function(req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', function(req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;