import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About } from "./components";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/test" exact component={() => <Test />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
