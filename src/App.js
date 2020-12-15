import React from 'react';
import Chat from './components/Chat';
import Sidebar from "./components/Sidebar";

import "./App.css";

const App = () => {
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
