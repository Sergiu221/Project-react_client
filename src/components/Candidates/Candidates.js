import React, {useState, useEffect} from "react";
import tableOptions from "../table-options";
import API from "../utils/API";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import styled from "styled-components";


const Styles = styled.div`
.btn {
    text-transform: uppercase;
    letter-spacing: 2px; 
    }`
;

export default function Candidates(props) {
    const [candidates, setCandidates] = useState([]);
    const [option] = useState(tableOptions);

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

    const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell
    };

    const selectRowProp = {
        mode: 'checkbox'
    };

    return (
        <Styles>
            <BootstrapTable data={candidates} //sa vina de pe props....
                            options={option}
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