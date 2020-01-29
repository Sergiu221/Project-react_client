import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "./Home.css"
import ChartHome from "./ChartHome/ChartHome";
import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonDistribution from "./ButtonDistribution";
import ButtonReset from "./ButtonReset";
import {API} from "../utils/API";

export default function Home() {
    const [numberCandidates, setNumberCandidates] = useState([]);
    const [numberOfSupervisors, setNumberOfSupervisors] = useState([]);
    const [numberOfHalls, setNumberOfHalls] = useState([]);
    const [applicationState, setApplicationState] = useState({
        id: 1,
        isImportedResources: 'false',
        isDistributed: 'false',
        isDistributedFinalized: 'false',
        isExamFinish: 'false'
    });
    const baseUrl = '/home';

    useEffect(() => {
            API.get('data_base').then(({data}) => {
                setApplicationState(data);
                console.log(data);
            })
        }, []
    );

    useEffect(() => {
        API.get(baseUrl).then(({data}) => {
            setNumberCandidates(data.numberOfCandidates);
            setNumberOfSupervisors(data.numberOfSupervisors);
            setNumberOfHalls(data.numberOfHalls);
        });
    }, [applicationState]);

    const importResources = () => {
        API.post('files/load_database').then((response) => {
            console.log(response);
            applicationState.isImportedResources = 'true';
            setApplicationState({...applicationState});

            API.post('data_base', applicationState).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });
    };

    const ButtonImportResources = <button className="button-importButton" onClick={importResources}>Incarca</button>;


    function finalizeDistribution() {
        console.log("Aici trebuie sa verific daca toti candidatii au o sala!");
        //TODO: Veirica daca toti cadidatii sunt intr-o sala

        applicationState.isDistributed = 'true';
        applicationState.isDistributedFinalized = 'true';
        setApplicationState({...applicationState});
        API.post('data_base', applicationState).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    const ButtonFinalizeDistribution = <button className="button-finalize-distribution"
                                               onClick={finalizeDistribution}> Finalizeza Distribuirea </button>;

    function allocation() {
        //TODO:aici trebuie sa verific daca toti candidatii au note
        API.get("/allocation").then((response) => {
            applicationState.isExamFinish = 'true';
            setApplicationState({...applicationState});
            console.log(response);
            API.post('data_base', applicationState).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });

    }

    const ButtonAllocation = <button className="button-finalize-distribution" onClick={allocation}>
        Finalizarea Examen </button>;


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
                {applicationState.isExamFinish == "false" && <Col>
                    <Card bg="white" text="dark" style={{width: '15rem'}}>
                        <Card.Header>Admitere</Card.Header>
                        <Card.Body>
                            <Card.Title>Optiuni</Card.Title>
                            {applicationState.isImportedResources == "false" &&
                            <ButtonToolbar>
                                {ButtonImportResources}
                            </ButtonToolbar>
                            }
                            {applicationState.isImportedResources == "true" && applicationState.isDistributedFinalized == "false" &&
                            <ButtonToolbar>
                                <ButtonDistribution/>
                                <ButtonReset/>
                            </ButtonToolbar>
                            }
                            {applicationState.isImportedResources == "true" && applicationState.isDistributedFinalized == "false" &&
                            <ButtonToolbar>
                                {ButtonFinalizeDistribution}
                            </ButtonToolbar>
                            }
                            {applicationState.isDistributedFinalized == "true" &&
                            <ButtonToolbar>
                                {ButtonAllocation}
                            </ButtonToolbar>
                            }
                        </Card.Body>
                    </Card>
                </Col>}
            </Row>
            <ChartHome/>
        </React.Fragment>
    );
}

