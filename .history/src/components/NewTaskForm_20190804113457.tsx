import React, { FunctionComponent } from "react";
import { Task } from "../models/task";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

var myStyle = {
    margin: "10px",
};

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
    <Grid container spacing={3} style={myStyle}>
        <form onSubmit={onAdd}>
            <Input onChange={onChange} value={task.name} style={myStyle} placeholder="Nombre de la tarea"/>
            <Button variant="contained" color="primary" type="submit">Añadir tarea</Button>
        </form>
    </Grid>
);