const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessages() {
    return list;
}

module.exports = {
    add: addMessage,                    //Con esto renombramos addMessage -> add y con este nombre accederemos en otras clases
    list: getMessages,                  //Con esto renombramos getMessages -> list y con este nombre accederemos en otras clases
}