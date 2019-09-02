import React, { Component } from 'react';
export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: props.product,
        }
    }


    render() {
        const imgStyle = {
            padding: '20px',
            margin: 'auto',
            display: 'block'
        }
        const padding = {
            padding: '20px'
        }

        const constHeight = {
            height: "420px;!important",
        }

        return (
            <div style={imgStyle} className="col-xl-3 col-md-6 mb-4">
                <div className="card mb-4" style={constHeight}>
                    <div className="card-header">{this.state.product.title.length < 35 ? this.state.product.title : this.state.product.title.substring(0, 34) + "..."}</div>
                    <div className="card-body" style={padding}>
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">{this.state.product.identifier}</div>
                        <img src={this.state.product.images[0]} className="img-fluid" style={imgStyle} width="200px;" alt="product" onError={e => e.target.src = 'https://as2.ftcdn.net/jpg/00/89/55/15/500_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg'} />
                        <p><b>Brand:</b> {this.state.product.brand !== undefined && this.state.product.brand.length > 0 ? this.state.product.brand : "n/a"}</p>
                        <p><b>Model:</b> {this.state.product.brand !== undefined && this.state.product.brand.model > 0 ? this.state.product.model : "n/a"}</p>
                        <p><b>Color:</b> {this.state.product.brand !== undefined && this.state.product.brand.color > 0 ? this.state.product.color : "n/a"}</p>
                    </div>
                </div >
            </div>
        )
    }
}

/*
049000074888
*/