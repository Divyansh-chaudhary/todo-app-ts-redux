import { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Todo } from '../models/Todo';
import { AppDispatch } from '../redux/store';
import { removeTodo, updateTodo } from '../redux/todoSlice';
import styled  from 'styled-components';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'

const TodoItem = (props: Todo) => {
    const dispatch = useDispatch<AppDispatch>();
    const [editable,setEditable] = useState(false);
    const [value, setValue] = useState(props.description);

    const handleEdit = () => {
        setEditable(true);
    }

    const handleUpdate = () => {
        if(value !== "") {
            dispatch(updateTodo({description:value,id:props.id}));
            setEditable(false);
        }
    }

    const handleKeyPress = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            handleUpdate();
        } else {
            setValue(event.currentTarget.innerText);
        }
    }

    return (
        <Item>
            {editable ? ( <EditInput type="text" value={value} onChange={e=>setValue(e.target.value)} />) : <Text onKeyPress={handleKeyPress}>{value}</Text>}
            <ActionBtns className="actions">
                <EditWrapper>
                    {
                        !props.completed ? (
                            editable
                            ?
                            <SystemUpdateAltIcon titleAccess="Update" onClick={handleUpdate} />
                            : 
                            <EditIcon titleAccess="Edit" onClick={handleEdit} />
                        )
                        :""
                    }
                </EditWrapper>
                <DeleteWrapper onClick={()=>dispatch(removeTodo(props.id))}>
                    <DeleteIcon titleAccess="Delete" />
                </DeleteWrapper>
            </ActionBtns>
        </Item>
    )
}

export default TodoItem;


const ActionBtns = styled.div`
    overflow: hidden;
    width:0;
    transition all 0.2s ease-in;
    display:flex;
    justify-content: flex-end;
`;
const Item = styled.div`
    background-color: rgba(202, 184, 255, 0.1);
    margin: 5px 0;
    width: 100%;
    display: flex;
    &:hover ${ActionBtns} {
        width: 68px;
    }
`;
const Text = styled.p`
    border: none;
    outline: none;
    padding: 10px 5px;
    flex: 1;
    background-color: rgba(202, 184, 255, 0.1);

`;
const EditInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(202,185,255);
    padding: 3px;
    margin: 10px 5px;
    flex: 1;
    background-color: rgba(202, 184, 255, 0.1);
    font-size: 1rem;
`; 
const EditWrapper = styled.div`
    background: #FFC069;
    color: white;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    align-items: center;
`;
const DeleteWrapper = styled.div`
    background: #FF5C58;
    cursor: pointer;
    height: 100%;
    color: white;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
