import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {HashRouter, NavLink, Route}  from 'react-router-dom';

import {Table} from './table/table.js';



class View extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="route-place">
                    <Route exact path="/table" component={Table} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(

    <View/>,
    document.getElementById('root')
);

/*
const title = 'My Minimal React Webpack Babel Setup';


// Component
class ProductShortInfo extends React.Component {
    render() {
        return (
            <div className="product">
                <h3>Samsung Galaxy S9</h3>
                <p>Price: $900</p>
            </div>
        );
    }
}

// Component


// Component
class ProductImages extends React.Component {
    render() {
        return <h3>Some Images of Samsung Galaxy S9</h3>;
    }
}

// Component
class ProductComments extends React.Component {
    render() {
        return <h3>Some Customer Comments</h3>;
    }
}

//
class Product extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ProductShortInfo />

                    <div className="product-nav">
                        <NavLink exact to="/" activeClassName="selected">
                            Feature
                        </NavLink>

                        <NavLink exact to="/images" activeClassName="selected">
                            Images
                        </NavLink>

                        <NavLink to="/comments" activeClassName="selected">
                            Comments
                        </NavLink>
                    </div>
                    <div className="route-place">
                        <Route exact path="/" component={ProductFeature} />
                        <Route exact path="/images" component={ProductImages} />
                        <Route path="/comments" component={ProductComments} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}
//
class App extends React.Component {
    render() {
        return <Product />;
    }
}

// Render
ReactDOM.render(<App />, document.querySelector("#app"));
*/