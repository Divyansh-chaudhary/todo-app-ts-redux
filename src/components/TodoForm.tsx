import React, { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addTodo } from '../redux/todoSlice';
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";

const TodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            dispatch(addTodo(input));
            setInput("")
        }
    }

    return (
        <div className="todo-form">
            {/* <input onKeyPress={handleKeyPress} type="text" onChange={e=>setInput(e.target.value)} value={input} /> */}
            <TextField onKeyPress={handleKeyPress} type="text" onChange={e=>setInput(e.target.value)} value={input} className="input" id="outlined-basic" label="Outlined" variant="outlined" />
            
            {/* <button onClick={()=>{
                dispatch(addTodo(input));
                setInput("")
            }}>
                <AddIcon />
            </button> */}
            
        </div>
    )
}

export default TodoForm
