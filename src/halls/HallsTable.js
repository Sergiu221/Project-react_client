import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ReactExport from "react-data-export";

class HallsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halls: []
    };
    this.renderEditable = this.renderEditable.bind(this);
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

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.halls];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.updateHall(cellInfo.original.id, cellInfo.original);
          this.setState({ data });
          console.log(cellInfo.original);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.halls[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  render() {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    const columns = [
      {
        Header: "Nume",
        accessor: "name",
        Cell: this.renderEditable
      },
      {
        Header: "Nr total de locuri",
        accessor: "size",
        Cell: this.renderEditable
      }
    ];
    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.halls}
          noDataText={"Te rog, asteapta"}
        />
        <ExcelFile filename="Sali">
          <ExcelSheet data={this.state.halls} name="Sali">
            <ExcelColumn label="Nume" value="name" />
            <ExcelColumn label="Nr de locuri" value="size" />
          </ExcelSheet>
        </ExcelFile>
      </div>
    );
  }

  updateHall(id, data) {
    return fetch("http://localhost:8080/halls/" + id, {
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
export default HallsTable;
