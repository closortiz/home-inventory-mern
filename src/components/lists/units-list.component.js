import React, { Component } from 'react';
import axios from 'axios';

import Unit from '../objects/unit.component';

export default class UnitsList extends Component {
    constructor(props) {
        super(props);

        this.listUnits = this.listUnits.bind(this);

        this.state = {
            units: [],
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/unit/')
            .then(response => {
                this.setState({ units: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    listUnits() {
        return this.state.units.map(currentUnit => {
            return <Unit key={currentUnit.identifier} unit={currentUnit} />//deleteExcercise={this.deleteExcercise} key={currentexercise._id}
        })
    }

    render() {
        return (
            <div>
                <h1>Units</h1>
                <div className="row">{this.listUnits()}</div>
            </div>

        )
    }
}