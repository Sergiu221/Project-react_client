import React, {useState, useEffect, useCallback} from "react";
import {API} from "../utils/API";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import Table from "../Table";
import {Link} from "react-router-dom";
import "./Candidates.css"

export default function Candidates() {
    const [, updateState] = React.useState();
    const [candidates, setCandidates] = useState([]);
    const baseUrl = 'candidates';
    const baseUrlHalls = 'halls';
    const baseUrlCategories = 'categories';
    const [applicationState, setApplicationState] = useState({
        id: 1,
        isImportedResources: 'false',
        isDistributed: 'false',
        isDistributedFinalized: 'false',
        isExamFinish: 'false'
    });

    useEffect(() => {
            API.get('data_base').then(({data}) => {
                setApplicationState(data);
            })
        }, []
    );

    useEffect(() => {
        (async () => {
            const result = await API.get(baseUrl);
            setCandidates(result.data);
        })();
    }, []);

    function buttonInsideHall(id) {
        if (id != null) {
            return (<div>
                <Link to={`${baseUrlHalls}/${id.id}`}>{id.name}</Link>
            </div>)
        }
    }

    function buttonInsideCategory(id) {
        if (id != null) {
            return (<div>
                <Link to={`${baseUrlCategories}/${id.id}`}>{id.name}</Link>
            </div>)
        }
    }

    function rejectCandidate(cnp) {
        API.get('/admission/reject/' + cnp);
    }

    function buttonReject(cnp) {

        const candidate = candidates.find(candidate => candidate.cnp === cnp);
        console.log(candidate.statusExam);
        if (candidate.statusExam === "RESPINS") {
            return (<div>RESPINS</div>);
        } else {
            this.handleRejectCandidate = function (id) {
                rejectCandidate(id);
            };
            return (<button className="button-reject-candidate"
                            onClick={() => this.handleRejectCandidate(cnp)}> Respinge </button>);
        }
    }

    const buildColumnData = [
        {field: "cnp", text: "CNP", dataType: "java.lang.Long", extra: {isKey: true}},
        {field: "firstName", dataType: "java.lang.String", text: "Prenume"},
        {field: "lastName", dataType: "java.lang.String", text: "Nume"},
        {field: "highSchool", dataType: "java.lang.String", text: "Liceu"},
        {
            field: "categoryDTO",
            dataType: "com.sergiu.dto.CategoryDTO",
            text: "Categoria",
            extra: {dataFormat: buttonInsideCategory, editable: false}
        },
        {
            field: "hallDTO",
            dataType: "com.sergiu.dto.HallDTO",
            text: "Sala",
            extra: {dataFormat: buttonInsideHall, editable: false}
        },
        {
            field: "cnp",
            text: "Respinde Candidat",
            dataType: "java.lang.Long",
            extra: {
                dataFormat: buttonReject,
                hidden: applicationState.isExamFinish === "false",
                hiddenOnInsert: true,
                editable: false
            }
        }
    ];

    return (
        <Table data={candidates} baseUrl={'candidates'} columnData={buildColumnData}/>
    );
}