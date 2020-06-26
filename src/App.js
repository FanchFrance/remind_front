import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Register from "./components/Register";
import Patients from "./components/Patients";
import Patient from "./components/Patient";
import AddPatient from "./components/AddPatient";
import TreatmentAdd from "./components/TreatmentAdd";
import Treatment from "./components/Treatment";
import NextPill from "./components/NextPill";
import Symptoms from "./components/Symptoms";
import TreatmentTracker from "./components/TreatmentTracker";

import Day25 from "./components/days/Day25"
import Day27 from "./components/days/Day27";
import DayMay from "./components/days/DayMay";


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
        <Route exact path="/patient" component={Patient} />
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
        <Route exact path="/patients/:id/drugs/:id" component={Treatment} />
      </Switch>
      <Switch>
        <Route exact path="/patient/tracker" component={TreatmentTracker} />
      </Switch>
      <Switch>
        <Route exact path="/nextpill" component={NextPill} />
      </Switch>
      <Switch>
        <Route exact path="/symptoms" component={Symptoms} />
        <Route
          exact
          path="/patients/:id/treatment-tracker"
          component={TreatmentTracker}
        />
      </Switch>
      
      <Switch>
        <Route exact path="/Day25" component={Day25} />
      </Switch>
       <Switch>
        <Route exact path="/Day27" component={Day27} />
      </Switch>
      <Switch>
        <Route exact path="/DayMay" component={DayMay} />
      </Switch>

    </div>
  );
}

export default App;
