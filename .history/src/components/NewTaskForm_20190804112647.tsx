import React, { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Task } from "../models/task";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
    classes: useStyles();
}

export const NewTaskForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    task,
}) => (
    <div>
        <Grid container spacing={3}>
            <form onSubmit={onAdd}>
                <Input onChange={onChange} value={task.name}/>
                <Button variant="contained" color="primary" type="submit">Add a task</Button>
            </form>
        </Grid>
    </div>
);