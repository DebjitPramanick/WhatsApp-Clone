import React, {useEffect} from 'react';
import Chat from './components/Chat';
import Sidebar from "./components/Sidebar";
import Pusher from 'pusher-js'

import "./App.css";

//Here we go--------------------------------------------


const App = () => {

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        const pusher = new Pusher('77bfb37eb1ed3c1f5728', {
            cluster: 'eu'
        });
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
        });
    }, [])

    return (
        <div className="app">
            <div className="app-body">
                <Sidebar/>
                <Chat/>
            </div>
            
        </div>
    )
}

export default App
