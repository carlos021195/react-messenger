import React from 'react';
import './Message.css'

function Message({id, message, name}){
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(message.user === trimmedName){
        isSentByCurrentUser = true;
    }
    
    return(
        isSentByCurrentUser ? 
        (
            <div className = "messageContainer justifyEnd">
                <div className = "innerMessageContainer ">
                    <p id = {`${id}`} className = "sentText hide">{message.user + ':'}</p>
                    <div className = "messageBox backgroundBlue sentMessage">
                        <p className = "messageText colorWhite">{message.text}</p>
                    </div>
                </div>
            </div>
        ):
        (
            <div  onMouseOver = {() => {
                document.getElementById(`${id}`).classList.remove('hide');
                }} onMouseOut = {()=>{
                    document.getElementById(`${id}`).classList.add('hide');
                    }} className = "messageContainer justifyStart">
                <div className = "innerMessageContainer ">
                    <p id = {`${id}`} className = "sentText hide">{message.user + ':'}</p>
                    <div className = "messageBox backgroundLight receivedMessage">
                        <p className = "messageText colorDark">{message.text}</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Message;