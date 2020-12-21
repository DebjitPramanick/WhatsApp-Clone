import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "../styles/Chat.css";
import axios from '../Axios'
import { useStateValue } from '../StateProvider'

const Chat = ({ messages }) => {

    const [input,setInput] = useState("");
    const { roomId } = useParams();
    const [roomname,setRoomname] = useState("");
    const [{user},dipacth] = useStateValue();


    useEffect(()=>{
        axios.get(`/rooms/${roomId}`)
        .then(res => {
            setRoomname(res.data);
        })
        
    },[roomId])

    const sendMessage= async(e) => {
        e.preventDefault();

        await axios.post("/messages/new",{
            roomID: roomId,
            message: input,
            name: user.displayName,
            timeStamp : "Just now",
            received: false
        });

        setInput("");

    }
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={roomname.image}/>

                <div className="chat-header-info">
                    <h3>{roomname.name}</h3>
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
                        <div>
                            {(message.roomID === roomId)?(
                                <p className={`chat-message ${message.name === user.displayName && "chat-reciever"}`}>
                                    <p className="chat-name">{message.name}</p>
                                    {message.message}
                                    <span className="chat-timestamp">
                                        {message.timeStamp}
                                    </span>
                                </p>
                            ) : 
                                <h1></h1>
                            }

                        </div>
                        
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
