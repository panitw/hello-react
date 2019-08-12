import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TitleBar } from './TitleBar';

afterEach(cleanup);

const Login = () => <div>login page</div>;

const renderElements = (historyConf = {}) => {
    const history = createMemoryHistory(historyConf);
    return render((
        <Router history={history}>
            <TitleBar />
            <div data-testid="container">
                <Switch>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </div>
        </Router>
    ));
}

it('renders without crashing', () => {
    const { getByTestId } = renderElements();
    expect(getByTestId('titleText')).toHaveTextContent('SCB');
});

it('takes you to login page when click login', () => {
    const { getByTestId } = renderElements({ initialEntries: ['/']});
    fireEvent.click(getByTestId('loginButton'));
    expect(getByTestId('container')).toHaveTextContent('login page');
});