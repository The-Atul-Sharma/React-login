import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';
import asiDataLabLogo from '../../Static/Images/Main/NegivateASILogo.png';
import { drawerWidth } from '../../Constants/Styles';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
});

class Navbar extends Component {
    // Open drawer
    handleDrawerOpen = () => {
        this.props.handleDrawerOpen();
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar
                    position="absolute"
                    className={classNames(
                        classes.appBar,
                        this.props.open && classes.appBarShift
                    )}
                >
                    <Toolbar className="main-navbar">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                'drawer-btn',
                                this.props.open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={asiDataLabLogo} alt="Asi Datalab" />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
