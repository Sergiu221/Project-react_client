import React, { Component } from 'react';
import './Allocation.css';

export interface ITableProps {
  name: string;
  link: string;
  pdf: string;
}

class Alocation extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {};
	}
	
  render() {
    return (
      <div className="table">
			<button className="buttonAllocation">Repartizare</button>
      </div>
    );
  }
}

export default Alocation;
