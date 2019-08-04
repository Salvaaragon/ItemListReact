import React, { FunctionComponent } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <ListItemText>{task.name}</ListItemText> <ListItemIcon><DeleteIcon className={classes.icon} /></ListItemIcon><button onClick={onClick}>X</button>
    </ListItem>
  );
};