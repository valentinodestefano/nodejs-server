const express = require("express");
const message = require('../components/messages/network'); //Con esto todas las llamadas a Message las gestionas el componente de Message

const routes = function(server) {
    server.use('/message', message);
}

module.exports = routes; //Exportamos el archivo