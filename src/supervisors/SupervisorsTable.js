import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class SupervisorsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supervisors: []
    };
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
  render() {
    const columns = [
      {
        Header: "Nume",
        accessor: "firstName"
      },
      {
        Header: "Prenume",
        accessor: "lastName"
      },
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.supervisors}
        noDataText={"Te rog asteapta"}
      />
    );
  }
}
export default SupervisorsTable;
