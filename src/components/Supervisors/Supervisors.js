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
        const url = "http://localhost:8080/supervisors";
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

const cellEditProp = {
    mode: 'click'
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
}
export default Supervisors;
