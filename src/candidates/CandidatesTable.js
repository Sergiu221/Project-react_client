import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class CandidatesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/candidates";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(candidates => {
        this.setState({
          candidates: candidates
        });
      });
  }
  render() {
    const columns = [
      {
        Header: "CNP",
        accessor: "cnp"
      },
      {
        Header: "Nume",
        accessor: "firstName"
      },
      {
        Header: "Prenume",
        accessor: "lastName"
      },
      {
        Header: "Liceu",
        accessor: "liceu"
      }
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.candidates}
        noDataText={"Te rog asteapta"}
      />
    );
  }
}
export default CandidatesTable;
