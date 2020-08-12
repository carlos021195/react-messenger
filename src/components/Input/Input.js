import React from 'react'
import './Input.css'



function Input({message,setMessage,sendMessage}){
    return(
        <div className = "inputBar">
        <input 
        className = "input"
        type = "text"
        placeholder = "Type a message..."
        value = {message} 
        onChange = {(event) => setMessage(event.target.value)} 
        onKeyPress = {event => event.key ==='Enter' ? sendMessage(event) : null}/>
        <button className = "sendButton" onClick = {event => sendMessage(event)}>Send</button>
        </div>
    )
}

export default Input;