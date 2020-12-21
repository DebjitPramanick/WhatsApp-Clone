import React from 'react';
import "../styles/Sidebar.css";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from "@material-ui/core"
import {SearchOutlined} from '@material-ui/icons';

import SidebarChat from "./SidebarChat"

import { useStateValue } from '../StateProvider';

const Sidebar = ({ rooms }) => {

    const [{user},dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={user?.photoURL} />
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
                    return <SidebarChat key={room._id} name={room.name} roomId={room._id} image={room.image}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar
