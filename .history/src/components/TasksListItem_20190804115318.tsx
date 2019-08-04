import React, { FunctionComponent } from "react";
import ListItem from '@material-ui/core/ListItem';

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
    <ListItem>
      <ListItemText>{task.name} <button onClick={onClick}>X</button></ListItemText>
    </ListItem>
  );
};