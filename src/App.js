import React, {useEffect,useState} from 'react';
import Chat from './components/Chat';
import Sidebar from "./components/Sidebar";
import Pusher from 'pusher-js'
import axios from './Axios'

import "./App.css";

//Here we go--------------------------------------------


const App = () => {

    const [messages,setMessages] = useState([]);

    useEffect(() => {
        axios.get('/messages/sync')
        .then(res => {
            setMessages(res.data);
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

    console.log(messages);

    return (
        <div className="app">
            <div className="app-body">
                <Sidebar/>
                <Chat messages={messages}/>
            </div>
            
        </div>
    )
}

export default App
