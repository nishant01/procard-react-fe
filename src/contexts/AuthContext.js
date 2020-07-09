import { createContext, useReducer, useState, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';
import { authConstants } from '../constants/authConstants';
import { tokenHelper } from '../helpers/tokenHelper';
import Router, { useRouter } from 'next/router'
import { cookieHelper } from '../helpers/cookieHelper';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const router = useRouter()
    const [authState, dispatch] = useReducer(authReducer, {})

    useEffect(() => {
        const token = cookieHelper.getCookie('procard_token');
        
        if(token) {
            const tokenResp = tokenHelper.decodedToken(token);
            dispatch({type: authConstants.LOGIN_SUCCESS, response: {...tokenResp, ...{ 'isLoggedIn': true, 'token': token} }})
        
            if (tokenResp.is_configured === false) {
                if (!router.pathname.includes('edit')) { 
                    Router.push("/");
                }
            } else {
                Router.push(router.pathname)
            }
        } else {
            if (router.pathname.includes('login') || router.pathname.includes('register') || router.pathname.includes('logout')) {
                Router.push(router.pathname)
            } else {
                Router.push("/login")
            }
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;