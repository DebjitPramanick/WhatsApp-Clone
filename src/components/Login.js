import React from 'react'
import {Button} from "@material-ui/core"
import {auth,provider} from "../Firebase"

import "../styles/Login.css"
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

const Login = () => {

    const [{},dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(res=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })
        })
        .catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                alt=""/>
                <div className="login-text">
                    Sign in to WhatsApp Clone
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
