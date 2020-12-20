import React from 'react'
import {Avatar} from "@material-ui/core"
import "../styles/SidebarChat.css"
import axios from '../Axios'

const SidebarChat = ({addNewchat,id,name}) => {


    const createChat = async(e) => {
        e.preventDefault();
        const roomName = prompt("Please enter toom name : ");
        if(roomName){
            await axios.post("/rooms/new",{
                name: roomName,
            });
        }
    }

    return !addNewchat ? (
        <div className="sidebarChat">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFngkPm5xR5UarZY4-au4OqdsLDNzEwMTzg&usqp=CAU"/>
            <div className="sidebarChat-info">
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat add-btn">
            <p>Add new room</p>
        </div>
    );
}

export default SidebarChat
