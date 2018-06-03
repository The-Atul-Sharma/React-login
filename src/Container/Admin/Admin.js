import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

class Admin extends Component {
    state = {
        open: false,
    };

    //Open drawer
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    //Close drawer
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Navbar
                    open={this.state.open}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Sidebar
                    open={this.state.open}
                    handleDrawerClose={this.handleDrawerClose}
                />
            </div>
        );
    }
}

const mapStateToProps = state => state.user;

export default Admin;
