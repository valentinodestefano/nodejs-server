const store = require('./store');
const stroe = require('./store');                   //Importamos el store

function addMessage(user, message) {                //Función addMessage
    return new Promise((resolve, reject) =>{        //Nueva promesa
        if (!user || !message){
            return reject('Datos incorrectos');
        }

        const fullMessage = {                       //Const FullMessage que tendrá los datos
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMessage);                     //Llamamos a Store y agregamos el mensaje

        resolve(fullMessage);                       //Se resuelve la promesa
    })

    
}

function getMessage() {
    return new Promise((resolve, reject) => {       //Función getMessage
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessage,
};