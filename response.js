//ARCHIVO PARA LAS RESPONSE DE LAS PETICIONES, PARA TENER RESPUESTAS COHERENTES A CADA UNA DE ELLAS

exports.success = function (req, res, message, status) {
//con el res.send ya estariamos enviando la petición, ya sea al cliente o al servidor
//con el status podemos responder el status de la petición y en el .send añadir un poco más de información para la respuesta
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status, details) {
    console.log('[RESPONSE ERROR] ' + details); //Con esto podemos responder los detalles del error en un log para nosotros, no reflejarlo al usuario
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}