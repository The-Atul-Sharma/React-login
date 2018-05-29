import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./NavBar.css";
import asiDataLabLogo from "../../Assets/Images/Main/NegivateASILogo.png";

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="main-navbar">
                        <img src={asiDataLabLogo} alt="Asi Datalab" />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;
