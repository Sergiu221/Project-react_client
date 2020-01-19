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
                        <Nav.Item><Nav.Link href="/"><h5>Home</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/candidates"><h5>Candidati</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/supervisors"><h5>Supraveghetori</h5></Nav.Link></Nav.Item>
                        <Nav.Item> <Nav.Link href="/halls"><h5>Sali</h5></Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default NavigationBar;