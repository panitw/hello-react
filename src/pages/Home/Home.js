import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

export const Home = withRouter(({history}) => {

    const onLogout = () => {
        window.localStorage.removeItem('userInfo');
        history.push('/login');
    }

    return (
        <div style={{padding: '20px'}}>
            <h1>Home</h1>
            <br />
            <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>
        </div>
    );
});