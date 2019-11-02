import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import styled from "styled-components";

const Styles = styled.div`
.btn {
    text-transform: uppercase;
    letter-spacing: 2px; 
    }`
;

class Supervisors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supervisors: []
        };
    }

    componentDidMount() {
        const url = api + "/supervisors";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(supervisors => {
                this.setState({
                    supervisors: supervisors
                });
            });
    }

    render() {
        console.log(this.state.supervisors);
        return (
            <Styles>
                <BootstrapTable data={this.state.supervisors}
                                options={options}
                                insertRow={true}
                                deleteRow={true}
                                search={true}
                                multiColumnSearch={true}
                                exportCSV={true}
                                selectRow={selectRowProp}
                                cellEdit={cellEditProp}>
                    <TableHeaderColumn dataField='id' isKey hidden searchable={false}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='firstName' dataSort={true}>Nume</TableHeaderColumn>
                    <TableHeaderColumn dataField='middleName' dataSort={true}>Nume</TableHeaderColumn>
                    <TableHeaderColumn>Sala</TableHeaderColumn>
                </BootstrapTable>
            </Styles>
        );
    }
}

function onBeforeSaveCell(row, cellName, cellValue) {
    console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
    row[cellName] = cellValue;
    return fetch(api + "/supervisors/" + row.id, {
        method: "PUT",
        body: JSON.stringify(row),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });

}

function onAfterInsertRow(row) {
    console.log("Save row[" + row + "]");
    return fetch(api + "/supervisors/", {
        method: "POST",
        body: JSON.stringify(row),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

const cellEditProp = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell
};

const selectRowProp = {
    mode: 'checkbox'
};

const options = {
    exportCSVText: 'my_export',
    insertText: 'my_insert',
    deleteText: 'my_delete',
    saveText: 'my_save',
    closeText: 'my_close',
    afterInsertRow: onAfterInsertRow
}

const api = process.env.REACT_APP_API_HOST;

export default Supervisors;
