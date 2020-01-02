import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar-toggler-icon{
    background-color: #bbb
  }
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => {

    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/candidates">Candidati</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/supervisors">Supraveghetori</Nav.Link></Nav.Item>
                        <Nav.Item> <Nav.Link href="/halls">Sali</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default NavigationBar;