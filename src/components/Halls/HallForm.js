import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import API from "../utils/API";
import {useRef} from "react";

export default function HallFrom() {
    const baseUrl = '/halls';
    const {handleSubmit} = useForm();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let name = useRef();
    let size = useRef();
    let utilizableSize = useRef();

    let myValue = {
        id: undefined,
        name: undefined,
        size: undefined,
        utilizableSize: undefined,
    };


    function handleInsert() {
        myValue.id = -1;
        myValue.name = name.current.value;
        myValue.size = size.current.value;
        myValue.utilizableSize = utilizableSize.current.value;

        API.post(baseUrl, myValue).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        handleClose();
    }


    return (
        <React.Fragment>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header>
                    <Modal.Title>Insereaza in baza de date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId={"name"}>
                            <Form.Label>Nume</Form.Label>
                            <Form.Control ref={name} type="text" placeholder=""/>
                        </Form.Group>

                        <Form.Group controlId={"size"}>
                            <Form.Label>Nr. maxim de locuri</Form.Label>
                            <Form.Control ref={size} type="text" placeholder=""/>
                        </Form.Group>

                        <Form.Group controlId={"utilizableSize"}>
                            <Form.Label>Nr. de locuri utilizabile</Form.Label>
                            <Form.Control ref={utilizableSize} type="text" placeholder=""/>
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Inchide
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit(handleInsert)}>
                            Insereaza
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}