import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Home.css"
import ChartHome from "../ChartHome/ChartHome";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="leftdiv">
                    <Container>
                        <Row>
                            <Col>
                                Candidati
                            </Col>
                            <Col>
                                1500
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Supraveghetori
                            </Col>
                            <Col>
                                30
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Sali
                            </Col>
                            <Col>
                                10
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="rightdiv">
                    <ChartHome/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
