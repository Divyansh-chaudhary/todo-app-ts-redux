import {  useSelector } from 'react-redux'
import styled from 'styled-components';
import {  RootState } from '../redux/store'
import TodoItem from './TodoItem';

interface Btn {
    grow: boolean
}

const TodoList = () => {
    const todoList = useSelector((state: RootState)=>state);

    return (
        <List grow={todoList.length > 0}>
            {todoList.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    completed={todo.completed}
                />
            ))}
        </List>
    )
}

export default TodoList
const List = styled.section<Btn>`
    padding: ${p => p.grow && "1rem 0"};
`;