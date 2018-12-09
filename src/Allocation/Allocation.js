import React, {
	Component
} from 'react';
import './Allocation.css';
import FileService from './../Services/FileService.js';
import { saveAs } from 'file-saver';
import Axios from 'axios';

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

	fileSelectHandler = (event) => {
		console.log("Incerc sa generez un raport!");
		alert("Incerc sa generez un raport!");

		this.fileService.generateFileFromServer(this.props.link_server).then((response) => {
			console.log("Response", response);
			
			
			
		}).catch(function (error) {
			
		});
	}
	render() {
		return ( <div className = "table" >
				<a className = "buttonAllocation" href="http://localhost:8080/generate_final_report" download> Repartizare </a> 
			</div>
		);
	}
}

export default Alocation;