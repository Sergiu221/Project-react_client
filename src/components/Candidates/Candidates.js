import React, {useState, useEffect} from "react";
import API from "../utils/API";
import axios from "axios";
import {BootstrapTable, ExportCSVButton, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import '../table-button.css';


export default function Candidates() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API.get('/candidates');
            console.log(result.data);
            setCandidates(result.data);
        })();
    }, []);

    function onBeforeSaveCell(row, cellName, cellValue) {
        console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
        row[cellName] = cellValue;
        API.put("/candidates/" + row.id, row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function onAfterInsertRow(row) {
        console.log(row);
        API.post("/candidates/", row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function onAfterDeleteRow(rowKeys) {

        console.log("Delete candidate with id:" + rowKeys);
        API.delete("/candidates/" + rowKeys).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function handleExportCSVButtonClick() {
        axios({
            url: 'http://localhost:8080/report',
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'candidati.pdf');
            document.body.appendChild(link);
            link.click();
        });
    }

    function createCustomExportCSVButton() {
        return (
            <ExportCSVButton
                btnText='CustomExportText'
                btnContextual='btn-danger'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={e => handleExportCSVButtonClick()}/>
        );
    }

    const option = {
        exportCSVBtn: createCustomExportCSVButton,
        insertText: 'inseriaza',
        deleteText: 'sterge',
        saveText: 'salveaza',
        closeText: 'inchide',
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
    return (
        <BootstrapTable data={candidates}
                        options={option}
                        insertRow={true}
                        deleteRow={true}
                        search={true}
                        multiColumnSearch={true}
                        exportCSV={true}
                        selectRow={selectRowProp}
                        cellEdit={cellEditProp}>
            <TableHeaderColumn dataField='cnp' isKey dataSort={true}>CNP</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>Prenume</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataSort={true}>Nume</TableHeaderColumn>
            <TableHeaderColumn dataField='highSchool'>Liceu</TableHeaderColumn>
        </BootstrapTable>
    );
}