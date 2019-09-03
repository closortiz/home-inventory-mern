import React, { Component } from 'react';
import axios from 'axios';

import Product from '../objects/product.component';

export default class InventoryList extends Component {
    constructor(props) {
        super(props);

        this.listProducts = this.listProducts.bind(this);

        this.state = {
            products: [],
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    listProducts() {
        return this.state.products.map(currentProduct => {
            return <Product product={currentProduct} />//deleteExcercise={this.deleteExcercise} key={currentexercise._id}
        })
    }

    render() {
        return (
            <div>
                <h1>Inventory</h1>
                <div className="row">{this.listProducts()}</div>
            </div>

        )
    }
}