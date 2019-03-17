import React, { Component } from 'react';
import './Allocation.css';
import FileService from './../Services/FileService.js';

export interface ITableProps {
  name: string;
  pdf: string;
}

class Alocation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.fileService = new FileService();
  }

  render() {
    return ( < div className = "table" >
      <
      a className = "buttonAllocation"
      href = "http://localhost:8080/generate_final_report"
      download > Repartizare < /a> < /
      div >
    );
  }
}

export default Alocation;
