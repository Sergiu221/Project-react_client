import React, {
	Component
} from 'react';
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

	fileSelectHandler = (event) => {
		console.log("Incerc sa generez un raport!");
		alert("Incerc sa generez un raport!");

		this.fileService.generateFileFromServer(this.props.link_server).then((response) => {}).catch(function (error) {
			console.log(error);
			if (error.response) {
				//HTTP error happened
				console.log("Upload error. HTTP error/status code=", error.response.status);
			} else {
				//some other error happened
				console.log("Upload error. HTTP error/status code=", error.message);
			}
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