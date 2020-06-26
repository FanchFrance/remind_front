import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Patients from "./components/Patients";
import AddPatient from "./components/AddPatient";
import TreatmentAdd from "./components/TreatmentAdd";
import Treatment from "./components/Treatment";
import NextPill from "./components/NextPill";
import Symptoms from "./components/Symptoms";

function App() {
  return (
    <div className="App">
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
        <Route exact path="/patients/:id/drugs/:id" component={Treatment} />
      </Switch>
      <Switch>
        <Route exact path="/nextpill" component={NextPill} />
      </Switch>
      <Switch>
        <Route exact path="/symptoms" component={Symptoms} />
      </Switch>
      {/* <Switch>
        <Route exact path="/treatment" component={Treatment} />
      </Switch> */}
    </div>
  );
}

export default App;
