import React, {useEffect, useState} from "react";
import API from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import {Link} from "react-router-dom";
import Table from "../Table";

export default function HallsTable() {
    const [halls, setHalls] = useState([]);
    const baseUrl = 'halls';

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            console.log(baseUrl);
            console.log(result.data);
            setHalls(result.data);
        })();
    }, []);

    const buttonInsideHall = (id) => (
        <div>
            <Link to={`${baseUrl}/${id}`}>Vezi sala</Link>
        </div>
    );

    const buildColumnData = [
        {
            field: "id",
            text: "id",
            dataType: "java.lang.Integer",
            extra: {isKey: true, hidden: true, hiddenOnInsert: true, autoValue: true}
        },
        {field: "name", dataType: "java.lang.String", text: "Nume"},
        {field: "size", dataType: "java.lang.Integer", text: "Nr Maxim de locuri"},
        {field: "utilizableSize", dataType: "java.lang.Integer", text: "Nr Loc. Utilizate"},
        {
            field: "id",
            text: "Candidati",
            extra: {dataFormat: buttonInsideHall, export: false, hiddenOnInsert: true, autoValue: true}
        },
    ];

    return (
        <Table data={halls} baseUrl={baseUrl} columnData={buildColumnData}/>
    );
}