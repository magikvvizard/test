import React from "react";
import List from "./list/list";
import ListPrime from "./listprime/listprime";
import Form from "./form/form";
import $ from "jquery";
import "bootstrap-notify";





const App = () => {

    $(function(){
        $.notify("Hello World");
    });

    return(
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <button
                    onClick={() => {




                    }}
                >
                    Show Alert
                </button>
                <List />
                <ListPrime/>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div>
        </div>
);
            };

export default App;