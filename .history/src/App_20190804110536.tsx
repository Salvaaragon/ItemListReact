import React, { Component } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';

interface State {
	newTask: Task;
	tasks: Task[];
}

class App extends Component<{}, State> {

	private addTask = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		this.setState(previousState => ({
			newTask: {
				id: previousState.newTask.id + 1,
				name: ""
			},
			taks: []
		}))
	}

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
					task={this.state.newTask}
					onAdd={this.addTask}
					onChange={this.handleTaskChange}
				/>
			</div>
		)
	}
}

export default App;
