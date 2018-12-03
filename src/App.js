import React, {
	Component
} from 'react';
import './App.css';
import Table from './Table/Table';
import Allocation from './Allocation/Allocation';

class App extends Component {
	state = {};

	componentDidMount() {
		setInterval(this.hello, 250);
	}

	render() {
		return ( <
			div className = "App" >
			<
			header className = "App-header" >
			<
			/header> <
			Table name = "Supraveghetori"
			link_server = "supervisors" / >
			<
			Table name = "Candidati"
			link_server = "candidates" / >
			<
			Table name = "Sali de examen"
			link_server = "halls" / >
			<
			Allocation name = "Repartizare"
			link_server = "generate_final_report" / >
			<
			/div>
		);
	}
}

export default App;