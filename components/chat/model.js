const mongoose = require('mongoose');               //Importamos Mongoose

const Schema = mongoose.Schema;                     //Traemos Schema desde Mongoose

const mySchema = new Schema({                       //Creación de nuestro nuevo Schema, información que vamos a querer almacenar
    users: [{
        type: Schema.ObjectId,
        ref: 'user'
    }]
});


const model = mongoose.model('Chat', mySchema);   //Creación del Modelo para la BDD para Message

module.exports = model;