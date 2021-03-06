import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { login } from '../../Actions/Auth/AuthActions';

// Classes of Login component
const styles = theme => ({
    card: {
        maxWidth: '30rem',
        overflow: 'auto',
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    /** 
        @description Validation of login form
        @returns boolean
    **/
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    /** 
        @description Update input
        @param {object} event
    **/
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    /** 
        @description Call login handler and redirect to home page
        @param {object} event
    **/
    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state).then(res => {
            this.props.history.push('/');
        });
    };

    render() {
        // CSS classes of component
        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="gradient-background">
                    <Card
                        className={classNames(
                            classes.card,
                            'middle-screen-card'
                        )}
                    >
                        <Typography
                            className={classNames('center', 'mt5')}
                            variant="headline"
                            component="h2"
                        >
                            Welcome back!
                        </Typography>

                        <div className={classNames('ml5', 'mr5')}>
                            <TextField
                                label="Email/Username"
                                name="username"
                                required
                                className={classes.textField}
                                margin="normal"
                                fullWidth
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type={this.state.visible ? 'text' : 'password'}
                                required
                                className={classes.textField}
                                margin="normal"
                                fullWidth
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Grid className={'mt5'} container>
                            <Grid item xs={4}>
                                <Link
                                    to="/forgot-password"
                                    className="underline-none"
                                >
                                    <span className="auth-link-size">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <Button
                                    title="Try Website"
                                    variant="raised"
                                    color="primary"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                    Log in
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={6}>
                                <Link to="/subscribe">
                                    <span
                                        className={classNames(
                                            'underline',
                                            'auth-link-size'
                                        )}
                                    >
                                        Don't have an account?
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    </Card>
                </div>
            </form>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    null,
    { login }
)(withStyles(styles)(Login));
