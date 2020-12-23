import { Button } from '@material-ui/core'
import React from 'react'
import "../styles/Welcome.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="wc-container">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHvP34jkf8Mqw/profile-displayphoto-shrink_200_200/0/1601032304043?e=1614211200&v=beta&t=q13RFggXwpMDilABLHxDVs5IdZhM8ijWqNlZpl9wFug"
                alt=""/>
                <h2>Welcome to WhatsApp Clone</h2>
                <p>Created with MERN stack</p>
                <p> By Debjit Pramanick</p>
                <ul>
                    <li>Google Sign-in</li>
                    <li>Create room</li>
                    <li>Search rooms</li>
                    <li>Chat with people</li>
                </ul>

            </div>
        </div>
    )
}

export default Welcome
