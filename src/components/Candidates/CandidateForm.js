import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useEffect} from "react";
import API from "../utils/API";
import {useRef} from "react";

export default function CandidateFrom() {
    const [categories, setCategories] = useState([]);
    const {handleSubmit} = useForm();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (async () => {
            const result = await API.get('/categories');
            console.log(result.data)
            setCategories(result.data);
        })();
    }, []);


    let cnp = useRef();
    let firstName = useRef();
    let lastName = useRef();
    let categoryDTO = useRef();
    //let hallDTO = useRef();

    let myValue = {
        cnp: undefined,
        firstName: undefined,
        lastName: undefined,
        categoryDTO: undefined,
        hallDTO: undefined
    };

    function onSelect(e) {
        let {value} = e.target;
        categoryDTO = categories.find(element => element.id == value)

    }

    function handleInsert() {
        myValue.cnp = cnp.current.value;
        myValue.firstName = firstName.current.value;
        myValue.lastName = lastName.current.value;
        console.log(categories);
        console.log(categoryDTO);
        myValue.categoryDTO = categoryDTO;

        console.log(myValue);
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
                        <Form.Group controlId={"cnp"}>
                            <Form.Label>CNP</Form.Label>
                            <Form.Control ref={cnp} type="text" placeholder=""/>
                        </Form.Group>

                        <Form.Group controlId={"firstName"}>
                            <Form.Label>Prenume</Form.Label>
                            <Form.Control ref={firstName} type="text" placeholder=""/>
                        </Form.Group>

                        <Form.Group controlId={"lastName"}>
                            <Form.Label>Nume</Form.Label>
                            <Form.Control ref={lastName} type="text" placeholder=""/>
                        </Form.Group>

                        <Form.Group controlId={"categoryId"}>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control as="select" onChange={onSelect}>
                                <option value="0">Alege...</option>
                                {
                                    categories.map((category, j) => {
                                        return <option key={j} value={category.id}>{category.name}</option>
                                    })}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Inchide
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit(handleInsert)}>
                            Descarca
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}