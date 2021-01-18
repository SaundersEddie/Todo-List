import React, {useState} from 'react'
import {v4 as uuid} from 'uuid';
import { Button, TextField } from "@material-ui/core";

export default function TodoForm( {addTodo}) {
    const [todo, setTodo] = useState ({
        id:"",
        task:"",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo ({ ...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        let currentTime = new Date();
        let currentMinutes = currentTime.getMinutes();
        if (currentMinutes < 10) currentMinutes = "0" + currentTime.getMinutes();
        let createTime = `${currentTime.getHours()}:${currentMinutes}` 
        var myTodo = `${createTime} ${todo.task.trim()}`;

        if (todo.task) {
            todo.task = myTodo; 
            addTodo({...todo, id: uuid()});
            setTodo({ ...todo, task: "" });
        }
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <TextField className="myTextfield"
                    label="Task"
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange} 
                />
                <Button 
                    type="submit">
                    submit
                </Button>
            </form>
        </div>
    )
}
