const users = [];

function addUser({id,name,room}){
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.name == name && user.room == room);

    if(existingUser){
        return {error: 'User already exists'}
    }
    const user = {id, name, room}
    users.push(user);
    return{ user}
}

function removeUser(id){
    const userIndex = users.findIndex(user => user.id == id);
    if(userIndex>-1){
        return users.splice(userIndex,1);
    }
}

function getUser(id){
    return users.find(user => user.id == id);

}   

function getUsersInRoom(room){
    return users.filter(user => user.room == room);
}

module.exports = {addUser, removeUser, getUser, getUsersInRoom };