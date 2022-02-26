const mongoose = require('mongoose');               //Importamos Mongoose

const Schema = mongoose.Schema;                     //Traemos Schema desde Mongoose

const mySchema = new Schema({                       //Creación de nuestro nuevo Schema, información que vamos a querer almacenar
    name: String,
});


const model = mongoose.model('User', mySchema);   //Creación del Modelo para la BDD para Message

module.exports = model;