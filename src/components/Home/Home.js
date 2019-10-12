import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Home.css"
import styled from "styled-components";

const Styles = styled.div`
  .sergiu {
    display: inline;
  }
`;

class Home extends Component {

    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="sergiu">

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

                        <Container>
                            <Row>
                                <Col>
                                    Candidati
                                </Col>
                                <Col>
                                    Sali
                                </Col>
                                <Col>
                                    Supraveghetori
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    Candidati
                                </Col>
                                <Col>
                                    Sali
                                </Col>
                                <Col>
                                    Supraveghetori
                                </Col>
                            </Row>
                        </Container>

                        <div>
                            <p>hggjgh</p>
                        </div>
                    </div>

                </React.Fragment>
            </Styles>
        );
    }
}

export default Home;
