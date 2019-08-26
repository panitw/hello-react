import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/userAction';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const LoginComponent = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        props.login(username, password);
    }

    if (!props.currentUser) {
        return (
            <div style={{padding: '20px'}}>
                <h1>Login</h1>
                {props.errorMessage ? <div style={{color: 'red'}}>{props.errorMessage}</div> : null}
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                />
                <br />
                <TextField
                    label="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                <br /><br /><br />
                <Button variant="contained" color="primary" onClick={onLogin}>Login</Button>
            </div>
        );
    } else {
        return (
            <Redirect to="/home" />
        );
    }
}

const mapStateToProps = (state) => {
    let user = state.user || {};
    return {
        currentUser: user.currentUser,
        errorMessage: user.loginError
    }
}

export const Login = connect(mapStateToProps, { login })(LoginComponent);