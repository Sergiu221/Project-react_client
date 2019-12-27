import React, {useState, useEffect} from "react";
import API from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import '../table-button.css';
import Table from "../Table";

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);
    const baseUrl = 'candidates';

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            setCandidates(result.data);
        })();
    }, []);

    const buildColumnData = [
        {field: "cnp", text: "CNP", extra: {isKey: true}},
        {field: "firstName", text: "Prenume"},
        {field: "lastName", text: "Nume"},
        {field: "highSchool", text: "Liceu"}
    ];

    return (
        <Table data={candidates} baseUrl={baseUrl} columnData={buildColumnData}/>
    );
}