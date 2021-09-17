import React, { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addTodo } from '../redux/todoSlice';

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
        <div>
            <input onKeyPress={handleKeyPress} type="text" onChange={e=>setInput(e.target.value)} value={input} />
            <button onClick={()=>{
                dispatch(addTodo(input));
                setInput("")
            }}>add</button>
        </div>
    )
}

export default TodoForm
