import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { ShoppingCartContext } from '../../Context/index.jsx';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';


const Navbar = () => {

    const activeStyle = 'underline'
    const context = React.useContext(ShoppingCartContext)
    
    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex item-center gap-3'>
                <li className='font-semibold text-lg text-blue-500'>
                <NavLink to = '/'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Shopi
                </NavLink>
                </li>
                <li>
                <NavLink to = '/all'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    All
                </NavLink>
                </li>
                <li>
                <NavLink to = '/clothes'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Clothes
                </NavLink>
                </li>
                <li>
                <NavLink to = '/electronics'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Electronics
                </NavLink>
                </li>
                <li>
                <NavLink to = '/furnitures'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Furnitures
                </NavLink>
                </li>
                <li>
                <NavLink to = '/toys'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Toys
                </NavLink>
                </li>
                <li>
                <NavLink to = '/others'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Others    
                </NavLink>
                </li>
            </ul>

            <ul className='flex item-center gap-3'>
                {context.active && <li className="text-blue-300">{context.dataBase[context.indice].email}</li>}
                {context.active && <li>
                <NavLink to = '/my-orders'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    My Orders
                </NavLink>
                </li>}
                {context.active && <li>
                <NavLink to = '/my-account'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    My Account
                </NavLink>
                </li>}
                {!context.active && <li>
                <NavLink to = '/sign-in'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                >
                    Sign In
                </NavLink>
                </li>}
                {context.active && <li>
                <div onClick = {() => context.setOpenCart(true)} className="flex flex-row items-center">
                    <ShoppingCartIcon className="text-black-500 h-6 w-6 cursor-pointer" /> {context.counter} 
                </div>
                </li>}
            </ul>
        </nav>
    );
}

export { Navbar };