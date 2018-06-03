import { USER_LOGGED_IN } from '../../Constants/Type';
import api from '../../Services/Auth/Auth';

export function userLoggedIn(user) {
    return {
        type: USER_LOGGED_IN,
        user,
    };
}

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        dispatch(userLoggedIn(user.user));
    });
