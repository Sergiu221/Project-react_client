import React, {useEffect, useState} from "react";
import API from "../utils/API";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import '../table-button.css';

export default function Supervisors() {
    const [supervisors, setSupervisors] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API.get('/supervisors');
            console.log(result.data);
            setSupervisors(result.data);
        })();
    }, []);

    function onBeforeSaveCell(row, cellName, cellValue) {
        console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
        row[cellName] = cellValue;
        API.put("/supervisors/" + row.id, row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function onAfterInsertRow(row) {
        console.log("Add default id with value -1");
        row.id = "-1";
        console.log(row);
        API.post("/supervisors/", row).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    function onAfterDeleteRow(rowKeys) {

        console.log("Delete supervisor with id:" + rowKeys);
        API.delete("/supervisors/" + rowKeys).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    const options = {
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
        <BootstrapTable data={supervisors}
                        options={options}
                        insertRow={true}
                        deleteRow={true}
                        search={true}
                        multiColumnSearch={true}
                        exportCSV={true}
                        selectRow={selectRowProp}
                        cellEdit={cellEditProp}>
            <TableHeaderColumn dataField='id' isKey hidden hiddenOnInsert searchable={false}
                               autoValue={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataSort={true}>Prenume</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataSort={true}>Nume</TableHeaderColumn>
            <TableHeaderColumn>Sala</TableHeaderColumn>
        </BootstrapTable>
    );
}