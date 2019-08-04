import React, { Component } from 'react';
import { Task } from './models/task';

interface State {
	newTask: Task;
	tasks: Task[];
}

class App extends Component<{}, State> {
	state = {
		newTask
	}
	render() {
		return(
			<div>
				<h2>Hello React TS!</h2>
			</div>
		)
	}
}

export default App;
