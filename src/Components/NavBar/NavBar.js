import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title={<img src="https://unsplash.it/40/40" alt="Logo" />}
                    position="static"
                >
                    <Toolbar className="main-navbar">
                        <Typography variant="title" color="inherit">
                            ASI Datalab
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;
