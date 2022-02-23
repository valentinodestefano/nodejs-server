const store = require('./store');


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

function getMessage(filterUser) {                   //Función getMessage
    return new Promise((resolve, reject) => {       
        resolve(store.list(filterUser));            //Se envía a Store, con el usuario a filtrar si es el caso
    })
}

function updateMessage(id, message) {               //Función updateMessage
    return new Promise(async (resolve, reject) => {
        if (!id || !message){                                         //si alguno de los dos parametros viene vacio rechazamos
            reject('invalid data');
            return false;
        }

       const result = await store.updateText(id, message);            //enviamos nuestra información al store para que haga la modificación en la BDD

       resolve(result);
    })
}

function deleteMessage(id) {                        ///Función deleteMessage
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('ID invalido');                  //Si el ID viene vacio rechazamos
            return false;
        }
        store.remove(id).then(() => {               //Si tenemos el id, llamamos a la función remove en store y le enviamos el id
            resolve();
        }).catch(e => {
            reject(e);
        });
    });
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
};