import React  from 'react'
import {Avatar} from "@material-ui/core"
import "../styles/SidebarChat.css"
import {Link} from 'react-router-dom'

const SidebarChat = ({id,name,image}) => {


    return(

        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={image}/>
                <div className="sidebarChat-info">
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
        
    );
}

export default SidebarChat
