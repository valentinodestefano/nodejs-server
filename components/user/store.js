const model = require('./model');

function addUser(user){
    const myUser = new model(user);
    return myUser.save();
}

module.exports = {
    addUser,
}
