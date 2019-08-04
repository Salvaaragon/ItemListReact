import React, { Component } from 'react';
import { Task } from './models/task';

interface State {
	newTask: Task;
	tasks
}

class App extends Component {
	render() {
		return(
			<div>
				<h2>Hello React TS!</h2>
			</div>
		)
	}
}

export default App;
