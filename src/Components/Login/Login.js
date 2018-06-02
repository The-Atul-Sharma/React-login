import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Login.css';
import asiDataLabLogo from '../../Static/Images/Main/NegivateASILogo.png';

const styles = theme => ({
    card: {
        maxWidth: '30rem',
        overflow: 'auto',
    },
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="gradient-background">
                <img
                    className="auth-asi-logo"
                    src={asiDataLabLogo}
                    alt="Asi Datalab"
                />
                <Card
                    className={classNames(classes.card, 'middle-screen-card')}
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
                            id="email"
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <Grid className={'mt5'} container>
                        <Grid item xs={4}>
                            <span className="auth-link-size">
                                Forgot Password?
                            </span>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <Button variant="raised" color="primary">
                                Log in
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <span
                                className={classNames(
                                    'underline',
                                    'auth-link-size'
                                )}
                            >
                                Don't have an account?
                            </span>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
