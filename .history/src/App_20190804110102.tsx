import React, { Component } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';

interface State {
	newTask: Task;
	tasks: Task[];
}

class App extends Component<{}, State> {
	state = {
		newTask: {
			id: 1,
			name: ""
		},
		tasks: []
	}
	render() {
		return(
			<div>
				<h2>Hello React TS!</h2>
				<NewTaskForm
					task
			</div>
		)
	}
}

export default App;
