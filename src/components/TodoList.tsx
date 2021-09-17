import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useSelector((state: RootState)=>state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            {todoList.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    completed={todo.completed}
                />
            ))}
        </div>
    )
}

export default TodoList
