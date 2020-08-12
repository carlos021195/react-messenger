import React from 'react';
import './App.css';

function MessageForm(props){
    return(
       <div>
           <input id = "inputField" value = {props.input} onChange = {props.handleChange} className = "message-box"/>
           <button onClick = {props.newMessage}>Send</button>
       </div>
    )
}

export default MessageForm;