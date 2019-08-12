import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { TitleBar } from './TitleBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        (
            <Router>
                <TitleBar />
            </Router>
        ),
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('takes you to login page when click login', () => {

});