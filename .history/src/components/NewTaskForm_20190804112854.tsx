import React, { FunctionComponent } from "react";
import { Task } from "../models/task";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    task,
}) => (
    <div class="mb-2">
        <Grid container spacing={3}>
            <Grid item xs>
            <form onSubmit={onAdd}>
                <Input onChange={onChange} value={task.name}/>
                <Button variant="contained" color="primary" type="submit">Add a task</Button>
            </form>
            </Grid>
        </Grid>
    </div>
);