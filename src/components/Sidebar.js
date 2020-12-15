import React from 'react';
import "../styles/Sidebar.css";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from "@material-ui/core"

const Sidebar = () => {
    return (
        <div className="sidebar">
            Sidebar
            <div className="sidebar-header">
                <div className="siebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
