import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOnline } from 'redux/Auth/authSelections';

export const PrivateRoute = ({ children }) => {
	const location = useLocation();
  const online = useSelector(selectOnline);
  
  if(!online){
	return <Navigate to='/login' state={{ from: location }}/> 
  }
  return children;
};