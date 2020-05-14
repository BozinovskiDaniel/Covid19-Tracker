import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import Navbar from "./components/layout/Navbar";
import individualCountry from "./pages/individualCountry";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/country/:countryName" component={individualCountry} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
