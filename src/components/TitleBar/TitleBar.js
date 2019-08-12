import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

export const TitleBar = withRouter(({ history }) => {

    const classes = useStyles();
    const buttonClick = () => {
        history.push('/login');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    SCB
                </Typography>
                <Button color="inherit" onClick={buttonClick}>Login</Button>
            </Toolbar>
        </AppBar>
    );
});