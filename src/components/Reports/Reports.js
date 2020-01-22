import React from "react";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Reports() {


    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card bg="white" text="dark">
                        <Card.Header className="d-flex justify-content-center">Repoarte de desfasurarea sesiunii de
                            Admitere</Card.Header>
                        <Card.Body>
                            <Card.Text>Lista generală a candidaţilor </Card.Text>

                            <Card.Text>Lista candidaţilor care vor susţine examenul în sala B1 </Card.Text>

                            <Card.Text>Lista candidaţilor care vor susţine examenul în sala B2 </Card.Text>

                            <Card.Text>Lista candidaţilor care vor susţine examenul în sala B4 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala B6 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala B7 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala B8 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala M.
                                Kogalniceanu </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala C2 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala C3 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala C112 </Card.Text>

                            <Card.Text> Lista candidaţilor care vor susţine examenul în sala C309 </Card.Text>

                            <Card.Text> Lista candidaţilor care nu susţin proba scrisă </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="white" text="dark">
                        <Card.Header className="d-flex justify-content-center">Repoarte de rezultate a sesiunii de
                            admitere</Card.Header>
                        <Card.Body>
                            <Card.Text> Lista generală a candidaţilor </Card.Text>
                            <Card.Text>Lista candidaţilor olimpici (L1)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi admişi pe locurile rezervate absolvenţilor de licee
                                din mediul rural (L2)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi admişi pe locurile finantaţe de la buget, studii în
                                limba română (L3)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi admişi pe locurile finanţate de la buget, studii în
                                limba engleză (L4)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi admişi pe locurile cu taxă, studii în limba română
                                (L5)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi admişi pe locurile cu taxă, studii în limba engleză
                                (L6)</Card.Text>
                            <Card.Text>Lista candidaţilor declaraţi respinşi (L8)</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );

}

