import API from "../utils/API";
import {BootstrapTable, ExportCSVButton, TableHeaderColumn} from "react-bootstrap-table";
import React, {useState} from "react";
import {useForm} from "react-hook-form"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Table(props) {
    const {register, handleSubmit} = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let baseUrl = props.baseUrl;
    let data = props.data;
    let columnData = props.columnData;
    let keyField = props.keyField;

    function onBeforeSaveCell(row, cellName, cellValue) {
        console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
        row[cellName] = cellValue;
        API.put(baseUrl + "/" + row.id, row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function isCandidates() {
        return baseUrl === "candidates";
    }

    function onAfterInsertRow(row) {
        if (!isCandidates()) {
            console.log("Add default id with value -1");
            row.id = "-1";
        }
        console.log(row);
        API.post(baseUrl, row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function onAfterDeleteRow(rowKeys) {

        API.delete(baseUrl + "/" + rowKeys).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function handleExportCSVButtonClick() {
        console.log("descarca...");
        handleShow();
    }

    function createCustomExportCSVButton() {
        return (
            <ExportCSVButton
                btnText='Descarca'
                btnContextual='btn-success'
                className='my-custom-class'
                btnGlyphicon='glyphicon-export fa-download'
                onClick={e => handleExportCSVButtonClick(e)}/>
        );
    }

    const options = {
        exportCSVBtn: createCustomExportCSVButton,
        insertText: 'Inseriaza',
        deleteText: 'Sterge',
        // saveText: 'my_save',
        afterInsertRow: onAfterInsertRow,
        afterDeleteRow: onAfterDeleteRow
    };

    const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell
    };

    const selectRowProp = {
        mode: 'checkbox'
    };

    const tableHeaderColumns = columnData.map((column, i) => (
        <TableHeaderColumn dataField={column.field} dataSort={true} key={i} {...column.extra}>
            {column.text}
        </TableHeaderColumn>
    ));

    function filterId() {
        let columns = [];
        columnData.forEach(function (column) {
            if (column.field !== "id") {
                columns.push(column);
            }
        });
        return columns;
    }

    const tableHeaderColumnsFormCheck = filterId().map((column, i) => (
        <Form.Check type="checkbox" name={column.field} id={i} label={column.text} key={column.field}
                    ref={register}/>
    ));

    function handleDownload(data) {
        console.log(data);
        handleClose();
    }

    return (
        <React.Fragment>
            <BootstrapTable data={data}
                            keyField={keyField}
                            options={options}
                            insertRow={true}
                            deleteRow={true}
                            search={true}
                            multiColumnSearch={true}
                            exportCSV={true}
                            selectRow={selectRowProp}
                            cellEdit={cellEditProp}>
                {tableHeaderColumns}
            </BootstrapTable>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alege coloanele pentru raport</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicCheckbox">
                            {tableHeaderColumnsFormCheck}
                        </Form.Group>

                        <Button variant="secondary" onClick={handleClose}>
                            Inchide
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit(handleDownload)}>
                            Descarca
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
        ;
}