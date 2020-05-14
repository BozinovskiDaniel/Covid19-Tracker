import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import Navbar from "./components/layout/Navbar";
import individualCountry from "./pages/individualCountry";

// Material UI
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/country/:countryName" component={individualCountry} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
