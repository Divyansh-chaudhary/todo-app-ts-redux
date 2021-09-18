import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppDispatch, RootState } from '../redux/store'
import { removeAll } from '../redux/todoSlice'

const TodoMsg = () => {

    const todoList = useSelector((state:RootState)=>state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Wrapper>
            <PendingTask>
                <Text>
                    You have {todoList.length} pending task
                </Text>
                <Button onClick={()=>dispatch(removeAll())}>Clear All</Button>
            </PendingTask>
        </Wrapper>
    )
}

export default TodoMsg

const Wrapper = styled.section`

`;
const PendingTask = styled.div`
    padding: 5px 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const Text = styled.h5`

`;
const Button = styled.button`
    background: #ff5c00;
    padding: 5px 15px;
    border:none;
    outline: none;
    color : white;
    letter-spacing: 1px;
    cursor: pointer;
    
`;
