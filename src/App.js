import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TitleBar } from './components/TitleBar';
import { Login } from './pages/Login';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


export const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TitleBar />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}