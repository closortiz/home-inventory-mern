import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">HomeInventory</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Add inventory items</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/rooms" className="nav-link">Add a room</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/units" className="nav-link">Add a unit</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}