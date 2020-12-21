import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch,
Route} from 'react-router-dom'
import Chat from './components/Chat';
import Sidebar from "./components/Sidebar";
import Pusher from 'pusher-js'
import axios from './Axios'

import "./App.css";
import Login from './components/Login';
import { useStateValue } from './StateProvider';

//Here we go--------------------------------------------


const App = () => {

    const [{user},dispatch] = useStateValue();

    const [messages,setMessages] = useState([]);
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        axios.get('/messages/sync')
        .then(res => {
            setMessages(res.data);
        })

        axios.get('/rooms/sync')
        .then(res => {
            setRooms(res.data);
        })
    }, [])

    useEffect(() => {
        const pusher = new Pusher('77bfb37eb1ed3c1f5728', {
            cluster: 'eu'
        });
        const channel = pusher.subscribe('messages');
        
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages,newMessage])
        });

        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
        };

    }, [messages]);


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


    return (
        <div className="app">
            {!user ? (
                <Login/>
            ): (
                <div className="app-body">

                    <Router>
                        <Sidebar rooms={rooms}/>
                        <Switch>
                            {rooms.map((room)=>{
                                return(
                                    <Route path={`rooms/${room._id}`}>
                                        <Chat messages={messages}/>
                                    </Route>
                                )
                            })}
                            
                            <Route path="/">
                                <h1>Welome</h1>
                            </Route>
                        </Switch>
                    </Router>
                
                </div>
            )}
            
        </div>
    )
}

export default App
