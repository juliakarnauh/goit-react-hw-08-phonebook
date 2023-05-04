import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'page/RegisterPage/RegisterPage';
import {LoginPage} from 'page/LoginPage/LoginPage'
import { ContactsPage } from 'page/ContactsPage/ContactsPage';
import {PublicRoute} from './PublicRoute/PublicRoute';
import {PrivateRoute} from './PrivateRoute/PrivateRoute'
import {HomePage} from 'page/HomePage/HomePage'
export const App = () => {
  return (
    <ChakraProvider>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage/>}/>
        <Route path="register" element={<PublicRoute><RegisterPage/></PublicRoute>}/>
        <Route path="login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path="contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
      </Route>
    </Routes>
    </ChakraProvider>
  );
};
