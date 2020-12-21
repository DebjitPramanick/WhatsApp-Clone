import React ,{useState,useEffect} from 'react'
import {Avatar} from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "../styles/SidebarChat.css"
import axios from '../Axios'
import {Link} from 'react-router-dom'

const SidebarChat = ({addNewchat,roomId,name,image}) => {

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
    }

    return !addNewchat ? (
        <Link to={`/rooms/${roomId}`}>
            <div className="sidebarChat">
                <Avatar src={image}/>
                <div className="sidebarChat-info">
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createRoom} className="sidebarChat add-btn">
            <AddCircleIcon/>
        </div>
    );
}

export default SidebarChat
