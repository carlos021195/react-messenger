import React from 'react';
import './App.css';
import Message from './Message'
import MessageForm from './MessageForm';

function MessageList(props){
    return(
        <div>
            {props.messages.map(input=>{
               return <Message message = {input}/>
            })}
            
        </div>
    )
}
export default MessageList;