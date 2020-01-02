import React from "react";
import {Col, Row} from "react-bootstrap";
import "./Home.css"
import ChartHome from "./ChartHome/ChartHome";
import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import ButtonDistribution from "./ButtonDistribution";
import ButtonReset from "./ButtonReset";

export default function Home() {

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
                <Col>
                    <Card bg="white" text="dark" style={{width: '15rem'}}>
                        <Card.Header>Admitere</Card.Header>
                        <Card.Body>
                            <Card.Title>Optiuni</Card.Title>
                            <ButtonToolbar>
                                <ButtonDistribution/>
                                <ButtonReset/>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ChartHome/>
        </React.Fragment>
    );
}
