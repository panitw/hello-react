import { LOGIN_SUCCESS, LOGIN_FAILED, USER_LOGOUT } from './types';

export const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
        //User Data
        const user = {
            id: 0,
            username: username,
            name: 'Administrator'
        }
        window.localStorage.setItem('userInfo', JSON.stringify(user));

        //Return action
        return {
            type: LOGIN_SUCCESS,
            user: user,
            token: '123456'
        }
    } else {
        //Return action
        return {
            type: LOGIN_FAILED,
            errorMessage: 'Invalid Username/Password'
        }
    }

}

export const logout = () => {
    window.localStorage.removeItem('userInfo');
    return {
        type: USER_LOGOUT
    }
}