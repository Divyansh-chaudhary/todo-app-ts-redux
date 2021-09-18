import styled from 'styled-components'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoMsg from './TodoMsg'

const TodoApp = () => {
    return (
        <Todo>
            <TodoForm />
            <TodoList />
            <TodoMsg />
        </Todo>
    )
}

export default TodoApp
const Todo = styled.section`
    width: 80%;
    max-width: 700px;
    margin: 3rem auto 0;
    box-shadow: 0 5px 20px #ccc;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 1rem;
`;