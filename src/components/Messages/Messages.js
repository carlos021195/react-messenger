import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message'
import './Messages.css'


function Messages({messages, name}){
    return(
        <div className = "messages-container">
            <ScrollToBottom>
                {messages.map((message, i) => <div key = {i}><Message id = {i} message = {message} name = {name}/></div>)}
            </ScrollToBottom>
        </div>
    )
}

export default Messages;