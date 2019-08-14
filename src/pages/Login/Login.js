import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let userData = window.localStorage.getItem('userInfo');
        if (userData) {
            setCurrentUser(JSON.parse(userData));
        }
    }, [currentUser])

    const onLogin = () => {
        if (username === 'admin' && password === 'admin') {
            const user = {
                id: 0,
                username: username,
                name: 'Administrator'
            }
            window.localStorage.setItem('userInfo', JSON.stringify(user));
            setCurrentUser(user);
        } else {
            setUsername('');
            setPassword('');
            setErrorMessage('Invalid username/password');
        }
    }

    if (!currentUser) {
        return (
            <div style={{padding: '20px'}}>
                <h1>Login</h1>
                {errorMessage ? <div style={{color: 'red'}}>{errorMessage}</div> : null}
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