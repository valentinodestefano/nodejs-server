const db = require('mongoose');        //traemos la BDD (mongoose)


db.Promise = global.Promise;

async function connectDB(url) {                  //Función para conectar a la base de datos
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));

}

module.exports = connectDB;