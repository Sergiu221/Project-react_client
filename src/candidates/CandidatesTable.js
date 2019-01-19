import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class CandidatesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    };
    this.renderEditable = this.renderEditable.bind(this);
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

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.candidates];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.updateCandidate(cellInfo.original.id, cellInfo.original);
          this.setState({ data });
          console.log(cellInfo.original);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.candidates[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const columns = [
      {
        Header: "CNP",
        accessor: "cnp",
        Cell: this.renderEditable
      },
      {
        Header: "Nume",
        accessor: "firstName",
        Cell: this.renderEditable
      },
      {
        Header: "Prenume",
        accessor: "lastName",
        Cell: this.renderEditable
      },
      {
        Header: "Liceu",
        accessor: "liceu",
        Cell: this.renderEditable
      }
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.candidates}
        noDataText={"Te rog, asteapta"}
      />
    );
  }

  updateCandidate(id, data) {
    return fetch("http://localhost:8080/candidates/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default CandidatesTable;
