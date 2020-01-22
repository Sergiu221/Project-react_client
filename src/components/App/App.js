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
import Reports from "../Reports";
import MyProvider from "../MyProvider";

class App extends Component {

    render() {
        return (
            <MyProvider>
                <React.Fragment>
                    <NavigationBar/>
                    <Jumbotron/>
                    <Layout>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/candidates" exact={true} component={Candidates}/>
                                <Route path="/supervisors" exact={true} component={Supervisors}/>
                                <Route path="/halls" exact={true} component={HallsTable}/>
                                <Route path="/halls/:id" component={IndividualHall}/>
                                <Route path="/reports" exact={true} component={Reports}/>
                                <Route component={Nothing}/>
                            </Switch>
                        </Router>
                    </Layout>
                </React.Fragment>
            </MyProvider>
        );
    }
}

export default App;