import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPatient from "./components/AddPatient";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AddPatient} />
      </Switch>
    </div>
  );
}

export default App;
