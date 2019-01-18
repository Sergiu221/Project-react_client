import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class HallsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halls: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/halls";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(halls => {
        this.setState({
          halls: halls
        });
      });
  }
  render() {
    const columns = [
      {
        Header: "Nume",
        accessor: "name"
      },
      {
        Header: "Nr total de locuri",
        accessor: "size"
      }
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.halls}
        noDataText={"Te rog asteapta"}
      />
    );
  }
}
export default HallsTable;
