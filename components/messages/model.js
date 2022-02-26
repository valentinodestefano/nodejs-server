const mongoose = require('mongoose');               //Importamos Mongoose

const Schema = mongoose.Schema;                     //Traemos Schema desde Mongoose

const mySchema = new Schema({                       //Creación de nuestro nuevo Schema, información que vamos a querer almacenar
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});


const model = mongoose.model('Message', mySchema);   //Creación del Modelo para la BDD para Message

module.exports = model;
