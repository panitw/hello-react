export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGGED_ON':
            return {
                ...state,
                user: action.user,
                token: action.token
            };
        case 'USER_LOGGED_OFF':
            return {}
        default:
            return state;
    }
}