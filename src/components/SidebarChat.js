import React , {useEffect,useState} from 'react'
import {Avatar} from "@material-ui/core"
import "../styles/SidebarChat.css"
import {Link} from 'react-router-dom'
import axios from '../Axios'

const SidebarChat = ({id,name,image}) => {

    const [messages,setMessages] = useState([]);

     useEffect(() => {
        axios.get('/messages/sync')
        .then(res => {
            setMessages(res.data);
        })
    }, [])

    return(

        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={image}/>
                <div className="sidebarChat-info">
                    <h2>{name}</h2>
                    <p>{messages[messages.length - 1].message}</p>
                </div>
            </div>
        </Link>
        
    );
}

export default SidebarChat
