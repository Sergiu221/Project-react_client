import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Home.css"
import ChartHome from "./ChartHome/ChartHome";
import Card from "react-bootstrap/Card";

class Home extends Component {

    render() {
        return (
            <React.Fragment>

                <Row>
                    <Col>
                        <Card bg="white" text="dark" style={{width: '15rem'}}>
                            <Card.Header>Candidati</Card.Header>
                            <Card.Body>
                                <Card.Title>Inscrisi</Card.Title>
                                <Card.Text> 1500 </Card.Text>
                                <Card.Link href="/candidates">Vezi candidati</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="white" text="dark" style={{width: '15rem'}}>
                            <Card.Header>Supraveghetori</Card.Header>
                            <Card.Body>
                                <Card.Title>Inscrisi</Card.Title>
                                <Card.Text>30</Card.Text>
                                <Card.Link href="/supervisors">Vezi supraveghetorii</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="white" text="dark" style={{width: '15rem'}}>
                            <Card.Header>Sali</Card.Header>
                            <Card.Body>
                                <Card.Title>Disponibile</Card.Title>
                                <Card.Text> 30 </Card.Text>
                                <Card.Link href="/halls">Vezi salile</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ChartHome/>
            </React.Fragment>
        );
    }
}

export default Home;
