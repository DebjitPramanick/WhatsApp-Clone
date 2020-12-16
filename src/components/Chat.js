import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import React from 'react'
import "../styles/Chat.css";

const Chat = () => {
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
                <p className="chat-message">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat-message chat-reciever">
                    <span className="chat-name">Debjit</span>
                    This is message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
