import React, { Component } from 'react';
export default class Unit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: props.unit,
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

        const noAvailableImage = 'https://as2.ftcdn.net/jpg/00/89/55/15/500_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg';
        return (
            <div style={imgStyle} className="col-xl-3 col-md-6 mb-4">
                <div className="card mb-4" style={constHeight}>
                    <div className="card-header">{this.state.unit.name.length < 35 ? this.state.unit.name : this.state.unit.name.substring(0, 34) + "..."}</div>
                    <div className="card-body" style={padding}>
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1"><span>{this.state.unit.identifier}</span></div>
                        <img src={this.state.unit.images.length > 0 ? this.state.images[0] : noAvailableImage} className="img-fluid" style={imgStyle} width="200px;" alt="unit" onError={e => e.target.src = noAvailableImage} />
                        <p><b>Size:</b> {this.state.unit.size !== undefined && this.state.unit.size.length > 0 ? this.state.unit.size : "n/a"}</p>
                    </div>
                </div >
            </div>
        )
    }
}

/*
049000074888
*/