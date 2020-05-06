import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { jsonConversion } from "./utils/jsonConversion";
import Home from "./routes/Home";
import About from "./routes/About";
import Users from "./routes/Users";
import Navbar from "./components/Navbar";
import "./App.css";
import { theme } from "./theme";

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grommet>
  );
}

export default App;
