import { createBrowserHistory } from 'history';
//import { createBrowserHistory as createHistory } from 'history'

//let history
export const history = () => {
    if (typeof document !== 'undefined') {
        //const createBrowserHistory = require('history/createBrowserHistory').default
      
        history = createBrowserHistory()
      }
}

// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory();
