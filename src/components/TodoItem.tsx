import React, { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Todo } from '../models/Todo';
import { AppDispatch } from '../redux/store';
import { removeTodo, setTodoStatus,updateTodo } from '../redux/todoSlice';

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
        padding: "0 2px",
        textDecoration: `${props.completed? "line-through": "none"}`, 
        border: `${editable ? "1px solid black" : "none"}`
    }

    return (
        <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
            <input 
                type="checkbox" 
                checked={props.completed} 
                onChange={()=>{
                    dispatch(setTodoStatus({completed: !props.completed, id:props.id}))
                }} 
                onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                    console.log(event.key)
                    event.key === "Enter" && handleUpdate()
                }} 
            />
            <p contentEditable={editable} style={pStyle}>{value}</p>
            <button onClick={()=>dispatch(removeTodo(props.id))}>delete</button>
            {!props.completed ? (
                editable
                ?
                <button onClick={handleUpdate}>update</button> 
                : 
                <button onClick={handleEdit}>Edit</button>
            ):""}
        </div>
    )
}

export default TodoItem
