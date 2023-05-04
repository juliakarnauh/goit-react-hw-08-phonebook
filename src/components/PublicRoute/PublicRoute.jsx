import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOnline } from 'redux/Auth/authSelections';

export const PublicRoute = ({ children }) => {
	const location = useLocation()
	const online = useSelector(selectOnline);
  if(online){
	return <Navigate to={location.state?.from.pathname || '/contacts'} />;
  }
  return children;
};