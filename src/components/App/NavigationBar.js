import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import styled from 'styled-components';

const Styles = styled.div`
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
                <NavbarCollapse id="basic-navbar-nav"/>
                    <Nav className="mr-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/candidates">Candidati</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/supervisors">Supraveghetori</Nav.Link></Nav.Item>
                        <Nav.Item> <Nav.Link href="/halls">Sali</Nav.Link></Nav.Item>
                    </Nav>
            </Navbar>
        </Styles>
    )
        ;

}

export default NavigationBar;