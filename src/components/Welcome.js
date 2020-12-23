import { Button } from '@material-ui/core'
import React from 'react'
import "../styles/Login.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="wc-container">
                <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                alt=""/>
                <div className="login-text">
                    Sign in to WhatsApp Clone
                </div>

            </div>
        </div>
    )
}

export default Welcome
