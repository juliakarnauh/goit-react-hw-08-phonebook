import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from "redux/Auth/authOperations"
import {selectUserEmail} from 'redux/Auth/authSelections'
import { Title, Div, Button, Span } from './UserMenu.styled';
export const UserMenu = ()=>{
    const dispatch = useDispatch()
    const email = useSelector(selectUserEmail)
    
    return(
    <Div>
  <Title>Hi, <Span>{email} </Span>!</Title>
  <Button type="button" onClick={() => {dispatch(logoutThunk(email)) }}>Logout</Button>
</Div>)
}