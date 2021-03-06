
const model = require('./model');


function addMessage(message) {
    const myMessage = new model(message);                  //Creamos un model y pasamos de parametro message para nuestro Schema
    myMessage.save();                                      //Guardamos en la base de datos
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) =>{
    let filter = {};
    if (filterUser !== null){
      filter = {                                                 //Con esto mongodb entiende que me debe traer los usuarios que sean iguales a filterUser
        user: new RegExp(filterUser, "i")                        //Mongo puede utilizar Regular Expressions para realizar búsquedas y en estas es posible indicarle que busque “case-insensitive”. Esto se logra con el flag “i” que vemos en el código.
      };    
    }
    const messages = model.find(filter)                         //En el model llamamos al metodo .find()
    .populate('user').exec((error, populated) => {            
      if (error) {
        reject(error);
        return false;
      }
      resolve(populated);
    });     
  })
    
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