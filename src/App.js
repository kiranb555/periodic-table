import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Details from "./components/pages/details";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/details:ID">
              <Details />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
