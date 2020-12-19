import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import React,{useState} from 'react'
import "../styles/Chat.css";
import axios from '../Axios'

const Chat = ({ messages }) => {

    const [input,setInput] = useState("");
    const sendMessage= async(e) => {
        e.preventDefault();

        await axios.post("/messages/new",{
            message: input,
            name: "DEMO APP",
            timeStamp : "Just now",
            received: false
        });

        setInput("");

    }
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>

                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at </p>
                </div>

                <div className="chat-head-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                {messages.map((message)=>{
                    return(
                        <p className={`chat-message ${message.received && "chat-reciever"}`}>
                            <span className="chat-name">{message.name}</span>
                            {message.message}
                            <span className="chat-timestamp">
                                {message.timeStamp}
                            </span>
                        </p>
                    )

                })}

            </div>

            <div className="chat-footer">
                <InsertEmoticonIcon/>

                <form>
                    <input 
                    placeholder="Type message .."
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}/>
                    <button
                    onClick={sendMessage}
                    type="submit">
                        <SendIcon/>
                    </button>
                </form>

                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
