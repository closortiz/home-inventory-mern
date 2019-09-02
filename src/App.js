import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import 'startbootstrap-sb-admin-2/js/sb-admin-2.min.js';
import 'startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css';
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js';

import Navbar from "./components/navbar.component";
import ProductLookup from "./components/product-lookup.component";
import AddRooms from "./components/add-rooms.component";
import AddUnits from "./components/add-units.component";
import ViewInventory from "./components/lists/inventory-list.component";
import ViewRooms from "./components/lists/rooms-list.component";
import ViewUnits from "./components/lists/units-list.component";


function App() {
  return (

    <Router>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
            <div className="container-fluid">
              <br />
              <Route path="/" exact component={ProductLookup} />
              <Route path="/rooms" exact component={ViewRooms} />
              <Route path="/units" exact component={ViewUnits} />
              <Route path="/rooms/add" exact component={AddRooms} />
              <Route path="/units/add" exact component={AddUnits} />
              <Route path="/inventory" exact component={ViewInventory} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;
