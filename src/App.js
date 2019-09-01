import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProductLookup from "./components/product-lookup.component";
import AddRooms from "./components/add-rooms.component";
import AddUnits from "./components/add-units.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductLookup} />
        <Route path="/rooms" exact component={AddRooms} />
        <Route path="/units" exact component={AddUnits} />
      </div>
    </Router>
  );
}



export default App;
