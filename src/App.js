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

    useEffect(() => {
        const pusher = new Pusher('77bfb37eb1ed3c1f5728', {
            cluster: 'eu'
        });
        const channel = pusher.subscribe('messages');
        
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages,newMessage]);
            
        });
        
        console.log(messages);

        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
        };

    }, [messages]);


    useEffect(() => {
        axios.get('/messages/sync')
        .then(res => {
            setMessages(res.data);
        })
    }, [])


    return (
        <div className="app">
            {!user ? (
                <Login/>
            ): (
                <div className="app-body">

                    <Router>
                        <Sidebar messages={messages}/>
                        <Switch>
                            <Route path="/rooms/:ROOMID">
                                <Chat messages={messages}/>
                            </Route>
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
