import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/userAction';

const HomeComponent = withRouter(({history, ...props}) => {

    const onLogout = () => {
        props.logout();
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

export const Home = connect(null, {logout})(HomeComponent);