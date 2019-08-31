import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProductLookup from "./components/product-lookup.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductLookup} />
      </div>
    </Router>
  );
}

export default App;
