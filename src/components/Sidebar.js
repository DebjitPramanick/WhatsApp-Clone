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
import { Types } from 'mongoose';

const Sidebar = (messages) => {

    const [rooms,setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();
    const [search,setSearch] = React.useState("");


    const filterRooms = rooms.filter((room)=>{
        return room.name.toLowerCase().includes(search.toLowerCase());
    });


    useEffect(() => {
        axios.get('/rooms/sync')
        .then(res => {
            setRooms(res.data);
        })
    }, [])


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



    const [seed,setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*500))
    },[])


    const createRoom = async(e) => {
        e.preventDefault();

        const roomName = prompt("Please enter toom name : ");

        
        if(roomName){
            await axios.post("/rooms/new",{
                name: roomName,
                image: `https://avatars.dicebear.com/4.5/api/male/${seed}.svg`
            });
        }

        window.location.reload(true);
    }



    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={user?.photoURL} className="profilepic" />
                <div className="siebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton onClick={createRoom}>
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
                    <input placeholder="Search chat or start new" type="text" onChange={e => setSearch(e.target.value)}/>
                </div>
            </div>


            <div className="sidebar-chats">
                {filterRooms.map((room)=>{
                    return <SidebarChat key={room._id} name={room.name} id={room._id} image={room.image} allMessages={messages}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar
