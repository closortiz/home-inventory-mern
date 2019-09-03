import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon"><i className="fas fa-home"></i></div>
                    <div className="sidebar-brand-text mx-3">Home Inventory</div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <Link to="/inventory/storage/add" className="nav-link">
                        <i className="far fa-fw fa-plus-square"></i>
                        <span>Store An Item</span>
                    </Link>
                </li>
                <div className="sidebar-heading">
                    Room
                </div>
                <li className="nav-item">
                    <Link to="/rooms/add" className="nav-link">
                        <i className="far fa-fw fa-plus-square"></i>
                        <span>Add A Room</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/rooms" className="nav-link">
                        <i className="fas fa-fw  fa-door-open"></i>
                        <span>View Rooms</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Units
                </div>

                <li className="nav-item">
                    <Link to="/units/add" className="nav-link">
                        <i className="far fa-fw fa-plus-square"></i>
                        <span>Add A Unit</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/units" className="nav-link">
                        <i className="fas fa-fw  fa-box-open"></i>
                        <span>View Units</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Inventory
                </div>

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <i className="far fa-fw  fa-plus-square"></i>
                        <span>Add To Inventory</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/inventory" className="nav-link">
                        <i className="fas fa-fw fa-boxes"></i>
                        <span>View Inventory</span>
                    </Link>
                </li>
            </ul>
        )
    }
}