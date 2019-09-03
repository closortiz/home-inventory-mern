import React, { Component } from 'react';
import axios from 'axios';
import Product from './objects/product.component';
import Unit from './objects/unit.component';


export default class RoomDetails extends Component {
    constructor(props) {
        super(props);

        this.listProducts = this.listProducts.bind(this);
        this.listUnits = this.listUnits.bind(this);

        this.state = {
            room: {},
            products: [],
            units: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/room/' + this.props.match.params.id + '/details')
            .then(response => {
                console.log(response)
                this.setState({
                    room: response.data[0],
                    products: response.data[0].products_in_room,
                    units: response.data[0].units_in_room,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    listProducts() {
        return this.state.products.map(currentProduct => {
            return <Product product={currentProduct} />//deleteExcercise={this.deleteExcercise} key={currentexercise._id}
        })
    }

    listUnits() {
        return this.state.units.map(currentUnit => {
            return <Unit unit={currentUnit} />//deleteExcercise={this.deleteExcercise} key={currentexercise._id}
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.products.length > 0 ? <h2>Products in room:</h2> : ""}
                    <div className="row">
                        {this.listProducts()}
                    </div>

                </div>
                <div>
                    {this.state.units.length > 0 ? <h2>Units in room:</h2> : ""}
                    <div className="row">
                        {this.listUnits()}
                    </div>
                </div>

            </div>
        )
    }

}