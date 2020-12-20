import React from 'react';
import "../styles/Sidebar.css";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from "@material-ui/core"
import {SearchOutlined} from '@material-ui/icons';

import SidebarChat from "./SidebarChat"

const Sidebar = ({ rooms }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src="https://avatars3.githubusercontent.com/u/73888326?s=460&u=c504a6ccdb0b157239ebd70efa8e6779f6a8d5ca&v=4" />
                <div className="siebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar-search">
                <div className="sidebar-searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search chat or start new" type="text"></input>
                </div>
            </div>


            <div className="sidebar-chats">
                <SidebarChat addNewchat/>
                {rooms.map((room)=>{
                    return <SidebarChat key={room.id} name={room.name} roomId={room._id}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar
