import React from "react";
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
 
const NavBar = () => {
    const navButton = {
        color: 'white'
    }
    return(
        <div>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    My Music App
                </Typography>
                <Typography style={{ flexGrow: "1" }} >
                <ul className="nav-list">
                    <li className="nav-list-item">
                        Logout
                    </li>
                </ul>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
 
 export default NavBar;