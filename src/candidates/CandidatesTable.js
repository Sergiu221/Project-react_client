import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ReactExport from "react-data-export";
import {
  getHeaderTable,
  getHeaderTableFilter
} from "./UtilCandidatesFunctions.js";
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
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    return (
      <div>
        <ReactTable
          columns={getHeaderTable(this.renderEditable)}
          data={this.state.candidates}
          noDataText={"Te rog, asteapta"}
        />
        <ExcelFile filename="Candidati">
          <ExcelSheet data={this.state.candidates} name="Candidates">
            {getHeaderTableFilter(this.renderEditable).map(function(ColumnHeader) {
              return (
                <ExcelColumn
                  key={ColumnHeader.Header}
                  label={ColumnHeader.Header}
                  value={ColumnHeader.accessor}
                />
              );
            })}
          </ExcelSheet>
        </ExcelFile>
      </div>
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
