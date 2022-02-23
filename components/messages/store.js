const db = require('mongoose');        //traemos la BDD (mongoose)
const model = require('./model');

const url =
  'mongodb://valendesdel:Valentina_25@cluster0-shard-00-00.hqhas.mongodb.net:27017,cluster0-shard-00-01.hqhas.mongodb.net:27017,cluster0-shard-00-02.hqhas.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-12pysj-shard-0&authSource=admin&retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));



function addMessage(message) {
    const myMessage = new model(message);                  //Creamos un model y pasamos de parametro message para nuestro Schema
    myMessage.save();                                      //Guardamos en la base de datos
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null){
      filter = {                                                 //Con esto mongodb entiende que me debe traer los usuarios que sean iguales a filterUser
        user: new RegExp(filterUser, "i")                        //Mongo puede utilizar Regular Expressions para realizar búsquedas y en estas es posible indicarle que busque “case-insensitive”. Esto se logra con el flag “i” que vemos en el código.
      };    
    }
    const messages = await model.find(filter);                   //En el model llamamos al metodo .find()
    return messages;
}

async function updateText(id, message){
    const foundMessage = await model.findById(id);         //Encontramos uno según el id
    foundMessage.message = message;                        //Sustituimos el message de la BDD por el message que recibimos
    const newMessage = await foundMessage.save();          //Guardamos en la base de datos
    return newMessage;
}

async function remove(id) {
  return model.findByIdAndRemove(id);         //Encontramos el message por el id que nos dieron y removemos el mensaje
}

module.exports = {
    add: addMessage,                    //Con esto renombramos addMessage -> add y con este nombre accederemos en otras clases
    list: getMessages,                  //Con esto renombramos getMessages -> list y con este nombre accederemos en otras clases
    updateText: updateText,
    remove,                  
}