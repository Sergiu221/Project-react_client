import React, {useState, useEffect} from "react";
import API from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import Table from "../Table";
import {Link} from "react-router-dom";

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);
    const baseUrl = 'candidates';
    const baseUrlHalls = 'halls';
    const baseUrlCategories = 'categories';

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            setCandidates(result.data);
        })();
    }, []);

    const buttonInsideHall = (id) => (
        <div>
            <Link to={`${baseUrlHalls}/${id.id}`}>{id.name}</Link>
        </div>
    );

    const buttonInsideCategory = (id) => (
        <div>
            <Link to={`${baseUrlCategories}/${id.id}`}>{id.name}</Link>
        </div>
    );


    const buildColumnData = [
        {field: "cnp", text: "CNP", dataType: "java.lang.Long", extra: {isKey: true}},
        {field: "firstName", dataType: "java.lang.String", text: "Prenume"},
        {field: "lastName", dataType: "java.lang.String", text: "Nume"},
        {field: "highSchool", dataType: "java.lang.String", text: "Liceu"},
        {
            field: "categoryDTO",
            dataType: "com.sergiu.dto.CategoryDTO",
            text: "Categoria", extra: {dataFormat: buttonInsideCategory, editable: false}
        },
        {
            field: "hallDTO",
            dataType: "com.sergiu.dto.HallDTO",
            text: "Sala",
            extra: {dataFormat: buttonInsideHall, editable: false}
        }
    ];

    return (
        <Table data={candidates} baseUrl={baseUrl} columnData={buildColumnData}/>
    );
}