import React from "react";
import Button from '@material-ui/core/Button';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core'
 
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    My Music App
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
 
 export default NavBar;