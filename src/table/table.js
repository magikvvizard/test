import React from "react";
import TableModel from "../models/table-model";


class Searchbar extends React.Component{
    constructor(props){
        super(props);

        //bind the listener to the event and callback
        this.handleChange = this.handleChange.bind(this);
    }


    //execute on change
    handleChange(e){
        this.props.onSearchChange(e.target.value);
    }

    render(){

        //this defines the value="filter" param
        const filter = this.props.filter;

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="SearchBar">Search Bar:</label>
                    <input type="text" className="form-control" value={filter} onChange={this.handleChange}
                           placeholder="Enter Parameters"/>
                </div>
            </form>
        );
    }

}


class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: null, filter: ''};
        this.handleChange = this.handleChange.bind(this);
    }




    componentDidMount() {


        let tablemodel = new TableModel();

        tablemodel.getData().then(data => {
            this.setState({data: data});

        });


    }

    componentWillUnmount() {
        this.setState({data:undefined});
    }

    handleChange(filterValue){
        this.setState({filter: filterValue})
    }


    render(){

        if(!this.state.data)
            return <h1>Loading</h1>;


        //cannot see state inside map
        var filter = this.state.filter;

        let dataColumns = this.state.data.columns;
        let dataRows = this.state.data.rows;


        var  newRows = dataRows.map(function(row){

            let contains = false;
            dataColumns.map(function(column){
                contains = contains || row[column].toString().toUpperCase().indexOf(filter.toLocaleUpperCase()) > -1
            });

            if(contains)
                return row;
        });

        newRows = newRows.filter(function(element){ return element != null});


        return (
            <div>
                <Searchbar onSearchChange={this.handleChange}/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {
                            dataColumns.map(function(column){
                                return <th>{column}</th>;
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        newRows.map(function(row){
                            return(


                                <tr>
                                    {dataColumns.map(function(column){
                                        return <td>{row[column]}</td>;
                                    })}
                                </tr>
                            );
                        })
                    }
                    </tbody>

                </table>
            </div>);
    }

}

export {
        Table,
}
