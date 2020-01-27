import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import {authService, API} from "../utils/API";

const Login = () => {
    const [redirect, toggleRedirect] = useState(authService.isAuthenticated());
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    function login(event) {
        event.preventDefault();

        API.post('/login', {username, password})
            .then(({data}) => {
                authService.login(data.token);
                toggleRedirect(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleUsername = event => updateUsername(event.target.value);
    const handlePassword = event => updatePassword(event.target.value);

    return (
        <Form onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Utilizatorul</Form.Label>
                <Form.Control type="username" placeholder="Introdu numele utilizatorului" value={username}
                              onChange={handleUsername}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Parola</Form.Label>
                <Form.Control type="password" placeholder="Introdu parola" value={password} onChange={handlePassword}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            {redirect && <Redirect to={'/home'}/>}
        </Form>
    );
};


export default Login