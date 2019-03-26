import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {HashRouter, NavLink, Route}  from 'react-router-dom';
import { Provider } from  "react-redux";


import App from './app/app';

import store from './redux/store/store';



class View extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="route-place">
                    <Route exact path="/" component={App} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(

    <Provider store={store}>
    <View/>
    </Provider>,
    document.getElementById('root')
);