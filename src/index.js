import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {HashRouter, NavLink, Route}  from 'react-router-dom';
import { Provider } from  "react-redux";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



import App from './app/app';

import store from './redux/store/store';
const options = {
    position: 'top right',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}


class View extends React.Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <HashRouter>
                    <div className="route-place">
                        <Route exact path="/" component={App} />
                    </div>
                </HashRouter>
            </AlertProvider>
        );
    }
}

ReactDOM.render(

    <Provider store={store}>
    <View/>
    </Provider>,
    document.getElementById('root')
);