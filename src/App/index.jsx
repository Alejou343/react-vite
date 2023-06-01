import React from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../Home/index.jsx';
import { MyAccount } from '../MyAccount/index.jsx';
import { MyOrder } from '../MyOrder/index.jsx';
import { MyOrders } from '../MyOrders/index.jsx';
import { SignIn } from '../SignIn/index.jsx';
import { NotFound } from '../NotFound/index.jsx';
import { Navbar } from '../Components/Navbar/index.jsx';
import { ShoppingCartProvider } from '../Context/index.jsx';
import { SignUp } from '../SignUp/index.jsx';
import { Forgot } from '../Forgot/index.jsx';
import initializeLS from '../Utils/initializeLS.js';
import './App.css';

const AppRoutes = () => {

  const active = localStorage.getItem('en-linea');

  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/all', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account',  element: JSON.parse(active) ? <MyAccount /> : <Navigate replace to='/sign-in' />},
    {path: '/my-order',  element: JSON.parse(active) ? <MyOrder /> : <Navigate replace to='/sign-in' />},
    {path: '/my-orders/last',  element: JSON.parse(active) ? <MyOrder /> : <Navigate replace to='/sign-in' />},
    {path: '/my-orders/:id',  element: JSON.parse(active) ? <MyOrder /> : <Navigate replace to='/sign-in' />},
    {path: '/my-orders',  element: JSON.parse(active) ? <MyOrders /> : <Navigate replace to='/sign-in' />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />},
    {path: '/forgot-password', element: <Forgot />},
    {path: '/*', element: <NotFound />},
  ]);
  return routes
}

const App = () => {

  initializeLS();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes /> 
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App };
