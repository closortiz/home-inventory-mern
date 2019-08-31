import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProductLookup extends Component {
    constructor(props) {
        super(props);

        this.onChangeIdentifier = this.onChangeIdentifier.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            identifier: '',
            lookup_api_uri: "https://api.upcitemdb.com/prod/trial/lookup?upc=885909950805",
        }

    }

    componentDidMount() {
        //Add stuff
    }

    onChangeIdentifier(e) {
        this.setState({
            identifier: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Beep bop nothing to save")
    }

    onSearch() {
        axios.get(this.state.lookup_api_uri)
            .then(response => {
                if (response.data.length > 0) {
                    console.log(response.data);
                }
            })
    }

    render() {
        return (
            <div>
                <h3>Add New Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UPC/ISBN: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.identifier}
                            onChange={this.onChangeIdentifier}
                        />
                        <input type="button" value="Lookup Product Data" className="btn btn-primary" onClick={this.onSearch} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}




