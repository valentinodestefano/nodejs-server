const express = require("express");
const message = require('../components/messages/network'); //Con esto todas las llamadas a Message las gestionas el componente de Message
const user = require('../components/user/network');
const chat = require('../components/chat/network');


const routes = function(server) {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes; //Exportamos el archivo