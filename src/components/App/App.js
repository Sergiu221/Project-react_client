import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';

import Candidates from "../Candidates";
import Supervisors from "../Supervisors/Supervisors";
import HallsTable from "../Halls";
import Home from "../Home";
import Nothing from "../Nothing";
import Layout from "./Layout";
import NavigationBar from "./NavigationBar";
import Jumbotron from "./Jumbotron";
import IndividualHall from "../Hall";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Jumbotron/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/candidates" component={Candidates}/>
                            <Route path="/supervisors" component={Supervisors}/>
                            <Route path="/halls" exact={true} component={HallsTable}/>
                            <Route path="/halls/:id" component={IndividualHall}/>
                            <Route component={Nothing}/>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
