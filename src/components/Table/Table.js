import API from "../utils/API";
import API_BLOB from "../utils/API_BLOB";
import {BootstrapTable, ExportCSVButton, TableHeaderColumn} from "react-bootstrap-table";
import React from "react";

export default function Table(props) {

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
        if (baseUrl === "candidates") {
            return true;
        }
        return false;
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
        API_BLOB.get("/report"
        ).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log(response.data);
            console.log(response);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", baseUrl + ".pdf");
            document.body.appendChild(link);
            link.click();
        });
    }

    function createCustomExportCSVButton() {
        return (
            <ExportCSVButton
                btnText='Descarca'
                btnContextual='btn-success'
                className='my-custom-class'
                btnGlyphicon='glyphicon-export'
                onClick={e => handleExportCSVButtonClick()}/>
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

    return (
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
    );
}