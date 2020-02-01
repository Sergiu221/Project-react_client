import React, {useState} from "react";
import {Nav, Navbar, Button} from "react-bootstrap";
import styled from 'styled-components';
import {MyContext} from "../MyContext";
import {Redirect} from "react-router-dom";
import {authService} from "../utils/API";

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

export default function NavigationBar() {
    const [redirect, toggleRedirect] = useState(false);

    const handleLogout = () => {
        authService.logout();
        toggleRedirect(true);
    };

    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item><Nav.Link href="/home"><h5>Home</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/categories"><h5>Categorii</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/candidates"><h5>Candidati</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/candidates_options"><h5>Candidati Optiuni</h5></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/supervisors"><h5>Supraveghetori</h5></Nav.Link></Nav.Item>
                        <Nav.Item> <Nav.Link href="/halls"><h5>Sali</h5></Nav.Link></Nav.Item>
                        <Nav.Item> <Nav.Link href="/grades"><h5>Note</h5></Nav.Link></Nav.Item>
                        <MyContext.Consumer>
                            {(context) => {
                                if (context.state.cool === "show") {
                                    return (<Nav.Item> <Nav.Link href="/reports"><h5>Rapoarte</h5>
                                    </Nav.Link></Nav.Item>)
                                }
                            }}
                        </MyContext.Consumer>

                    </Nav>
                    <Button variant="light" onClick={handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
            {redirect && <Redirect to='/login'/>}
        </Styles>
    );
}
