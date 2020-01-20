import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "./Home.css"
import ChartHome from "./ChartHome/ChartHome";
import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonDistribution from "./ButtonDistribution";
import ButtonReset from "./ButtonReset";
import API from "../utils/API";

export default function Home() {

    const [numberCandidates, setNumberCandidates] = useState([]);
    const [numberOfSupervisors, setNumberOfSupervisors] = useState([]);
    const [numberOfHalls, setNumberOfHalls] = useState([]);
    const baseUrl = 'home';

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            setNumberCandidates(result.data.numberOfCandidates);
            setNumberOfSupervisors(result.data.numberOfSupervisors);
            setNumberOfHalls(result.data.numberOfHalls);
        })();
    }, [])

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card bg="white" text="dark" style={{width: '15rem'}}>
                        <Card.Header className="d-flex justify-content-center">Candidati</Card.Header>
                        <Card.Body>
                            <Card.Title>Inscrisi</Card.Title>
                            <Card.Text> {numberCandidates} </Card.Text>
                            <Card.Link href="/candidates">Vezi candidati</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="white" text="dark" style={{width: '15rem'}}>
                        <Card.Header className="d-flex justify-content-center">Supraveghetori</Card.Header>
                        <Card.Body>
                            <Card.Title>Inscrisi</Card.Title>
                            <Card.Text>{numberOfSupervisors}</Card.Text>
                            <Card.Link href="/supervisors">Vezi supraveghetorii</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="white" text="dark" style={{width: '15rem'}}>
                        <Card.Header className="d-flex justify-content-center">Sali</Card.Header>
                        <Card.Body>
                            <Card.Title>Disponibile</Card.Title>
                            <Card.Text> {numberOfHalls} </Card.Text>
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
