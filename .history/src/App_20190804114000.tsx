import React, { Component } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';
import { TasksList } from './components/TaskList';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
			tasks: [...previousState.tasks, previousState.newTask]
		}));
	};

	private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			newTask: {
				...this.state.newTask,
				name: event.target.value
			}
		});
	};

	private deleteTask = (taskToDelete: Task) => {
		this.setState(previousState => ({
			tasks: [
				...previousState.tasks.filter(task => task.id !== taskToDelete.id)
			]
		}));
	};
	  

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
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							LISTAS CON REACT
						</Typography>
						<NewTaskForm
							task={this.state.newTask}
							onAdd={this.addTask}
							onChange={this.handleTaskChange}
						/>
						<TasksList tasks={this.state.tasks} onDelete={this.deleteTask}/>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default App;
