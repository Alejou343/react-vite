import React from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import { PlusSmallIcon, CheckIcon } from '@heroicons/react/24/solid';

const Card = (props) => {

    const context = React.useContext(ShoppingCartContext);    
    
    const addProductToCart = (ID) => {

        const element = context.items.findIndex(x => x.id === ID);
        context.setCartProducts([...context.cartProducts, context.items[element]]);
        context.setCounter(context.counter + 1)
    }

    const renderIcon = (ID) => {
        const isInCart = context.cartProducts.filter(x => x.id === ID).length > 0;

        if (!isInCart) {
            return (
            context.active && 
            <div className='absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-3 font-bold'
                onClick = {() => addProductToCart(props.id)}>
                <div>   
                    <PlusSmallIcon className="text-black-500 h-6 w-6 cursor-pointer"/>
                </div>
            </div>
            )
        } else {
            return (
            <div className='absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-3 font-bold'>
                <div>   
                    <CheckIcon className="text-white bg-green-500 h-6 w-6 rounded-full" />
                </div>
            </div>
            )
        }
    }

    return (
        <div className = 'bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className = 'relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5'>
                    {props.category}
                </span>
                <img className = 'w-full h-full object-cover rounded-lg' 
                src={props.image[0]} alt="img" 
                onClick = {() => context.abrirModal(props.id)}/>
                {renderIcon(props.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    {props.title}
                </span>
                <span className='text-ld font-medium'>
                    ${props.price}
                </span>
            </p>
        </div>
    );
}

export {Card};