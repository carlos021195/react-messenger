import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './components/InfoBar/InfoBar'
import Input from './components/Input/Input'
import Messages from './components/Messages/Messages'
import './Chat.css'

let socket;

function Chat({location}){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMesages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        
        socket.emit('join',{name: name, room: room}, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        } 
    }, [ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', (message) =>{
            setMesages([...messages,message])
        })
    }, [messages]);

    //function for sending messages
    function sendMessage(event){
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
            setMessage('');
        }
    }
    
    return(
        <div className = "outerContainer">
            <div className = "container">
                <InfoBar name = {name} room = {room}/>
                <Messages messages = {messages} name = {name}/>
                {console.log('messages')}
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage}/>
            </div>
        </div>
    )
}
export default Chat;