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

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: []
        };
    }

    componentDidMount() {
        const url = "https://api-licenta.herokuapp.com/candidates";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(candidates => {
                this.setState({
                    candidates: candidates
                });
            });
    }

    render() {
        console.log(this.state.candidates);
        return (
            <Styles>
                <BootstrapTable data={this.state.candidates}
                                options={options}
                                insertRow={true}
                                deleteRow={true}
                                search={true}
                                multiColumnSearch={true}
                                exportCSV={true}
                                selectRow={selectRowProp}
                                cellEdit={cellEditProp}>
                    <TableHeaderColumn dataField='id' isKey hidden searchable={false}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='cnp' dataSort={true}>CNP</TableHeaderColumn>
                    <TableHeaderColumn dataField='firstName'>Prenume</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastName' dataSort={true}>Nume</TableHeaderColumn>
                    <TableHeaderColumn dataField='highSchool'>Liceu</TableHeaderColumn>
                </BootstrapTable>
            </Styles>
        );
    }
}

function onBeforeSaveCell(row, cellName, cellValue) {
    console.log("Change " + cellName + "to value: " + cellValue + " with row-id:" + row.id);
    row[cellName] = cellValue;
    return fetch("https://api-licenta.herokuapp.com/candidates/" + row.id, {
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
// If you want to enable deleteRow, you must enable row selection also.
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


export default Candidates;
