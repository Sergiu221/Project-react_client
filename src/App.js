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
		return (
			<div className = "App" >
				<header className = "App-header" />
				<Table name = "Supraveghetori" typeFile = "SUPERVISORS" />
				<Table name = "Candidati" typeFile = "CANDIDATES" />
				<Table name = "Sali de examen" typeFile = "HALLS" />
				<Allocation name = "Repartizare" link_server = "generate_final_report" />
			</div>
		);
	}
}

export default App;
