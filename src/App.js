import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Register from "./components/Register";
import Patients from "./components/Patients";
import AddPatient from "./components/AddPatient";
import TreatmentAdd from "./components/TreatmentAdd";
import Treatment from "./components/Treatment";
import NextPill from "./components/NextPill";
import Symptoms from "./components/Symptoms";
import TreatmentTracker from "./components/TreatmentTracker";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
      <Switch>
        <Route exact path="/patients" component={Patients} />
      </Switch>
      <Switch>
        <Route exact path="/add-patient" component={AddPatient} />
      </Switch>
      <Switch>
        <Route exact path="/add-treatment" component={TreatmentAdd} />
      </Switch>
      <Switch>
        <Route exact path="/patients/:id/drugs" component={Treatment} />
      </Switch>
      <Switch>
        <Route exact path="/nextpill/:idPatient" component={NextPill} />
      </Switch>
      <Switch>
        <Route exact path="/symptoms" component={Symptoms} />
        <Route
          exact
          path="/patients/:id/treatment-tracker"
          component={TreatmentTracker}
        />
      </Switch>
      {/* <Switch>
        <Route exact path="/treatment" component={Treatment} />
      </Switch> */}
    </div>
  );
}

export default App;
