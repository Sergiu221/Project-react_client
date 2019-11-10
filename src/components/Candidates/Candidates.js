import React, {useState, useEffect} from "react";
import API from "../utils/API";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
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

    const option = {
        exportCSVText: 'descarca',
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