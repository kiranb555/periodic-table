import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Spinner from "./components/spinner";
import "./App.scss";

const Home = lazy(() => import("./components/pages/home"));
const Details = lazy(() => import("./components/pages/details"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/details:ID" component={Details} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
