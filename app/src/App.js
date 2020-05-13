import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import home from "./pages/home";

function App() {
  return (
    <div className="App">
      <div className="homepageContainer">
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
