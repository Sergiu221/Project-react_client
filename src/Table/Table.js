import React, { Component } from 'react';
import pdf_icon from './pdf_icon.png';
import './Table.css';

export interface ITableProps {
  name: string;
  link: string;
  pdf: string;
}

class Table extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {};
	}
	
  render() {
    return (
      <div className="table">
       <h2 id='name'>{this.props.name}</h2>
		<div className="tableproperties">
		<div id='link'>
			<button className="button">{this.props.link}</button>
		</div>
		<div id='pdf'><span className="pdf_icon"></span>
		</div>
		</div>
      </div>
    );
  }
}

export default Table;
