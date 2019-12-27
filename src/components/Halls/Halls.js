import React, {useEffect, useState} from "react";
import API from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import '../table-button.css';
import {Link} from "react-router-dom";
import Table from "../Table";

export default function HallsTable() {
    const [halls, setHalls] = useState([]);
    const baseUrl = 'halls';

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            console.log(result.data);
            setHalls(result.data);
        })();
    }, []);

    const buttonInsideHall = (id) => (
        <div>
            <Link to={`${baseUrl}/${id}`}>Sala cu id-ul: {id}</Link>
        </div>
    );

    const buildColumnData = [
        {field: "id", text: "id", extra: {isKey: true, hidden: true, hiddenOnInsert: true}},
        {field: "name", text: "Nume"},
        {field: "utilizableSize", text: "Nr Loc. Utilizate"},
        {field: "id", text: "Candidati", extra: {dataFormat: buttonInsideHall, export: false}},
    ];

    return (
        <Table data={halls} baseUrl={baseUrl} columnData={buildColumnData}/>
    );
}
