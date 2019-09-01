import React, { Component } from 'react';
import axios from 'axios';


const Product = props => (
    <div>
        <h3>{props.product.title} - {props.product.upc}</h3>
        <h4>Brand: {props.product.brand}</h4>
        <h4>Model: {props.product.model}</h4>
        <h4>Color: {props.product.color}</h4>
        <p>{props.product.description}</p>
        <img src={props.product.images[0]} alt="product" />
    </div>
)

export default class ProductLookup extends Component {
    constructor(props) {
        super(props);

        this.onChangeIdentifier = this.onChangeIdentifier.bind(this);
        this.productAdded = this.productAdded.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.incrementProductQuantity = this.incrementProductQuantity.bind(this);
        this.addToDB = this.addToDB.bind(this);


        this.state = {
            identifier: '',
            lookup_api_uri: "/prod/trial/lookup?upc=",
            last_product_added: undefined,
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
        axios.get("http://localhost:5000/products/identifier/" + this.state.identifier)
            .then(response => {
                if (response.data !== undefined && response.data !== null) {
                    console.log(response.data)
                    this.setState({ last_product_added: response.data })
                    this.incrementProductQuantity()
                } else {
                    if (this.state.identifier.length >= 10) {
                        console.log("Item not found in database comencing lookup via API")
                        axios.get(this.state.lookup_api_uri + this.state.identifier)
                            .then(response => {
                                this.setState({ last_product_added: response.data.items[0] })
                                this.addToDB(response.data.items[0])
                                console.log(response.data.items)
                            }).catch(err => { console.log(err) });
                    } else {
                        console.log("Please enter a valid isbn")
                    }
                }
            }).catch(err => { console.log(err) });

    }

    incrementProductQuantity() {
        axios.post("http://localhost:5000/products/increment/identifier/" + this.state.identifier)
            .then(response => {
                console.log(response.data)
            }).catch(err => { console.log(err) });
    }

    addToDB(product) {
        product.identifier = this.state.identifier
        console.log("adding product: " + product.data);
        axios.post("http://localhost:5000/products/add", product)
            .then(response => {
                console.log(response.data)
            }).catch(err => { console.log(err) });
    }

    productAdded() {
        if (this.state.last_product_added !== undefined) {
            return <Product product={this.state.last_product_added} />
        }

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
                    <div>
                        {this.productAdded()}
                    </div>
                </form>
            </div>
        )
    }

}




