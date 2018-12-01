import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Table.css';

export interface ITableProps {
  name: string;
  link: string;
  pdf: string;
}

class Table extends Component {
	 
	constructor(props) {
		super(props);
		this.state = ({filename: "",
						id_filename:"id_filname_"+this.props.name});
	}
	
  fileSelectHandler =event =>{
  this.state.filename = event.target.files[0].name;
     const element = (
   <p id={this.state.id_filename}> {this.state.filename}</p>);
   ReactDOM.render(element,document.getElementById(this.state.id_filename));
 }
  render() {
    return (
      <div className="table">
       <h2 id='name'>{this.props.name}</h2>
		<div className="tableproperties">
			<div className="upload-btn-wrapper">
				<div className="btn">Upload a file</div>
				<input type="file" onChange={this.fileSelectHandler}/>
			</div>
			<p id={this.state.id_filename}> {this.state.filename}</p>
			<div id='pdf'><span className="pdf_icon"></span>
			</div>
		</div>
      </div>
    );
  }
}

export default Table;
