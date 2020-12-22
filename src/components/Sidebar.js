import React, {useState,useEffect} from 'react';
import "../styles/Sidebar.css";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from "@material-ui/core"
import {SearchOutlined} from '@material-ui/icons';

import Pusher from 'pusher-js'
import axios from '../Axios'

import SidebarChat from "./SidebarChat"

import { useStateValue } from '../StateProvider';

const Sidebar = () => {

    const [rooms,setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();



    useEffect(() => {
        const pusher2 = new Pusher('77bfb37eb1ed3c1f5728', {
            cluster: 'eu'
        });
        const channel2 = pusher2.subscribe('rooms');
        
        channel2.bind('inserted', (newRoom) => {
            setRooms([...rooms,newRoom])
        });

        return ()=>{
            channel2.unbind_all();
            channel2.unsubscribe();
        };

    }, [rooms]);


    useEffect(() => {
        axios.get('/rooms/sync')
        .then(res => {
            setRooms(res.data);
        })
    }, [])



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
                    return <SidebarChat key={room._id} name={room.name} id={room._id} image={room.image}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar
