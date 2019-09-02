import React, { Component } from 'react';
import axios from 'axios'

export default class StoreItems extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemIdentifier = this.onChangeItemIdentifier.bind(this);
        this.onChangeUnitIdentifier = this.onChangeUnitIdentifier.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item_identifier: '',
            unit_identifier: '',
        }

    }

    onChangeItemIdentifier(e) {
        this.setState({
            item_identifier: e.target.value
        });
    }

    onChangeUnitIdentifier(e) {
        this.setState({
            unit_identifier: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const item = {
            item_identifier: this.state.item_identifier,
            unit_identifier: this.state.unit_identifier,
        }

        console.log(item)

        window.location = "/storage/add";
    }

    render() {
        return (
            <div>
                <h3>Store An Item</h3>
                <form onSubmit={this.onSubmit}>
                    <h2>Store:</h2>
                    <div className="form-group">
                        <label>UPC/ISBN: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.item_identifier}
                            onChange={this.onChangeItemIdentifier}
                        />
                    </div>
                    <div className="form-group">
                        <h2>Inside of:</h2>
                        <label>Unit Identifier: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.unit_identifier}
                            onChange={this.onChangeUnitIdentifier}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Store Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}