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

class HallsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: []
        };
    }

    componentDidMount() {
        const url = "http://localhost:8080/halls";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(halls => {
                this.setState({
                    halls: halls
                });
            });
    }

    render() {
        console.log(this.state.halls);
        return (
            <Styles>
                <BootstrapTable data={this.state.halls}
                                options={options}
                                insertRow={true}
                                deleteRow={true}
                                search={true}
                                multiColumnSearch={true}
                                exportCSV={true}
                                selectRow={selectRowProp}
                                cellEdit={cellEditProp}>
                    <TableHeaderColumn dataField='id' isKey hidden searchable={false}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Nume</TableHeaderColumn>
                    <TableHeaderColumn dataField='utilizableSize' dataSort={true}>Nr Loc. Utilizate</TableHeaderColumn>
                    <TableHeaderColumn dataField='size' dataSort={true}>Nr Locuri</TableHeaderColumn>
                    <TableHeaderColumn>Candidati</TableHeaderColumn>
                </BootstrapTable>
            </Styles>
        );
    }

}

function onBeforeSaveCell(row, cellName, cellValue) {
    console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
    row[cellName] = cellValue;
    return fetch("http://localhost:8080/halls/" + row.id, {
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
    closeText: 'my_close'
};
export default HallsTable;
