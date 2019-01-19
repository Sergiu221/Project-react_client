import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class SupervisorsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supervisors: []
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:8080/supervisors";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(supervisors => {
        this.setState({
          supervisors: supervisors
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
          const data = [...this.state.supervisors];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.updateSupervisor(cellInfo.original.id, cellInfo.original);
          this.setState({ data });
          console.log(cellInfo.original);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.supervisors[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  render() {
    const columns = [
      {
        Header: "Nume",
        accessor: "firstName",
        Cell: this.renderEditable
      },
      {
        Header: "Prenume",
        accessor: "lastName",
        Cell: this.renderEditable
      }
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.supervisors}
        noDataText={"Te rog asteapta"}
      />
    );
  }

  updateSupervisor(id, data) {
    return fetch("http://localhost:8080/supervisors/" + id, {
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
export default SupervisorsTable;
