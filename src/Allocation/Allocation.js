import React, {
	Component
} from 'react';
import './Allocation.css';
import FileService from './../Services/FileService.js';
import { saveAs } from 'file-saver';

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
            saveAs(response.data, "raport.pdf");
			
		}).catch(function (error) {
			
		});
	}
	render() {
		return ( <
			div className = "table" >
			<
			button className = "buttonAllocation"
			onClick = {
				this.fileSelectHandler
			} > Repartizare < /button> <
			/div>
		);
	}
}

export default Alocation;