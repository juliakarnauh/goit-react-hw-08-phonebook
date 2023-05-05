import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'page/RegisterPage/RegisterPage';
import {LoginPage} from 'page/LoginPage/LoginPage'
import { ContactsPage } from 'page/ContactsPage/ContactsPage';
import {PublicRoute} from './PublicRoute/PublicRoute';
import {PrivateRoute} from './PrivateRoute/PrivateRoute'
import {HomePage} from 'page/HomePage/HomePage'
import { refreshThunk } from 'redux/Auth/authOperations'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectOnline } from 'redux/Auth/authSelections';
export const App = () => {
  const dispatch = useDispatch();
  const online = useSelector(selectOnline)
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <ChakraProvider>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage/>}/>
        <Route path="register" element={<PublicRoute><RegisterPage/></PublicRoute>}/>
        <Route path="login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path="contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
        {online? (<Route path="*" element={<ContactsPage />} />) : (<Route path="*" element={<RegisterPage/>} />)}
      </Route>
    </Routes>
    </ChakraProvider>
  );
};
