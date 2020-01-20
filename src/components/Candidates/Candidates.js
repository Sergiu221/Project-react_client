import React, {useState, useEffect} from "react";
import API from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
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
        {field: "cnp", text: "CNP", dataType: "java.lang.Long", extra: {isKey: true}},
        {field: "firstName", dataType: "java.lang.String", text: "Prenume"},
        {field: "lastName", dataType: "java.lang.String", text: "Nume"},
        {field: "highSchool", dataType: "java.lang.String", text: "Liceu"},
        {field: "categoryDTO", dataType: "com.sergiu.dto.CategoryDTO", text: "Categoria"}
    ];

    return (
        <Table data={candidates} baseUrl={baseUrl} columnData={buildColumnData}/>
    );
}