import * as React from "react";

import CandidateForm from "../Candidates/CandidateForm";

export default function CustomInsertModal(props) {
    const baseUrl = props.baseUrl;

    function isCandidates() {
        return baseUrl === "candidates";
    }

    if (isCandidates()) {

        return (<CandidateForm/>)
    }
}