import React, { FunctionComponent } from "react";
import List from '@material-ui/core/List';

import { Task } from "../models/task";
import { TaskListItem } from "./TasksListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
    <List component="nav" aria-label="main mailbox folders">
        {tasks.map(task => (
        <TaskListItem task={task} onDelete={onDelete} />
        ))}
	    <Divider variant="inset" component="li"/>
    </List>
);