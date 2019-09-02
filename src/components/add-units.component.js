import React, { Component } from 'react';
import axios from 'axios'

export default class AddUnits extends Component {
    constructor(props) {
        super(props);

        this.onChangeIdentifier = this.onChangeIdentifier.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            identifier: '',
            name: '',
            size: '',
            description: '',
        }

    }

    onChangeIdentifier(e) {
        this.setState({
            identifier: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeSize(e) {
        this.setState({
            size: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const unit = {
            identifier: this.state.identifier,
            name: this.state.name,
            size: this.state.size,
            description: this.state.description
        }

        axios.post("http://localhost:5000/unit/add", unit)
            .then(res => console.log(res.data));

        console.log(unit)

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Add A New Unit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Identifier: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.identifier}
                            onChange={this.onChangeIdentifier}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Size: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.size}
                            onChange={this.onChangeSize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text-box"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}