import React, { FunctionComponent } from "react";
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

import { Task } from "../models/task";
import { ListItemText } from "@material-ui/core";

interface Props {
	task: Task;
	onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
	const onClick = () => {
	onDelete(task);
	};

	return (
	<ListItem alignItems="flex-start">
		<ListItemText>{task.name}</ListItemText>
		<IconButton edge="end" aria-label="delete" onClick={onClick}>
			<DeleteIcon />
		</IconButton>
	</ListItem>
	<Divider variant="inset" component="li"/>
  );
};