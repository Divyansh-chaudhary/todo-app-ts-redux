import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";
import {v4 as uuid} from 'uuid';

const initialState = [] as Todo[];

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos: (state) => {
            // try {
            //     const serialisedState = localStorage.getItem("todos");
            //     if (serialisedState === null) return undefined;
            //     state = JSON.parse(serialisedState);
            // } catch (e) {
            //     console.warn(e);
            //     return undefined;
            // }
        },
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload);
                // try {
                //     const serialisedState = JSON.stringify(state);
                //     localStorage.setItem("todos", serialisedState);
                // } catch (e) {
                //     console.warn(e);
                // }
                
            },
            prepare: (description: string ) => ({
                payload: {
                    id: uuid(),
                    description,
                    completed: false
                }
            })
        },
        removeTodo:(state, action: PayloadAction<string>)=>{
            const index = state.findIndex(todo => todo.id === action.payload);
            state.splice(index,1);
        },
        removeAll: (state) => {
            state.splice(0);
        },
        setTodoStatus:(state, action: PayloadAction<{completed: boolean, id: string}>)=>{
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        updateTodo: (state, action: PayloadAction<{description: string, id:string}>)=>{
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].description = action.payload.description;
        }
    }
});

export const {addTodo,getTodos,removeAll, removeTodo,updateTodo, setTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;