import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import CandidatesTable from "./candidates/CandidatesTable";
import HallsTable from "./halls/HallsTable";
import SupervisorsTable from "./supervisors/SupervisorsTable";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/candidates">Candidates</Link>
        </li>
        <li>
          <Link to="/halls">Halls</Link>
        </li>
        <li>
          <Link to="/supervisors">Supervisors</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/candidates" component={CandidatesTable} />
        <Route path="/halls" component={HallsTable} />
        <Route path="/supervisors" component={SupervisorsTable} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
