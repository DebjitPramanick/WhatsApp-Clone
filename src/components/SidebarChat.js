import React ,{useState,useEffect} from 'react'
import {Avatar} from "@material-ui/core"
import "../styles/SidebarChat.css"
import axios from '../Axios'
import {Link} from 'react-router-dom'

const SidebarChat = ({addNewchat,roomId,name}) => {


    const [seed,setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*500))
    },[])


    const createChat = async(e) => {
        e.preventDefault();
        const roomName = prompt("Please enter toom name : ");
        if(roomName){
            await axios.post("/rooms/new",{
                name: roomName,
                image: `https://avatars.dicebear.com/4.5/api/male/${seed}.svg`
            });
        }
    }

    return !addNewchat ? (
        <Link to={`/rooms/${roomId}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
                <div className="sidebarChat-info">
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat add-btn">
            <p>Add new room</p>
        </div>
    );
}

export default SidebarChat
