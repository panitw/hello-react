import {LOGIN_SUCCESS, LOGIN_FAILED, USER_LOGOUT} from '../actions/types';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
                token: action.token
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginError: action.errorMessage
            }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}