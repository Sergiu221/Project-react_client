import React, {useEffect, useState} from "react";
import API from "../utils/API";
import Table from "../Table";


export default function IndividualHall(props) {
    const [candidates, setCandidates] = useState([]);
    const baseUrl = 'candidates';
    const {id} = props.match.params;

    useEffect(() => {
        (async () => {
            const result = await API.get('/halls/' + id);

            setCandidates(result.data.listCandidates);
        })();
        }, [id]);

    const buildColumnData=[
            {field: "cnp", text: "CNP"},
            {field: "firstName", text: "Prenume"},
            {field: "lastName", text: "Nume"},
            {field: "highSchool", text: "Liceu"}
        ];


    return (
        <Table data={candidates} baseUrl={baseUrl} columnData={buildColumnData} keyField={"cnp"}/>
    );
}