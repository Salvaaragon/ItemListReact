import React, { FunctionComponent } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
      <ListItemText>{task.name}</ListItemText> <ListItemIcon>X</ListItemIcon><button onClick={onClick}>X</button>
    </ListItem>
  );
};