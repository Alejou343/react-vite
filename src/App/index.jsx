import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home/index.jsx';
import { MyAccount } from '../MyAccount/index.jsx';
import { MyOrder } from '../MyOrder/index.jsx';
import { MyOrders } from '../MyOrders/index.jsx';
import { SignIn } from '../SignIn/index.jsx';
import { NotFound } from '../NotFound/index.jsx';
import { Navbar } from '../Components/Navbar/index.jsx';
import { ShoppingCartProvider } from '../Context/index.jsx';
import './App.css';

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/all', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ]);
  return routes
}

const App = () => {

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
