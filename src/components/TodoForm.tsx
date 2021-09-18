import  { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addTodo } from '../redux/todoSlice';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

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
        <Wrapper>
            <Input onKeyPress={handleKeyPress} type="text" onChange={e=>setInput(e.target.value)} value={input} placeholder="Add your new todo" />
            <Button onClick={()=>{
                dispatch(addTodo(input));
                setInput("")
            }}>
                <AddIcon />
            </Button>
        </Wrapper>
    )
}

export default TodoForm
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;
    align-items: center;
    border-radius: 5px;
`;
const Input = styled.input`
    outline: none;
    border: none;
    flex: 1;
    padding: 0 4px;
    font-size: 1rem;
    height: 2rem;
`;
const Button = styled.button`
    background: #63B4B8;
    border: none;
    color: white;
    outline: none;
    padding: 0 5px;
    cursor: pointer;
    height: 2rem;
`;