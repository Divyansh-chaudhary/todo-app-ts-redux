import React, { KeyboardEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Todo } from '../models/Todo';
import { AppDispatch } from '../redux/store';
import { removeTodo, setTodoStatus,updateTodo } from '../redux/todoSlice';
import Button from "@material-ui/core/Button/Button";
import { Checkbox } from '@material-ui/core';


const TodoItem = (props: Todo) => {
    const dispatch = useDispatch<AppDispatch>();
    const [editable,setEditable] = useState(false);
    const [value] = useState(props.description);

    const handleEdit = () => {
        setEditable(true);
    }

    const handleUpdate = () => {
        if(value !== "") {
            dispatch(updateTodo({description:value,id:props.id}));
            setEditable(false);
        }
    }

    let pStyle = {
        textDecoration: `${props.completed? "line-through": "none"}`, 
        borderBottom: `${editable ? "1px solid black" : "none"}`
    }

    return (
        <div className="todo-item">
            
            <p contentEditable={editable} 
                onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                    console.log(event.key)
                    event.key === "Enter" && handleUpdate()
                }} style={pStyle}>
                {value}
            </p>
            <div className="actions">
                <Button variant="contained" color="secondary" onClick={()=>dispatch(removeTodo(props.id))}>delete</Button>
                {!props.completed ? (
                    editable
                    ?
                    <Button color="primary" variant="contained" onClick={handleUpdate}>update</Button> 
                    : 
                    <Button color="primary" variant="contained" onClick={handleEdit}>Edit</Button>
                ):""}
                <Checkbox 
                    checked={props.completed} 
                    onChange={()=>{
                        dispatch(setTodoStatus({completed: !props.completed, id:props.id}))
                    }} 
                    onKeyPress={(event: KeyboardEvent<HTMLButtonElement>) => {
                        console.log(event.key)
                        event.key === "Enter" && handleUpdate()
                    }} 
                />
            </div>
        </div>
    )
}

export default TodoItem
