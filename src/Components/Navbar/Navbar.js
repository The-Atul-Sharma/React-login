import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';
import { drawerWidth } from '../../Constants/Styles';

// Classes of Navbar component
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
        // CSS classes of component
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
                        <Button color="inherit">{this.props.user.user}</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
