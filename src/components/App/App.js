import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';

import CandidatesTable from "../Candidates/CandidatesTable";
import SupervisorsTable from "../Supervisors/SupervisorsTable";
import HallsTable from "../Halls/HallsTable";
import Home from "../Home";
import Nothing from "../Nothing";
import Layout from "../Layout/Layout";
import NavigationBar from "../NavigationBar/NavigationBar";
import Jumbotron from "../Jumbotron/Jumbotron";

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
                            <Route path="/candidates" component={CandidatesTable}/>
                            <Route path="/supervisors" component={SupervisorsTable}/>
                            <Route path="/halls" component={HallsTable}/>
                            <Route component={Nothing}/>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
