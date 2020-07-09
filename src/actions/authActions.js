import { authConstants } from '../constants/authConstants';
import { authService } from '../services/authService';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';
import { cookieHelper } from '../helpers/cookieHelper';


 
export const authActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

async function login(user) {
    try {
        const response = await authService.login(user)
        cookieHelper.setCookie('procard_token', response.token)
        return success(response);
    } catch(error) {
        //alertActions.error(error.toString());
        return failure(error.toString());
    }
    
    function request(response) { return { type: authConstants.LOGIN_REQUEST, response } }
    function success(response) { return { type: authConstants.LOGIN_SUCCESS, response } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

async function register(user) {
    try {
        const response = await authService.register(user)
        return success(response);
    } catch(error) {
        //alertActions.error(error.toString());
        return failure(error.toString());
    }

    function request(response) { return { type: authConstants.REGISTER_REQUEST, response } }
    function success(response) { return { type: authConstants.REGISTER_SUCCESS, response } }
    function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}

function logout() {
    //authService.logout();
    try {
        const response = cookieHelper.removeCookie('procard_token');
        return success(response);
    } catch(error) {
        return failure(rerroe.ToString())
    }   

    function success(response = {}) { return { type: authConstants.LOGOUT, response } }
    function failure(error) { return { type: authConstants.LOGOUT, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        authService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: authConstants.GETALL_REQUEST } }
    function success(users) { return { type: authConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: authConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        authService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: authConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: authConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: authConstants.DELETE_FAILURE, id, error } }
}